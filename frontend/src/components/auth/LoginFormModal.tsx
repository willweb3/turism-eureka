'use client';

import { useState, useEffect, Suspense } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { useAuth } from '@/hooks/useAuth';
import { loginSchema, type LoginInput } from '@/lib/validations/auth.schema';
import PasswordInput from './PasswordInput';

function LoginFormContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { login, isLoading } = useAuth();
  const [apiError, setApiError] = useState('');
  const [showRegisteredNotice, setShowRegisteredNotice] = useState(false);

  // Check if user just registered
  useEffect(() => {
    if (searchParams.get('registered') === 'true') {
      setShowRegisteredNotice(true);
    }
  }, [searchParams]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInput>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
  });

  const onSubmit = async (data: LoginInput) => {
    setApiError('');

    const result = await login(data.email, data.password);

    if (result.success) {
      // Redirect to homepage or dashboard
      router.push('/');
    } else {
      setApiError(result.error || 'Email ou password incorretos');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Registration Success Notice */}
      {showRegisteredNotice && (
        <div
          role="alert"
          aria-live="polite"
          className="p-4 bg-[#E6F7F5] border border-[#52C6BB] rounded-lg"
        >
          <div className="flex items-start gap-3">
            <svg className="w-5 h-5 text-[#3CA997] mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div className="flex-1">
              <p className="text-sm font-semibold text-[#11212D] font-hanken mb-1">
                Conta criada com sucesso!
              </p>
              <p className="text-sm text-[#11212D] font-hanken">
                Verifique seu email para ativar sua conta antes de fazer login.
                Sem o email verificado, você não conseguirá entrar.
              </p>
            </div>
            <button
              type="button"
              onClick={() => setShowRegisteredNotice(false)}
              className="text-[#777777] hover:text-[#11212D] flex-shrink-0"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* API Error */}
      {apiError && (
        <div
          role="alert"
          aria-live="polite"
          className="p-4 bg-red-50 border border-red-200 rounded-lg"
        >
          <p className="text-sm text-red-800 font-hanken">{apiError}</p>
        </div>
      )}

      {/* Email */}
      <div className="space-y-2">
        <label
          htmlFor="login-email"
          className="block text-sm font-medium text-[#11212D] font-hanken"
        >
          Email <span className="text-red-500">*</span>
        </label>
        <input
          id="login-email"
          type="email"
          {...register('email')}
          className={`
            w-full p-3 bg-[#F2F6F8] border rounded-lg text-sm text-[#11212D] font-hanken
            focus:outline-none focus:ring-2 focus:ring-[#52C6BB] transition-all
            ${errors.email ? 'border-[#E53E3E]' : 'border-[#BFC3C9]'}
          `}
          placeholder="seu@email.com"
          aria-invalid={errors.email ? 'true' : 'false'}
          aria-describedby={errors.email ? 'login-email-error' : undefined}
        />
        {errors.email && (
          <p id="login-email-error" className="text-sm text-[#E53E3E] font-hanken">
            {errors.email.message}
          </p>
        )}
      </div>

      {/* Password */}
      <PasswordInput
        id="login-password"
        label="Password"
        placeholder="••••••••"
        error={errors.password?.message}
        {...register('password')}
        required
      />

      {/* Remember Me & Forgot Password */}
      <div className="flex items-center justify-between">
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            {...register('rememberMe')}
            className="w-4 h-4 text-[#52C6BB] border-[#BFC3C9] rounded focus:ring-[#52C6BB] focus:ring-offset-0 focus:ring-2"
          />
          <span className="text-sm text-[#11212D] font-hanken">Lembrar-me</span>
        </label>

        <Link
          href="/forgot-password"
          className="text-sm text-[#52C6BB] hover:underline font-hanken"
        >
          Esqueceu a password?
        </Link>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isLoading}
        className={`
          w-full py-4 px-6 rounded-lg text-white font-medium font-hanken text-base
          transition-all duration-200
          ${
            isLoading
              ? 'bg-[#52C6BB]/50 cursor-not-allowed'
              : 'bg-[#52C6BB] hover:bg-[#3CA997] active:scale-[0.98]'
          }
        `}
        aria-busy={isLoading}
      >
        {isLoading ? 'A entrar...' : 'Entrar'}
      </button>
    </form>
  );
}

export default function LoginFormModal() {
  return (
    <Suspense fallback={
      <div className="space-y-6 animate-pulse">
        <div className="h-20 bg-gray-200 rounded-lg"></div>
        <div className="h-12 bg-gray-200 rounded-lg"></div>
        <div className="h-12 bg-gray-200 rounded-lg"></div>
      </div>
    }>
      <LoginFormContent />
    </Suspense>
  );
}
