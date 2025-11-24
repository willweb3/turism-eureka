import { getIntegrationSdk, UUID } from '../config';
import type { SharetribeUserData } from '@/types/user.types';

export class SharetribeUserService {
  /**
   * Criar user no Sharetribe
   */
  static async createUser(data: SharetribeUserData) {
    try {
      const sdk = getIntegrationSdk();
      if (!sdk) {
        return {
          success: false,
          error: 'Sharetribe SDK not configured',
          code: 'SDK_NOT_CONFIGURED',
        };
      }

      const response = await sdk.users.create({
        email: data.email,
        firstName: data.firstName,
        lastName: data.lastName,
        publicData: data.publicData,
        privateData: data.privateData,
        protectedData: data.protectedData,
      });

      return {
        success: true,
        userId: response.data.data.id.uuid,
        data: response.data.data,
      };
    } catch (error: any) {
      console.error('Error creating Sharetribe user:', error);

      // Tratar erros específicos
      if (error.status === 409) {
        return {
          success: false,
          error: 'User já existe no Sharetribe',
          code: 'USER_EXISTS',
        };
      }

      return {
        success: false,
        error: error.message || 'Erro ao criar user no Sharetribe',
        code: 'CREATE_FAILED',
      };
    }
  }

  /**
   * Buscar user no Sharetribe por ID
   */
  static async getUserById(userId: string) {
    try {
      const sdk = getIntegrationSdk();
      if (!sdk) {
        return {
          success: false,
          error: 'Sharetribe SDK not configured',
          code: 'SDK_NOT_CONFIGURED',
        };
      }

      const response = await sdk.users.show({
        id: new UUID(userId),
      });

      return {
        success: true,
        data: response.data.data,
      };
    } catch (error: any) {
      console.error('Error fetching Sharetribe user:', error);

      return {
        success: false,
        error: error.message || 'User não encontrado',
        code: 'USER_NOT_FOUND',
      };
    }
  }

  /**
   * Atualizar profile do user no Sharetribe
   */
  static async updateUserProfile(
    userId: string,
    updates: {
      firstName?: string;
      lastName?: string;
      publicData?: Record<string, any>;
      privateData?: Record<string, any>;
      protectedData?: Record<string, any>;
    }
  ) {
    try {
      const sdk = getIntegrationSdk();
      if (!sdk) {
        return {
          success: false,
          error: 'Sharetribe SDK not configured',
          code: 'SDK_NOT_CONFIGURED',
        };
      }

      const response = await sdk.users.updateProfile({
        id: new UUID(userId),
        ...updates,
      });

      return {
        success: true,
        data: response.data.data,
      };
    } catch (error: any) {
      console.error('Error updating Sharetribe user:', error);

      return {
        success: false,
        error: error.message || 'Erro ao atualizar user',
        code: 'UPDATE_FAILED',
      };
    }
  }

  /**
   * Verificar se email já existe no Sharetribe
   */
  static async checkEmailExists(email: string) {
    try {
      const sdk = getIntegrationSdk();
      if (!sdk) {
        return {
          exists: false,
          error: 'Sharetribe SDK not configured',
        };
      }

      const response = await sdk.users.query({
        email: email.toLowerCase().trim(),
        perPage: 1,
      });

      return {
        exists: response.data.data.length > 0,
        userId: response.data.data[0]?.id.uuid,
      };
    } catch (error: any) {
      console.error('Error checking email in Sharetribe:', error);

      return {
        exists: false,
        error: error.message,
      };
    }
  }

  /**
   * Gerar referral code único
   */
  static generateReferralCode(firstName: string, lastName: string): string {
    const timestamp = Date.now().toString(36).toUpperCase();
    const namePrefix = `${firstName.substring(0, 3)}${lastName.substring(0, 3)}`
      .toUpperCase()
      .replace(/[^A-Z]/g, '');

    return `${namePrefix}-${timestamp}`;
  }
}
