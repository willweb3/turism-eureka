import { marketplaceSdk } from './marketplace';
import type { RegisterFormData, User } from '@/types/user.types';

/**
 * Serviço de Autenticação Sharetribe (lado do cliente)
 * Usa Marketplace API - funciona direto no navegador
 * SEM popup, SEM redirecionamento, tudo na mesma página!
 */

export class SharetribeAuthService {
  /**
   * Criar novo usuário no Sharetribe
   */
  static async register(data: RegisterFormData) {
    try {
      // Verificar se SDK está disponível (só funciona no navegador)
      if (!marketplaceSdk) {
        throw new Error('Marketplace SDK not initialized. This function only works in the browser.');
      }

      console.log('🔄 Iniciando registro de usuário...', {
        email: data.email,
        firstName: data.firstName,
        userType: data.userType,
      });

      // Gerar referral code se for host
      const referralCode = data.userType === 'host'
        ? this.generateReferralCode(data.firstName, data.lastName)
        : undefined;

      // Criar usuário via currentUser.create (endpoint público)
      const response = await marketplaceSdk.currentUser.create({
        email: data.email,
        password: data.password,
        firstName: data.firstName,
        lastName: data.lastName,
        publicData: {
          userType: data.userType,
          phoneNumber: data.phoneNumber || null,
          referralCode: referralCode || null,
        },
        protectedData: {},
        privateData: {},
      });

      console.log('✅ Usuário criado no Sharetribe:', response.data.data);

      return {
        success: true,
        user: this.mapSharetribeUserToUser(response.data.data),
      };

    } catch (error: any) {
      console.error('❌ Erro completo ao criar usuário:', {
        message: error.message,
        status: error.status,
        statusText: error.statusText,
        data: error.data,
        error: error,
      });

      // Erro 409 = email já existe
      if (error.status === 409) {
        return {
          success: false,
          error: 'Este email já está registrado',
          code: 'EMAIL_EXISTS',
        };
      }

      // Erro 400 = dados inválidos
      if (error.status === 400) {
        return {
          success: false,
          error: error.data?.errors?.[0]?.title || 'Dados inválidos',
          code: 'INVALID_DATA',
        };
      }

      // Erro 401/403 = não autorizado
      if (error.status === 401 || error.status === 403) {
        return {
          success: false,
          error: 'Cliente não autorizado para criar usuários',
          code: 'UNAUTHORIZED',
        };
      }

      return {
        success: false,
        error: error.message || error.data?.errors?.[0]?.title || 'Erro ao criar conta',
        code: 'REGISTRATION_ERROR',
      };
    }
  }

  /**
   * Login no Sharetribe
   */
  static async login(email: string, password: string) {
    try {
      // Verificar se SDK está disponível (só funciona no navegador)
      if (!marketplaceSdk) {
        throw new Error('Marketplace SDK not initialized. This function only works in the browser.');
      }

      console.log('🔄 Tentando login com email:', email);

      const response = await marketplaceSdk.login({
        username: email,
        password: password,
      });

      console.log('✅ Login bem-sucedido:', response.data.data);

      return {
        success: true,
        user: this.mapSharetribeUserToUser(response.data.data),
      };

    } catch (error: any) {
      console.error('❌ Erro completo no login:', {
        message: error.message,
        status: error.status,
        statusText: error.statusText,
        data: error.data,
        error: error,
      });

      // Erro 401 = credenciais inválidas
      if (error.status === 401) {
        return {
          success: false,
          error: 'Email ou password incorretos',
          code: 'INVALID_CREDENTIALS',
        };
      }

      // Erro 403 = conta não verificada ou bloqueada
      if (error.status === 403) {
        return {
          success: false,
          error: 'Conta não verificada ou bloqueada. Verifique seu email.',
          code: 'ACCOUNT_NOT_VERIFIED',
        };
      }

      return {
        success: false,
        error: error.data?.errors?.[0]?.title || error.message || 'Email ou password incorretos',
        code: 'LOGIN_ERROR',
      };
    }
  }

