'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/hooks/useAuth';

export default function LoginForm() {
  const router = useRouter();
  const { login, isLoading } = useAuth();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [error, setError] = useState<string>('');
  const [showForgotPassword, setShowForgotPassword] = useState(false);

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (error) setError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Validação básica
    if (!formData.email || !formData.password) {
      setError('Por favor, preencha todos os campos');
      return;
    }

    // Fazer login
    const result = await login(formData.email, formData.password);

    if (result.success) {
      // Redirecionar para a home
      router.push('/');
    } else {
      setError(result.error || 'Email ou password incorretos');
    }
  };

  const handleForgotPassword = () => {
    // TODO: Implementar recuperação de senha
    setShowForgotPassword(true);
  };

  if (showForgotPassword) {
    return (
      <div className="space-y-6">
        <div className="text-center">
          <h3 className="text-xl font-semibold text-[#11212D] font-hanken mb-2">
            Recuperar Password
          </h3>
          <p className="text-sm text-[#6B7280] font-hanken">
            Em breve você poderá recuperar sua password
          </p>
        </div>

        <button
          onClick={() => setShowForgotPassword(false)}
          className="w-full py-3 px-4 rounded-lg text-[#52C6BB] border border-[#52C6BB] font-semibold font-hanken hover:bg-[#52C6BB]/5 transition-all"
        >
          Voltar ao Login
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Error Message */}
      {error && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-sm text-red-800 font-hanken">{error}</p>
        </div>
      )}

      {/* Email */}
      <div className="space-y-2">
        <label className="text-sm font-medium text-[#11212D] font-hanken">
          Email <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          value={formData.email}
          onChange={(e) => handleChange('email', e.target.value)}
          className="w-full p-3 bg-[#F9FAFB] border border-[#D1D5DB] rounded-lg text-sm text-[#11212D] font-hanken focus:outline-none focus:ring-2 focus:ring-[#52C6BB]"
          placeholder="seu@email.com"
          required
        />
      </div>

      {/* Password */}
      <div className="space-y-2">
        <label className="text-sm font-medium text-[#11212D] font-hanken">
          Password <span className="text-red-500">*</span>
        </label>
        <input
          type="password"
          value={formData.password}
          onChange={(e) => handleChange('password', e.target.value)}
          className="w-full p-3 bg-[#F9FAFB] border border-[#D1D5DB] rounded-lg text-sm text-[#11212D] font-hanken focus:outline-none focus:ring-2 focus:ring-[#52C6BB]"
          placeholder="••••••••"
          required
        />
      </div>

      {/* Forgot Password Link */}
      <div className="flex items-center justify-end">
        <button
          type="button"
          onClick={handleForgotPassword}
          className="text-sm text-[#52C6BB] hover:underline font-hanken"
        >
          Esqueceu a password?
        </button>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isLoading}
        className={`w-full py-3 px-4 rounded-lg text-white font-semibold font-hanken transition-all ${
          isLoading
            ? 'bg-[#52C6BB]/50 cursor-not-allowed'
            : 'bg-[#52C6BB] hover:bg-[#45B3A8]'
        }`}
      >
        {isLoading ? 'A entrar...' : 'Entrar'}
      </button>

      {/* Register Link */}
      <div className="text-center">
        <p className="text-sm text-[#6B7280] font-hanken">
          Não tem conta?{' '}
          <Link href="/register" className="text-[#52C6BB] hover:underline font-semibold">
            Criar conta
          </Link>
        </p>
      </div>
    </form>
  );
}
