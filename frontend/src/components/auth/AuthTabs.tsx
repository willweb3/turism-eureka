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
    <div className="flex" role="tablist" aria-label="Opções de autenticação">
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
          py-2 px-3 text-center font-hanken text-[20px] leading-[26px]
          transition-all duration-200 relative
          ${
            activeTab === 'signup'
              ? 'text-[#52C6BB] font-bold border-b-2 border-[#52C6BB]'
              : 'text-[#A7ACB3] font-normal border-b-2 border-[#A7ACB3]/40 hover:text-[#A7ACB3]/80'
          }
        `}
      >
        Sign up
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
          flex-1 py-2 px-3 text-left font-hanken text-[20px] leading-[26px]
          transition-all duration-200 relative
          ${
            activeTab === 'login'
              ? 'text-[#52C6BB] font-bold border-b-2 border-[#52C6BB]'
              : 'text-[#A7ACB3] font-normal border-b-2 border-[#A7ACB3]/40 hover:text-[#A7ACB3]/80'
          }
        `}
      >
        Login
      </button>
    </div>
  );
}