  /**
   * Reenviar email de verificação
   */
  static async resendVerificationEmail() {
    try {
      if (!marketplaceSdk) {
        throw new Error('Marketplace SDK not initialized. This function only works in the browser.');
      }

      await marketplaceSdk.currentUser.sendVerificationEmail();
      console.log('✅ Email de verificação reenviado');

      return {
        success: true,
        message: 'Email de verificação enviado. Verifique sua caixa de entrada.',
      };

    } catch (error: any) {
      console.error('❌ Erro ao reenviar email:', error);
      return {
        success: false,
        error: error.message || 'Erro ao enviar email de verificação',
      };
    }
  }

  /**
   * Logout do Sharetribe
   */
  static async logout() {
    try {
      await marketplaceSdk.logout();
      console.log('✅ Logout bem-sucedido');
      return { success: true };
    } catch (error: any) {
      console.error('❌ Erro no logout:', error);
      return { success: false, error: error.message };
    }
  }

  /**
   * Buscar usuário atual
   */
  static async getCurrentUser() {
    try {
      // Verificar se SDK está disponível (só funciona no navegador)
      if (!marketplaceSdk) {
        return { success: false, error: 'SDK not available in SSR' };
      }

      const response = await marketplaceSdk.currentUser.show({
        include: ['profileImage'],
      });

      if (!response.data.data) {
        return { success: false, error: 'Não autenticado' };
      }

      return {
        success: true,
        user: this.mapSharetribeUserToUser(response.data.data),
      };

    } catch (error: any) {
      console.error('❌ Erro ao buscar usuário:', error);
      return { success: false, error: error.message };
    }
  }

  /**
   * Mapear usuário do Sharetribe para nosso tipo User
   */
  private static mapSharetribeUserToUser(sharetribeUser: any): User {
    console.log('📦 Dados do Sharetribe:', sharetribeUser);

    const attributes = sharetribeUser.attributes || {};
    const profile = attributes.profile || {};
    const publicData = profile.publicData || attributes.publicData || {};

    return {
      id: sharetribeUser.id?.uuid || sharetribeUser.id,
      email: attributes.email || '',
      emailConfirmed: attributes.emailVerified || false,
      sharetribeUserId: sharetribeUser.id?.uuid || sharetribeUser.id,
      profile: {
        firstName: profile.firstName || attributes.firstName || '',
        lastName: profile.lastName || attributes.lastName || '',
        phoneNumber: publicData.phoneNumber || null,
        avatarUrl: profile.profileImage?.variants?.['square-small']?.url || null,
        bio: profile.bio || null,
        userType: publicData.userType || 'tourist',
        isVerified: false,
        verificationDate: null,
        location: {
          country: null,
          city: null,
          postalCode: null,
        },
        settings: {
          preferredLanguage: 'pt',
          notificationPreferences: {
            email: true,
            sms: false,
          },
        },
        metadata: {
          createdAt: attributes.createdAt || new Date().toISOString(),
          updatedAt: attributes.createdAt || new Date().toISOString(),
          lastLoginAt: null,
        },
        ...(publicData.userType === 'host' && {
          host: {
            referralCode: publicData.referralCode || null,
            companyName: null,
            taxId: null,
          },
        }),
        ...(publicData.userType === 'provider' && {
          provider: {
            businessLicense: null,
            insurancePolicy: null,
          },
        }),
      },
    };
  }

  /**
   * Gerar referral code único
   */
  private static generateReferralCode(firstName: string, lastName: string): string {
    const timestamp = Date.now().toString(36).toUpperCase();
    const namePrefix = `${firstName.substring(0, 3)}${lastName.substring(0, 3)}`
      .toUpperCase()
      .replace(/[^A-Z]/g, '');

    return `${namePrefix}-${timestamp}`;
  }
}
