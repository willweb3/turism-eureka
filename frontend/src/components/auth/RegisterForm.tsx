'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useAuth } from '@/hooks/useAuth';
import { registerSchema } from '@/lib/validations/auth.validation';
import type { RegisterFormData } from '@/types/user.types';

export default function RegisterForm() {
  const { register, isLoading } = useAuth();

  const [formData, setFormData] = useState<RegisterFormData>({
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
    userType: 'tourist',
    phoneNumber: '',
    acceptTerms: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [apiError, setApiError] = useState<string>('');
  const [successMessage, setSuccessMessage] = useState<string>('');

  const handleChange = (field: keyof RegisterFormData, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear field error when user starts typing
    if (errors[field]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  };

  const validateForm = (): boolean => {
    try {
      registerSchema.parse(formData);
      setErrors({});
      return true;
    } catch (error: any) {
      const fieldErrors: Record<string, string> = {};

      if (error.errors) {
        error.errors.forEach((err: any) => {
          const field = err.path[0];
          fieldErrors[field] = err.message;
        });
      }

      setErrors(fieldErrors);
      return false;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setApiError('');
    setSuccessMessage('');

    // Validate form
    if (!validateForm()) {
      return;
    }

    // Submit registration
    const result = await register(formData);

    if (result.success) {
      setSuccessMessage('🎉 Conta criada com sucesso no Sharetribe! Você já pode fazer login.');

      // Clear form
      setFormData({
        email: '',
        password: '',
        confirmPassword: '',
        firstName: '',
        lastName: '',
        userType: 'tourist',
        phoneNumber: '',
        acceptTerms: false,
      });
    } else {
      setApiError(result.error || 'Erro ao criar conta. Tente novamente.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Success Message */}
      {successMessage && (
        <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
          <p className="text-sm text-green-800 font-hanken">{successMessage}</p>
        </div>
      )}

      {/* API Error */}
      {apiError && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-sm text-red-800 font-hanken">{apiError}</p>
        </div>
      )}

      {/* User Type Selection */}
      <div className="space-y-2">
        <label className="text-sm font-medium text-[#11212D] font-hanken">
          Tipo de Conta <span className="text-red-500">*</span>
        </label>
        <div className="grid grid-cols-3 gap-3">
          {[
            { value: 'tourist', label: 'Turista', description: 'Explorar experiências' },
            { value: 'provider', label: 'Provider', description: 'Oferecer serviços' },
            { value: 'host', label: 'Host', description: 'Parceiro local' },
          ].map((type) => (
            <button
              key={type.value}
              type="button"
              onClick={() => handleChange('userType', type.value)}
              className={`p-4 rounded-lg border-2 text-left transition-all ${
                formData.userType === type.value
                  ? 'border-[#52C6BB] bg-[#52C6BB]/5'
                  : 'border-[#D1D5DB] hover:border-[#52C6BB]/50'
              }`}
            >
              <div className="font-semibold text-[#11212D] font-hanken">{type.label}</div>
              <div className="text-xs text-[#6B7280] mt-1 font-hanken">{type.description}</div>
            </button>
          ))}
        </div>
        {errors.userType && <p className="text-sm text-red-500 font-hanken">{errors.userType}</p>}
      </div>

      {/* Name Fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="text-sm font-medium text-[#11212D] font-hanken">
            Nome <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={formData.firstName}
            onChange={(e) => handleChange('firstName', e.target.value)}
            className={`w-full p-3 bg-[#F9FAFB] border rounded-lg text-sm text-[#11212D] font-hanken focus:outline-none focus:ring-2 focus:ring-[#52C6BB] ${
              errors.firstName ? 'border-red-500' : 'border-[#D1D5DB]'
            }`}
            placeholder="João"
          />
          {errors.firstName && <p className="text-sm text-red-500 font-hanken">{errors.firstName}</p>}
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-[#11212D] font-hanken">
            Apelido <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={formData.lastName}
            onChange={(e) => handleChange('lastName', e.target.value)}
            className={`w-full p-3 bg-[#F9FAFB] border rounded-lg text-sm text-[#11212D] font-hanken focus:outline-none focus:ring-2 focus:ring-[#52C6BB] ${
              errors.lastName ? 'border-red-500' : 'border-[#D1D5DB]'
            }`}
            placeholder="Silva"
          />
          {errors.lastName && <p className="text-sm text-red-500 font-hanken">{errors.lastName}</p>}
        </div>
      </div>

      {/* Email */}
      <div className="space-y-2">
        <label className="text-sm font-medium text-[#11212D] font-hanken">
          Email <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          value={formData.email}
          onChange={(e) => handleChange('email', e.target.value)}
          className={`w-full p-3 bg-[#F9FAFB] border rounded-lg text-sm text-[#11212D] font-hanken focus:outline-none focus:ring-2 focus:ring-[#52C6BB] ${
            errors.email ? 'border-red-500' : 'border-[#D1D5DB]'
          }`}
          placeholder="joao@example.com"
        />
        {errors.email && <p className="text-sm text-red-500 font-hanken">{errors.email}</p>}
      </div>

      {/* Phone Number */}
      <div className="space-y-2">
        <label className="text-sm font-medium text-[#11212D] font-hanken">
          Telemóvel (opcional)
        </label>
        <input
          type="tel"
          value={formData.phoneNumber}
          onChange={(e) => handleChange('phoneNumber', e.target.value)}
          className={`w-full p-3 bg-[#F9FAFB] border rounded-lg text-sm text-[#11212D] font-hanken focus:outline-none focus:ring-2 focus:ring-[#52C6BB] ${
            errors.phoneNumber ? 'border-red-500' : 'border-[#D1D5DB]'
          }`}
          placeholder="+351 912 345 678"
        />
        {errors.phoneNumber && <p className="text-sm text-red-500 font-hanken">{errors.phoneNumber}</p>}
      </div>

      {/* Password Fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="text-sm font-medium text-[#11212D] font-hanken">
            Password <span className="text-red-500">*</span>
          </label>
          <input
            type="password"
            value={formData.password}
            onChange={(e) => handleChange('password', e.target.value)}
            className={`w-full p-3 bg-[#F9FAFB] border rounded-lg text-sm text-[#11212D] font-hanken focus:outline-none focus:ring-2 focus:ring-[#52C6BB] ${
              errors.password ? 'border-red-500' : 'border-[#D1D5DB]'
            }`}
            placeholder="••••••••"
          />
          {errors.password && <p className="text-sm text-red-500 font-hanken">{errors.password}</p>}
          <p className="text-xs text-[#6B7280] font-hanken">
            Mínimo 8 caracteres, incluindo maiúscula, minúscula, número e caractere especial
          </p>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-[#11212D] font-hanken">
            Confirmar Password <span className="text-red-500">*</span>
          </label>
          <input
            type="password"
            value={formData.confirmPassword}
            onChange={(e) => handleChange('confirmPassword', e.target.value)}
            className={`w-full p-3 bg-[#F9FAFB] border rounded-lg text-sm text-[#11212D] font-hanken focus:outline-none focus:ring-2 focus:ring-[#52C6BB] ${
              errors.confirmPassword ? 'border-red-500' : 'border-[#D1D5DB]'
            }`}
            placeholder="••••••••"
          />
          {errors.confirmPassword && <p className="text-sm text-red-500 font-hanken">{errors.confirmPassword}</p>}
        </div>
      </div>

      {/* Terms & Conditions */}
      <div className="space-y-2">
        <label className="flex items-start gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={formData.acceptTerms}
            onChange={(e) => handleChange('acceptTerms', e.target.checked)}
            className="mt-1 w-4 h-4 text-[#52C6BB] border-[#D1D5DB] rounded focus:ring-[#52C6BB]"
          />
          <span className="text-sm text-[#11212D] font-hanken">
            Aceito os{' '}
            <Link href="/terms" className="text-[#52C6BB] hover:underline">
              Termos e Condições
            </Link>{' '}
            e{' '}
            <Link href="/privacy" className="text-[#52C6BB] hover:underline">
              Política de Privacidade
            </Link>
            <span className="text-red-500"> *</span>
          </span>
        </label>
        {errors.acceptTerms && <p className="text-sm text-red-500 font-hanken">{errors.acceptTerms}</p>}
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
        {isLoading ? 'Criando conta...' : 'Criar Conta'}
      </button>

      {/* Info */}
      <p className="text-center text-sm text-[#6B7280] font-hanken">
        Ao registrar, sua conta será criada no Sharetribe Marketplace.
      </p>
    </form>
  );
}
