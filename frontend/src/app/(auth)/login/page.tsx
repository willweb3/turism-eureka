import { Metadata } from 'next';
import Link from 'next/link';
import LoginForm from '@/components/auth/LoginForm';

export const metadata: Metadata = {
  title: 'Login | Azoreon',
  description: 'Aceda à sua conta no Azoreon',
};

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#52C6BB]/10 via-white to-[#52C6BB]/5 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-block">
            <h1 className="text-4xl font-bold text-[#11212D] font-hanken mb-2">
              Azoreon
            </h1>
          </Link>
          <h2 className="text-2xl font-semibold text-[#11212D] font-hanken mb-2">
            Bem-vindo de volta
          </h2>
          <p className="text-[#6B7280] font-hanken">
            Aceda à sua conta para continuar
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-3xl shadow-xl p-8">
          <LoginForm />
        </div>

        {/* Trust Badges */}
        <div className="mt-8 text-center">
          <div className="flex items-center justify-center gap-6 text-sm text-[#6B7280] font-hanken">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-[#52C6BB]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <span>Login Seguro</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-[#52C6BB]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span>Proteção de Dados</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
