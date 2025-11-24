'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/hooks/useAuth';
import { signUpSchema, type SignUpInput } from '@/lib/validations/auth.schema';
import { UserType } from '@/types/user.types';
import FormDivider from './FormDivider';

export default function SignUpFormModal() {
  const router = useRouter();
  const { register: registerUser, isLoading } = useAuth();
  const [apiError, setApiError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [userType, setUserType] = useState<UserType | ''>('');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpInput>({
    resolver: zodResolver(signUpSchema) as any,
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

    // Validate user type selection
    if (!userType) {
      setApiError('Por favor, selecione um tipo de usuário.');
      return;
    }

    // Convert to RegisterFormData format
    const result = await registerUser({
      email: data.email,
      firstName: data.firstName,
      lastName: data.lastName,
      password: data.password,
      confirmPassword: data.password, // Same as password since we removed confirm field
      userType: userType as UserType, // Use selected user type
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
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* API Error */}
      {apiError && (
        <div
          role="alert"
          aria-live="polite"
          className="p-4 bg-red-500/20 border border-red-500/50 rounded-lg"
        >
          <p className="text-sm text-red-200 font-hanken">{apiError}</p>
        </div>
      )}

      {/* User Type Select */}
      <div className="space-y-2">
        <label
          htmlFor="userType"
          className="block text-[14px] leading-[21px] font-medium text-white font-hanken"
        >
          User type
        </label>
        <select
          id="userType"
          value={userType}
          onChange={(e) => setUserType(e.target.value as UserType | '')}
          className="w-full p-3 text-[14px] leading-[21px] font-hanken font-normal rounded-lg text-white
            focus:outline-none focus:ring-0 transition-all
            appearance-none cursor-pointer"
          style={{
            background: 'rgba(17.03, 17.73, 17.38, 0.70)',
            outline: '1px solid rgba(49, 106, 151, 0.50)',
            outlineOffset: '-1px',
            backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%23ffffff' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
            backgroundPosition: 'right 0.75rem center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: '1.125em 1.125em',
            paddingRight: '2.5rem'
          }}
        >
          <option value="" disabled>Choose a user type</option>
          <option value="tourist">Tourist</option>
          <option value="provider">Partner/Business</option>
        </select>
      </div>

      {/* Google OAuth Button */}
      <button
        type="button"
        disabled
        className="w-full flex items-center justify-center gap-2 py-4 px-6 bg-transparent rounded-[48px] text-white font-medium font-hanken text-[16px] leading-[24px] hover:bg-white/5 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        style={{
          outline: '1px solid #A7ACB3',
          outlineOffset: '-1px'
        }}
      >
        <svg className="w-[21px] h-[21px]" viewBox="0 0 24 24">
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

      {/* Form Fields */}
      <div className="space-y-3">
        {/* Email */}
        <div className="space-y-2">
          <label
            htmlFor="email"
            className="block text-[14px] leading-[21px] font-medium text-white font-hanken"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            {...register('email')}
            className="w-full p-3 text-[14px] leading-[21px] font-hanken font-normal rounded-lg text-white placeholder:text-white/60
              focus:outline-none focus:ring-0 transition-all"
            style={{
              background: 'rgba(17.03, 17.73, 17.38, 0.70)',
              outline: errors.email ? '1px solid rgb(239, 68, 68)' : '1px solid rgba(49, 106, 151, 0.50)',
              outlineOffset: '-1px'
            }}
            placeholder="joaomarques@domain.com"
            aria-invalid={errors.email ? 'true' : 'false'}
            aria-describedby={errors.email ? 'email-error' : undefined}
          />
          {errors.email && (
            <p id="email-error" className="text-sm text-red-400 font-hanken">
              {errors.email.message}
            </p>
          )}
        </div>

        {/* Name Fields */}
        <div className="grid grid-cols-2 gap-3">
          <div className="space-y-2">
            <label
              htmlFor="firstName"
              className="block text-[14px] leading-[21px] font-medium text-white font-hanken"
            >
              First Name
            </label>
            <input
              id="firstName"
              type="text"
              {...register('firstName')}
              className="w-full p-3 text-[14px] leading-[21px] font-hanken font-normal rounded-lg text-white placeholder:text-white/60
                focus:outline-none focus:ring-0 transition-all"
              style={{
                background: 'rgba(17.03, 17.73, 17.38, 0.70)',
                outline: errors.firstName ? '1px solid rgb(239, 68, 68)' : '1px solid rgba(49, 106, 151, 0.50)',
                outlineOffset: '-1px'
              }}
              placeholder="João"
              aria-invalid={errors.firstName ? 'true' : 'false'}
              aria-describedby={errors.firstName ? 'firstName-error' : undefined}
            />
            {errors.firstName && (
              <p id="firstName-error" className="text-sm text-red-400 font-hanken">
                {errors.firstName.message}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <label
              htmlFor="lastName"
              className="block text-[14px] leading-[21px] font-medium text-white font-hanken"
            >
              Last Name
            </label>
            <input
              id="lastName"
              type="text"
              {...register('lastName')}
              className="w-full p-3 text-[14px] leading-[21px] font-hanken font-normal rounded-lg text-white placeholder:text-white/60
                focus:outline-none focus:ring-0 transition-all"
              style={{
                background: 'rgba(17.03, 17.73, 17.38, 0.70)',
                outline: errors.lastName ? '1px solid rgb(239, 68, 68)' : '1px solid rgba(49, 106, 151, 0.50)',
                outlineOffset: '-1px'
              }}
              placeholder="Marques"
              aria-invalid={errors.lastName ? 'true' : 'false'}
              aria-describedby={errors.lastName ? 'lastName-error' : undefined}
            />
            {errors.lastName && (
              <p id="lastName-error" className="text-sm text-red-400 font-hanken">
                {errors.lastName.message}
              </p>
            )}
          </div>
        </div>

        {/* Password */}
        <div className="space-y-2">
          <label
            htmlFor="password"
            className="block text-[14px] leading-[21px] font-medium text-white font-hanken"
          >
            Password
          </label>
          <div className="relative">
            <input
              id="password"
              type={showPassword ? 'text' : 'password'}
              {...register('password')}
              className="w-full p-3 pr-10 text-[14px] leading-[21px] font-hanken font-normal rounded-lg text-white placeholder:text-white/60
                focus:outline-none focus:ring-0 transition-all"
              style={{
                background: 'rgba(17.03, 17.73, 17.38, 0.70)',
                outline: errors.password ? '1px solid rgb(239, 68, 68)' : '1px solid rgba(49, 106, 151, 0.50)',
                outlineOffset: '-1px'
              }}
              placeholder="*******************"
              aria-invalid={errors.password ? 'true' : 'false'}
              aria-describedby={errors.password ? 'password-error' : undefined}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-white/60 hover:text-white transition-colors"
              aria-label={showPassword ? 'Hide password' : 'Show password'}
            >
              {showPassword ? (
                <svg className="w-[18px] h-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                </svg>
              ) : (
                <svg className="w-[18px] h-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              )}
            </button>
          </div>
          {errors.password && (
            <p id="password-error" className="text-sm text-red-400 font-hanken">
              {errors.password.message}
            </p>
          )}
        </div>
      </div>

      {/* Submit Button & Terms */}
      <div className="space-y-2">
        <button
          type="submit"
          disabled={isLoading}
          className={`
            w-full py-4 px-6 rounded-[48px] text-[#11212D] font-medium font-hanken text-[16px] leading-[24px]
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
        <p className="text-[12px] leading-[18px] text-[#D6D8DF] font-hanken font-normal text-center">
          By signing up you accept the{' '}
          <Link
            href="/terms"
            className="text-[#52C6BB] hover:underline"
          >
            Terms & Conditions
          </Link>
        </p>
      </div>
    </form>
  );
}
