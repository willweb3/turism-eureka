import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { SharetribeAuthService } from '@/lib/sharetribe/auth.service';
import { useAuthStore } from '@/store/auth.store';
import type { RegisterFormData, User } from '@/types/user.types';

interface UseAuthReturn {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  register: (data: RegisterFormData) => Promise<{ success: boolean; error?: string }>;
  login: (email: string, password: string) => Promise<{ success: boolean; error?: string }>;
  logout: () => Promise<void>;
  fetchUser: () => Promise<void>;
}

/**
 * Hook de autenticação
 *
 * Gerencia estado de autenticação e fornece métodos para:
 * - Register (cadastro)
 * - Login
 * - Logout
 * - Fetch current user
 */
export function useAuth(): UseAuthReturn {
  const router = useRouter();
  const { user, isAuthenticated, isLoading, login: setLogin, register: setRegister, logout: clearAuth, setLoading } = useAuthStore();

  /**
   * Buscar dados do usuário autenticado
   */
  const fetchUser = async () => {
    try {
      setLoading(true);

      // Buscar usuário atual do Sharetribe (direto do navegador!)
      const result = await SharetribeAuthService.getCurrentUser();

      if (result.success && result.user) {
        setLogin(result.user);
      } else {
        clearAuth();
      }
    } catch (error) {
      console.error('Fetch user error:', error);
      clearAuth();
    } finally {
      setLoading(false);
    }
  };

  /**
   * Registrar novo usuário (direto no Sharetribe via navegador!)
   */
  const register = async (data: RegisterFormData): Promise<{ success: boolean; error?: string }> => {
    try {
      setLoading(true);

      // Criar usuário direto no Sharetribe (sem API route!)
      const result = await SharetribeAuthService.register(data);

      if (!result.success) {
        return {
          success: false,
          error: result.error || 'Erro ao criar conta',
        };
      }

      // Fazer login automático após registro
      if (result.user) {
        setLogin(result.user);
      }

      return {
        success: true,
      };
    } catch (error: any) {
      console.error('Register error:', error);
      return {
        success: false,
        error: error.message || 'Erro ao criar conta',
      };
    } finally {
      setLoading(false);
    }
  };

  /**
   * Fazer login (direto no Sharetribe!)
   */
  const login = async (email: string, password: string): Promise<{ success: boolean; error?: string }> => {
    try {
      setLoading(true);

      // Login direto no Sharetribe via navegador
      const result = await SharetribeAuthService.login(email, password);

      if (!result.success) {
        return {
          success: false,
          error: result.error || 'Credenciais inválidas',
        };
      }

      // Salvar usuário no store
      if (result.user) {
        setLogin(result.user);
      }

      return {
        success: true,
      };
    } catch (error: any) {
      console.error('Login error:', error);
      return {
        success: false,
        error: error.message || 'Erro ao fazer login',
      };
    } finally {
      setLoading(false);
    }
  };

  /**
   * Fazer logout (direto no Sharetribe!)
   */
  const logout = async () => {
    try {
      setLoading(true);

      // Logout do Sharetribe via navegador
      await SharetribeAuthService.logout();

      // Limpar store
      clearAuth();

      // Redirecionar para home
      router.push('/');
    } catch (error) {
      console.error('Logout error:', error);
    } finally {
      setLoading(false);
    }
  };

  /**
   * Verificar autenticação ao montar o componente
   */
  useEffect(() => {
    // Buscar user ao carregar (tenta restaurar sessão do Sharetribe)
    fetchUser();
  }, []);

  return {
    user,
    isAuthenticated,
    isLoading,
    register,
    login,
    logout,
    fetchUser,
  };
}
