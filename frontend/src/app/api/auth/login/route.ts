import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

/**
 * POST /api/auth/login
 *
 * Login de usuário
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, password } = body;

    if (!email || !password) {
      return NextResponse.json(
        {
          success: false,
          error: 'Email e senha são obrigatórios',
        },
        { status: 400 }
      );
    }

    // Criar client do Supabase com as env vars
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

    if (!supabaseUrl || !supabaseKey) {
      console.error('Supabase credentials not found');
      return NextResponse.json(
        {
          success: false,
          error: 'Configuração do servidor incorreta',
        },
        { status: 500 }
      );
    }

    const supabase = createClient(supabaseUrl, supabaseKey);

    // 1. Fazer login no Supabase Auth
    const { data: authData, error: authError } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (authError || !authData.user) {
      console.error('Auth error:', authError);
      return NextResponse.json(
        {
          success: false,
          error: 'Email ou senha incorretos',
        },
        { status: 401 }
      );
    }

    // 2. Buscar profile do usuário
    const { data: profile, error: profileError } = await supabase
      .from('profiles')
      .select('*')
      .eq('user_id', authData.user.id)
      .single();

    if (profileError) {
      console.error('Profile fetch error:', profileError);
    }

    // 3. Montar objeto user para retornar
    const user = {
      id: authData.user.id,
      email: authData.user.email,
      full_name: profile?.first_name && profile?.last_name
        ? `${profile.first_name} ${profile.last_name}`
        : profile?.first_name || 'Usuário',
      userType: profile?.user_type || 'tourist',
      phone: profile?.phone_number || null,
      createdAt: authData.user.created_at,
    };

    return NextResponse.json(
      {
        success: true,
        user,
        session: authData.session,
      },
      { status: 200 }
    );

  } catch (error: any) {
    console.error('Login error:', error);

    return NextResponse.json(
      {
        success: false,
        error: error.message || 'Erro ao fazer login',
      },
      { status: 500 }
    );
  }
}
