import { NextRequest, NextResponse } from 'next/server';
import { createRouteClient } from '@/lib/supabase/server';
import { SharetribeUserService } from '@/lib/sharetribe/services/user.service';
import type { User } from '@/types/user.types';

/**
 * GET /api/auth/me
 *
 * Retorna dados do usuário autenticado atual
 * - Busca user do Supabase Auth
 * - Busca profile do banco de dados
 * - Opcionalmente busca dados do Sharetribe
 */
export async function GET(request: NextRequest) {
  try {
    // Criar client com sessão do usuário
    const supabase = createRouteClient();

    // 1. Buscar user autenticado
    const { data: { user: authUser }, error: authError } = await supabase.auth.getUser();

    if (authError || !authUser) {
      return NextResponse.json(
        {
          success: false,
          error: 'Não autenticado',
          code: 'UNAUTHORIZED'
        },
        { status: 401 }
      );
    }

    // 2. Buscar profile do banco de dados
    const { data: profile, error: profileError } = await supabase
      .from('profiles')
      .select('*')
      .eq('user_id', authUser.id)
      .single();

    if (profileError) {
      console.error('Profile fetch error:', profileError);

      return NextResponse.json(
        {
          success: false,
          error: 'Erro ao buscar perfil do usuário',
          code: 'PROFILE_NOT_FOUND'
        },
        { status: 404 }
      );
    }

    // 3. Opcional: buscar dados atualizados do Sharetribe
    let sharetribeData = null;
    if (profile.sharetribe_user_id) {
      const sharetribeResult = await SharetribeUserService.getUserById(profile.sharetribe_user_id);
      if (sharetribeResult.success) {
        sharetribeData = sharetribeResult.data;
      }
    }

    // 4. Montar objeto User
    const user: User = {
      id: authUser.id,
      email: authUser.email!,
      emailConfirmed: !!authUser.email_confirmed_at,
      profile: {
        firstName: profile.first_name,
        lastName: profile.last_name,
        phoneNumber: profile.phone_number,
        avatarUrl: profile.avatar_url,
        bio: profile.bio,
        userType: profile.user_type,
        isVerified: profile.is_verified,
        verificationDate: profile.verification_date,
        location: {
          country: profile.country,
          city: profile.city,
          postalCode: profile.postal_code,
        },
        settings: {
          preferredLanguage: profile.preferred_language || 'pt',
          notificationPreferences: profile.notification_preferences || {
            email: true,
            sms: false
          },
        },
        metadata: {
          createdAt: profile.created_at,
          updatedAt: profile.updated_at,
          lastLoginAt: profile.last_login_at,
        },
      },
      sharetribeUserId: profile.sharetribe_user_id,
    };

    // Adicionar campos específicos baseado no tipo de user
    if (profile.user_type === 'host') {
      user.profile.host = {
        referralCode: profile.referral_code,
        companyName: profile.company_name,
        taxId: profile.tax_id,
      };
    }

    if (profile.user_type === 'provider') {
      user.profile.provider = {
        businessLicense: profile.business_license,
        insurancePolicy: profile.insurance_policy,
      };
    }

    // 5. Retornar user completo
    return NextResponse.json(
      {
        success: true,
        data: user,
        sharetribeSync: sharetribeData ? {
          lastSynced: new Date().toISOString(),
          status: 'synced'
        } : null
      },
      { status: 200 }
    );

  } catch (error: any) {
    console.error('Get user error:', error);

    return NextResponse.json(
      {
        success: false,
        error: error.message || 'Erro ao buscar usuário',
        code: 'INTERNAL_ERROR'
      },
      { status: 500 }
    );
  }
}

/**
 * PATCH /api/auth/me
 *
 * Atualizar dados do usuário autenticado
 */
export async function PATCH(request: NextRequest) {
  try {
    const supabase = createRouteClient();

    // 1. Verificar autenticação
    const { data: { user: authUser }, error: authError } = await supabase.auth.getUser();

    if (authError || !authUser) {
      return NextResponse.json(
        {
          success: false,
          error: 'Não autenticado',
          code: 'UNAUTHORIZED'
        },
        { status: 401 }
      );
    }

    // 2. Parse body
    const body = await request.json();
    const { firstName, lastName, phoneNumber, bio, avatarUrl, location, settings } = body;

    // 3. Atualizar profile no Supabase
    const { data: updatedProfile, error: updateError } = await supabase
      .from('profiles')
      .update({
        first_name: firstName,
        last_name: lastName,
        phone_number: phoneNumber,
        bio,
        avatar_url: avatarUrl,
        country: location?.country,
        city: location?.city,
        postal_code: location?.postalCode,
        preferred_language: settings?.preferredLanguage,
        notification_preferences: settings?.notificationPreferences,
      })
      .eq('user_id', authUser.id)
      .select()
      .single();

    if (updateError) {
      console.error('Profile update error:', updateError);

      return NextResponse.json(
        {
          success: false,
          error: 'Erro ao atualizar perfil',
          code: 'UPDATE_ERROR'
        },
        { status: 500 }
      );
    }

    // 4. Atualizar no Sharetribe se existir
    if (updatedProfile.sharetribe_user_id) {
      await SharetribeUserService.updateUserProfile(
        updatedProfile.sharetribe_user_id,
        {
          firstName,
          lastName,
          publicData: {
            phoneNumber,
            bio,
          }
        }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Perfil atualizado com sucesso',
        data: updatedProfile
      },
      { status: 200 }
    );

  } catch (error: any) {
    console.error('Update user error:', error);

    return NextResponse.json(
      {
        success: false,
        error: error.message || 'Erro ao atualizar usuário',
        code: 'INTERNAL_ERROR'
      },
      { status: 500 }
    );
  }
}
