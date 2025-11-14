'use client';

import Link from 'next/link';
import { Facebook, Instagram, Youtube } from 'lucide-react';
import { useState } from 'react';

export function Footer() {
  const [language, setLanguage] = useState('PT');

  return (
    <footer className="bg-[#1A2332] text-white">
      <div className="container mx-auto px-6 lg:px-12 max-w-[1140px] py-16 lg:py-20">
        {/* Main Footer Content - 4 colunas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16 mb-12">
          {/* Coluna 1 - Brand */}
          <div className="lg:col-span-3">
            {/* Logo */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-9 h-9 bg-[#3FA08F] rounded-full flex items-center justify-center">
                <div className="text-white font-bold text-xl">A</div>
              </div>
              <span className="text-white font-lufga font-semibold text-xl">
                Azoreon
              </span>
            </div>

            {/* Descrição */}
            <p className="text-[#94A3B8] font-hanken text-sm leading-relaxed mb-6">
              Lorem ipsum placerat velit dictum placerat semper ornare arcu est aliquet egestas.
            </p>

            {/* Language Selector */}
            <div className="mb-6">
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="bg-transparent border border-[#334155] text-white font-hanken text-sm px-3 py-2 rounded cursor-pointer hover:border-[#3FA08F] transition-colors"
              >
                <option value="PT">PT</option>
                <option value="EN">EN</option>
                <option value="FR">FR</option>
              </select>
            </div>

            {/* Social Icons */}
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 border border-[#334155] rounded-full flex items-center justify-center hover:border-[#3FA08F] transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-white" />
              </a>
              <a
                href="#"
                className="w-10 h-10 border border-[#334155] rounded-full flex items-center justify-center hover:border-[#3FA08F] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-white" />
              </a>
              <a
                href="#"
                className="w-10 h-10 border border-[#334155] rounded-full flex items-center justify-center hover:border-[#3FA08F] transition-colors"
                aria-label="X (Twitter)"
              >
                <svg
                  className="w-4 h-4 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 border border-[#334155] rounded-full flex items-center justify-center hover:border-[#3FA08F] transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>

          {/* Coluna 2 - Company */}
          <div className="lg:col-span-2">
            <h3 className="text-white font-hanken font-medium text-base mb-5">
              Company
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/home"
                  className="text-[#94A3B8] font-hanken text-sm hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-[#94A3B8] font-hanken text-sm hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/tours"
                  className="text-[#94A3B8] font-hanken text-sm hover:text-white transition-colors"
                >
                  Tours
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-[#94A3B8] font-hanken text-sm hover:text-white transition-colors"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Coluna 3 - Locations (2 sub-colunas) */}
          <div className="lg:col-span-4">
            <h3 className="text-white font-hanken font-medium text-base mb-5">
              Locations
            </h3>
            <div className="grid grid-cols-2 gap-x-8 gap-y-3">
              <div className="space-y-3">
                <div className="text-[#94A3B8] font-hanken text-sm">São Miguel</div>
                <div className="text-[#94A3B8] font-hanken text-sm">Faial</div>
                <div className="text-[#94A3B8] font-hanken text-sm">Terceira</div>
                <div className="text-[#94A3B8] font-hanken text-sm">Pico</div>
                <div className="text-[#94A3B8] font-hanken text-sm">São Jorge</div>
              </div>
              <div className="space-y-3">
                <div className="text-[#94A3B8] font-hanken text-sm">Graciosa</div>
                <div className="text-[#94A3B8] font-hanken text-sm">Santa Maria</div>
                <div className="text-[#94A3B8] font-hanken text-sm">Corvo</div>
                <div className="text-[#94A3B8] font-hanken text-sm">Flores</div>
              </div>
            </div>
          </div>

          {/* Coluna 4 - Contact Info */}
          <div className="lg:col-span-3">
            <h3 className="text-white font-hanken font-medium text-base mb-5">
              Contact Info
            </h3>
            <div className="space-y-3 text-[#94A3B8] font-hanken text-sm">
              <p className="leading-relaxed">
                Rua da Fajã Nova, nº 12 — 9700-215, Terceira
              </p>
              <p>(+351) 292 123 456</p>
              <p>azoreon@acores.com</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#334155] pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#94A3B8] font-hanken text-sm">
            © Copyright 2025, All Rights Reserved by Azoreon
          </p>
          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="text-[#94A3B8] font-hanken text-sm hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <span className="text-[#334155]">|</span>
            <Link
              href="/terms"
              className="text-[#94A3B8] font-hanken text-sm hover:text-white transition-colors"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
