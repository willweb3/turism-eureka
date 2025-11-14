"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import AuthTabs, { type AuthMode } from "@/components/auth/AuthTabs";
import SignUpFormModal from "@/components/auth/SignUpFormModal";
import LoginFormModal from "@/components/auth/LoginFormModal";
import FormDivider from "@/components/auth/FormDivider";

function AuthPageContent() {
  const searchParams = useSearchParams();
  const [activeTab, setActiveTab] = useState<AuthMode>("signup");

  // Initialize tab from URL
  useEffect(() => {
    const tabParam = searchParams.get("tab");
    if (tabParam === "login" || tabParam === "signup") {
      setActiveTab(tabParam);
    }
  }, [searchParams]);

  return (
    <div className="min-h-screen relative overflow-hidden bg-[#161618]">
      {/* Hero Background */}
      <div className="absolute inset-0">
        {/* Background Image with Gradient Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `
              linear-gradient(180deg, rgba(0,0,0,0) 5%, rgba(0,0,0,0.76) 99%),
              url('https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=2070')
            `,
          }}
        />

        {/* Decorative Circles - Bottom Left */}
        <div className="absolute bottom-0 left-0 opacity-70 pointer-events-none">
          <div
            className="relative w-[372px] h-[372px] -translate-x-1/2 translate-y-1/2"
            style={{ transform: "rotate(-131deg)" }}
          >
            <div
              className="absolute inset-0 rounded-full border border-[#3CA997]"
              style={{ borderWidth: "0.50px" }}
            />
            <div
              className="absolute inset-[-56px] rounded-full border border-[#3CA997]"
              style={{ borderWidth: "0.56px" }}
            />
            <div
              className="absolute inset-[-116px] rounded-full border border-[#3CA997]"
              style={{ borderWidth: "0.62px" }}
            />
            <div
              className="absolute inset-[-163px] rounded-full border border-[#3CA997]"
              style={{ borderWidth: "0.68px" }}
            />
          </div>
        </div>

        {/* Decorative Circles - Top Right */}
        <div className="absolute top-0 right-0 opacity-70 pointer-events-none">
          <div
            className="relative w-[372px] h-[372px] translate-x-1/2 -translate-y-1/2"
            style={{ transform: "rotate(61deg)" }}
          >
            <div
              className="absolute inset-0 rounded-full border border-[#3CA997]"
              style={{ borderWidth: "0.50px" }}
            />
            <div
              className="absolute inset-[-56px] rounded-full border border-[#3CA997]"
              style={{ borderWidth: "0.56px" }}
            />
            <div
              className="absolute inset-[-116px] rounded-full border border-[#3CA997]"
              style={{ borderWidth: "0.62px" }}
            />
            <div
              className="absolute inset-[-163px] rounded-full border border-[#3CA997]"
              style={{ borderWidth: "0.68px" }}
            />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center py-12 px-4">
        <div className="w-full max-w-[468px]">
          {/* Logo */}
          <Link href="/" className="block text-center mb-8">
            <h1 className="text-4xl font-bold text-white font-hanken drop-shadow-lg">
              {/* LOGO */}
            </h1>
          </Link>

          {/* Form Card */}
          <div className="bg-white rounded-[24px] shadow-2xl p-6 sm:p-8">
            {/* Tabs */}
            <AuthTabs activeTab={activeTab} onTabChange={setActiveTab} />

            {/* Form Content */}
            <div className="mt-6">
              {/* Forms */}
              <div
                role="tabpanel"
                id={`${activeTab}-panel`}
                aria-labelledby={`${activeTab}-tab`}
              >
                {activeTab === "signup" ? (
                  <SignUpFormModal />
                ) : (
                  <LoginFormModal />
                )}
              </div>
            </div>
          </div>

          {/* Footer Links */}
          <div className="mt-6 text-center space-y-2">
            <p className="text-xs text-[#D6D0D0] font-hanken">
              {activeTab === "signup" ? (
                <>
                  Já tem uma conta?{" "}
                  <button
                    onClick={() => setActiveTab("login")}
                    className="text-[#52C6BB] hover:underline font-medium"
                  >
                    Entrar
                  </button>
                </>
              ) : (
                <>
                  Não tem conta?{" "}
                  <button
                    onClick={() => setActiveTab("signup")}
                    className="text-[#52C6BB] hover:underline font-medium"
                  >
                    Criar Conta
                  </button>
                </>
              )}
            </p>

            <div className="flex items-center justify-center gap-4 text-xs text-[#D6D0D0] font-hanken">
              <Link
                href="/terms"
                className="hover:text-white transition-colors"
              >
                Termos
              </Link>
              <span>•</span>
              <Link
                href="/privacy"
                className="hover:text-white transition-colors"
              >
                Privacidade
              </Link>
              <span>•</span>
              <Link href="/help" className="hover:text-white transition-colors">
                Ajuda
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function AuthPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#161618]" />}>
      <AuthPageContent />
    </Suspense>
  );
}
