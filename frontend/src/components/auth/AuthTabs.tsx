'use client';

import { useSearchParams, useRouter } from 'next/navigation';

export type AuthMode = 'signup' | 'login';

interface AuthTabsProps {
  activeTab: AuthMode;
  onTabChange: (tab: AuthMode) => void;
}

export default function AuthTabs({ activeTab, onTabChange }: AuthTabsProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleTabChange = (tab: AuthMode) => {
    onTabChange(tab);

    // Update URL query parameter
    const params = new URLSearchParams(searchParams.toString());
    params.set('tab', tab);
    router.push(`?${params.toString()}`, { scroll: false });
  };

  const handleKeyDown = (e: React.KeyboardEvent, tab: AuthMode) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleTabChange(tab);
    }

    // Arrow key navigation
    if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
      e.preventDefault();
      const newTab = tab === 'signup' ? 'login' : 'signup';
      handleTabChange(newTab);
    }
  };

  return (
    <div className="flex border-b border-[#D6D8DF]" role="tablist" aria-label="Opções de autenticação">
      {/* Sign Up Tab */}
      <button
        role="tab"
        aria-selected={activeTab === 'signup'}
        aria-controls="signup-panel"
        id="signup-tab"
        tabIndex={activeTab === 'signup' ? 0 : -1}
        onClick={() => handleTabChange('signup')}
        onKeyDown={(e) => handleKeyDown(e, 'signup')}
        className={`
          flex-1 py-3 px-4 text-center font-hanken text-[20px] leading-[26px] font-bold
          transition-all duration-200 relative
          ${
            activeTab === 'signup'
              ? 'text-[#52C6BB]'
              : 'text-[#A7ACB3] font-normal hover:text-[#777777]'
          }
        `}
      >
        Criar Conta
        {activeTab === 'signup' && (
          <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#52C6BB]" />
        )}
      </button>

      {/* Login Tab */}
      <button
        role="tab"
        aria-selected={activeTab === 'login'}
        aria-controls="login-panel"
        id="login-tab"
        tabIndex={activeTab === 'login' ? 0 : -1}
        onClick={() => handleTabChange('login')}
        onKeyDown={(e) => handleKeyDown(e, 'login')}
        className={`
          flex-1 py-3 px-4 text-center font-hanken text-[20px] leading-[26px] font-bold
          transition-all duration-200 relative
          ${
            activeTab === 'login'
              ? 'text-[#52C6BB]'
              : 'text-[#A7ACB3] font-normal hover:text-[#777777]'
          }
        `}
      >
        Entrar
        {activeTab === 'login' && (
          <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#52C6BB]" />
        )}
      </button>
    </div>
  );
}
