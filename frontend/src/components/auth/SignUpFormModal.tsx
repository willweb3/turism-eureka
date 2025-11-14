'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/hooks/useAuth';
import { signUpSchema, type SignUpInput } from '@/lib/validations/auth.schema';
import FormDivider from './FormDivider';

export default function SignUpFormModal() {
  const router = useRouter();
  const { register: registerUser, isLoading } = useAuth();
  const [apiError, setApiError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpInput>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      email: '',
      firstName: '',
      lastName: '',
      password: '',
      confirmPassword: '',
      acceptTerms: true, // Auto-accept terms as per design
    },
  });

  const onSubmit = async (data: SignUpInput) => {
    setApiError('');

    // Convert to RegisterFormData format
    const result = await registerUser({
      email: data.email,
      firstName: data.firstName,
      lastName: data.lastName,
      password: data.password,
      confirmPassword: data.password, // Same as password since we removed confirm field
      userType: 'tourist', // Default user type
      phoneNumber: '',
      acceptTerms: true,
    });

    if (result.success) {
      // Show success message about email verification
      router.push('/auth?tab=login&registered=true');
    } else {
      setApiError(result.error || 'Erro ao criar conta. Tente novamente.');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
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

      {/* Google OAuth Button - Commented out for now, will implement later */}
      <button
        type="button"
        disabled
        className="w-full flex items-center justify-center gap-3 py-3 px-4 bg-white border-2 border-[#D6D8DF] rounded-lg text-[#11212D] font-medium font-hanken text-base hover:bg-[#F2F6F8] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <svg className="w-5 h-5" viewBox="0 0 24 24">
          <path
            fill="#4285F4"
            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
          />
          <path
            fill="#34A853"
            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
          />
          <path
            fill="#FBBC05"
            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
          />
          <path
            fill="#EA4335"
            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
          />
        </svg>
        Continue with Google
      </button>

      <FormDivider />

      {/* Email */}
      <div className="space-y-2">
        <label
          htmlFor="email"
          className="block text-sm font-medium text-[#11212D] font-hanken"
        >
          Email
        </label>
        <input
          id="email"
          type="email"
          {...register('email')}
          className={`
            w-full p-3 bg-[#F2F6F8] border rounded-lg text-sm text-[#11212D] font-hanken
            focus:outline-none focus:ring-2 focus:ring-[#52C6BB] transition-all
            ${errors.email ? 'border-[#E53E3E]' : 'border-[#BFC3C9]'}
          `}
          placeholder="joaomarques@domain.com"
          aria-invalid={errors.email ? 'true' : 'false'}
          aria-describedby={errors.email ? 'email-error' : undefined}
        />
        {errors.email && (
          <p id="email-error" className="text-sm text-[#E53E3E] font-hanken">
            {errors.email.message}
          </p>
        )}
      </div>

      {/* Name Fields */}
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <label
            htmlFor="firstName"
            className="block text-sm font-medium text-[#11212D] font-hanken"
          >
            First Name
          </label>
          <input
            id="firstName"
            type="text"
            {...register('firstName')}
            className={`
              w-full p-3 bg-[#F2F6F8] border rounded-lg text-sm text-[#11212D] font-hanken
              focus:outline-none focus:ring-2 focus:ring-[#52C6BB] transition-all
              ${errors.firstName ? 'border-[#E53E3E]' : 'border-[#BFC3C9]'}
            `}
            placeholder="João"
            aria-invalid={errors.firstName ? 'true' : 'false'}
            aria-describedby={errors.firstName ? 'firstName-error' : undefined}
          />
          {errors.firstName && (
            <p id="firstName-error" className="text-sm text-[#E53E3E] font-hanken">
              {errors.firstName.message}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <label
            htmlFor="lastName"
            className="block text-sm font-medium text-[#11212D] font-hanken"
          >
            Last Name
          </label>
          <input
            id="lastName"
            type="text"
            {...register('lastName')}
            className={`
              w-full p-3 bg-[#F2F6F8] border rounded-lg text-sm text-[#11212D] font-hanken
              focus:outline-none focus:ring-2 focus:ring-[#52C6BB] transition-all
              ${errors.lastName ? 'border-[#E53E3E]' : 'border-[#BFC3C9]'}
            `}
            placeholder="Marques"
            aria-invalid={errors.lastName ? 'true' : 'false'}
            aria-describedby={errors.lastName ? 'lastName-error' : undefined}
          />
          {errors.lastName && (
            <p id="lastName-error" className="text-sm text-[#E53E3E] font-hanken">
              {errors.lastName.message}
            </p>
          )}
        </div>
      </div>

      {/* Password */}
      <div className="space-y-2">
        <label
          htmlFor="password"
          className="block text-sm font-medium text-[#11212D] font-hanken"
        >
          Password
        </label>
        <div className="relative">
          <input
            id="password"
            type={showPassword ? 'text' : 'password'}
            {...register('password')}
            className={`
              w-full p-3 pr-10 bg-[#F2F6F8] border rounded-lg text-sm text-[#11212D] font-hanken
              focus:outline-none focus:ring-2 focus:ring-[#52C6BB] transition-all
              ${errors.password ? 'border-[#E53E3E]' : 'border-[#BFC3C9]'}
            `}
            placeholder="••••••••••••••••••"
            aria-invalid={errors.password ? 'true' : 'false'}
            aria-describedby={errors.password ? 'password-error' : undefined}
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-[#777777] hover:text-[#11212D] transition-colors"
            aria-label={showPassword ? 'Hide password' : 'Show password'}
          >
            {showPassword ? (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            )}
          </button>
        </div>
        {errors.password && (
          <p id="password-error" className="text-sm text-[#E53E3E] font-hanken">
            {errors.password.message}
          </p>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isLoading}
        className={`
          w-full py-3.5 px-6 rounded-lg text-white font-semibold font-hanken text-base
          transition-all duration-200
          ${
            isLoading
              ? 'bg-[#52C6BB]/50 cursor-not-allowed'
              : 'bg-[#52C6BB] hover:bg-[#3CA997] active:scale-[0.98]'
          }
        `}
        aria-busy={isLoading}
      >
        {isLoading ? 'Creating account...' : 'Sign Up'}
      </button>

      {/* Terms Text */}
      <p className="text-xs text-[#777777] font-hanken text-center">
        By signing up you accept the{' '}
        <Link
          href="/terms"
          className="text-[#52C6BB] hover:underline"
        >
          Terms & Conditions
        </Link>
      </p>
    </form>
  );
}
