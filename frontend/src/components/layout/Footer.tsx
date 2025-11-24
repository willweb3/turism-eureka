'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Instagram, Youtube } from 'lucide-react';
import { useState } from 'react';

export function Footer() {
  const [language, setLanguage] = useState('PT');

  return (
    <footer className="relative bg-[#0E1B25] text-white overflow-hidden">
      {/* AZOREON Watermark Geometric Letters */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: '1545.47px',
          height: '288.65px',
          left: '50%',
          bottom: '0',
          transform: 'translateX(-50%)',
          opacity: 0.05,
          zIndex: 0,
        }}
      >
        {/* A */}
        <div style={{ width: '269.96px', height: '283.93px', left: '0px', top: '0px', position: 'absolute', background: '#65A5CD' }}></div>
        {/* Z */}
        <div style={{ width: '164.75px', height: '201.01px', left: '291.65px', top: '82.91px', position: 'absolute', background: '#65A5CD' }}></div>
        {/* O */}
        <div style={{ width: '215.20px', height: '210.46px', left: '477.73px', top: '78.19px', position: 'absolute', background: '#65A5CD' }}></div>
        {/* R */}
        <div style={{ width: '114.28px', height: '204.17px', left: '732.75px', top: '79.76px', position: 'absolute', background: '#65A5CD' }}></div>
        {/* E */}
        <div style={{ width: '211.66px', height: '210.46px', left: '860.83px', top: '78.19px', position: 'absolute', background: '#65A5CD' }}></div>
        {/* O */}
        <div style={{ width: '215.20px', height: '210.46px', left: '1098.85px', top: '78.19px', position: 'absolute', background: '#65A5CD' }}></div>
        {/* N */}
        <div style={{ width: '191.55px', height: '205.76px', left: '1353.93px', top: '78.16px', position: 'absolute', background: '#65A5CD' }}></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 lg:px-8" style={{ paddingTop: '80px' }}>
        {/* Main Footer Content - 4 colunas */}
        <div style={{ justifyContent: 'space-between', alignItems: 'flex-start', display: 'flex', width: '100%' }}>
          {/* Coluna 1 - Brand */}
          <div style={{ width: '364.58px', flexShrink: 0 }}>
            <div style={{ flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '32px', display: 'flex' }}>
              {/* Logo */}
              <div style={{ alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '16px', display: 'flex' }}>
                <Image
                  src="/azoreon-logo.png"
                  alt="Azoreon"
                  width={180}
                  height={37}
                  className="h-9 w-auto"
                />

                {/* Descrição */}
                <div style={{ alignSelf: 'stretch', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: 'rgba(255, 255, 255, 0.80)', fontSize: '16px', fontFamily: 'Hanken Grotesk', fontWeight: 300, lineHeight: '29.52px', wordWrap: 'break-word' }}>
                  Lorem ipsum placerat velit dictum placerat semper ornare arcu est aliquet egestas.
                </div>

                {/* Language Selector */}
                <div style={{ justifyContent: 'flex-start', alignItems: 'center', gap: '4px', display: 'inline-flex' }}>
                  <div style={{ justifyContent: 'center', display: 'flex', flexDirection: 'column', color: 'rgba(255, 255, 255, 0.70)', fontSize: '14px', fontFamily: 'Hanken Grotesk', fontWeight: 400, lineHeight: '22px', wordWrap: 'break-word' }}>
                    PT
                  </div>
                  <div style={{ width: '20px', height: '20px', position: 'relative', overflow: 'hidden' }}>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M7 8L10 11L13 8" stroke="rgba(255, 255, 255, 0.70)" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </div>

              {/* Social Icons */}
              <div style={{ justifyContent: 'flex-start', alignItems: 'flex-start', gap: '8.82px', display: 'inline-flex' }}>
                <a href="#" aria-label="Facebook" style={{ width: '31.89px', height: '31.89px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Facebook className="w-5 h-5" style={{ color: 'rgba(255, 255, 255, 0.70)' }} />
                </a>
                <a href="#" aria-label="Instagram" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Instagram className="w-5 h-5" style={{ color: 'rgba(255, 255, 255, 0.70)' }} />
                </a>
                <a href="#" aria-label="X (Twitter)" style={{ width: '31.89px', height: '31.89px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg className="w-4 h-4" fill="rgba(255, 255, 255, 0.70)" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                <a href="#" aria-label="YouTube" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Youtube className="w-5 h-5" style={{ color: 'rgba(255, 255, 255, 0.70)' }} />
                </a>
              </div>
            </div>
          </div>

          {/* Spacer */}
          <div style={{ flex: '1' }}></div>

          {/* Right side columns group */}
          <div style={{ justifyContent: 'flex-start', alignItems: 'flex-start', gap: '80px', display: 'flex' }}>
            {/* Coluna 2 - Company */}
            <div style={{ width: '105px', flexShrink: 0 }}>
            <div style={{ flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '12px', display: 'flex' }}>
              <div style={{ alignSelf: 'stretch', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: 'white', fontSize: '16px', fontFamily: 'Hanken Grotesk', fontWeight: 400, wordWrap: 'break-word' }}>
                Company
              </div>
              <div style={{ flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '8px', display: 'flex' }}>
                <Link href="/home" style={{ alignSelf: 'stretch', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: 'rgba(255, 255, 255, 0.80)', fontSize: '14px', fontFamily: 'Hanken Grotesk', fontWeight: 300, wordWrap: 'break-word' }}>
                  Home
                </Link>
                <Link href="/about" style={{ alignSelf: 'stretch', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: 'rgba(255, 255, 255, 0.80)', fontSize: '14px', fontFamily: 'Hanken Grotesk', fontWeight: 300, wordWrap: 'break-word' }}>
                  About Us
                </Link>
                <Link href="/search" style={{ alignSelf: 'stretch', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: 'rgba(255, 255, 255, 0.80)', fontSize: '14px', fontFamily: 'Hanken Grotesk', fontWeight: 300, wordWrap: 'break-word' }}>
                  Experiences
                </Link>
                <Link href="/products" style={{ alignSelf: 'stretch', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: 'rgba(255, 255, 255, 0.80)', fontSize: '14px', fontFamily: 'Hanken Grotesk', fontWeight: 300, wordWrap: 'break-word' }}>
                  Products
                </Link>
                <Link href="/blog" style={{ alignSelf: 'stretch', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: 'rgba(255, 255, 255, 0.80)', fontSize: '14px', fontFamily: 'Hanken Grotesk', fontWeight: 300, wordWrap: 'break-word' }}>
                  Blog
                </Link>
              </div>
            </div>
          </div>

            {/* Coluna 3 - Locations (2 sub-colunas) */}
            <div style={{ width: '209px', flexShrink: 0 }}>
            <div style={{ flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '12px', display: 'flex' }}>
              <div style={{ alignSelf: 'stretch', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: 'white', fontSize: '16px', fontFamily: 'Hanken Grotesk', fontWeight: 400, wordWrap: 'break-word' }}>
                Locations
              </div>
              <div style={{ alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '12px', display: 'inline-flex' }}>
                <div style={{ flex: '1 1 0', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '8px', display: 'inline-flex' }}>
                  <div style={{ alignSelf: 'stretch', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: 'rgba(255, 255, 255, 0.80)', fontSize: '14px', fontFamily: 'Hanken Grotesk', fontWeight: 300, wordWrap: 'break-word' }}>São Miguel</div>
                  <div style={{ alignSelf: 'stretch', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: 'rgba(255, 255, 255, 0.80)', fontSize: '14px', fontFamily: 'Hanken Grotesk', fontWeight: 300, wordWrap: 'break-word' }}>Faial</div>
                  <div style={{ alignSelf: 'stretch', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: 'rgba(255, 255, 255, 0.80)', fontSize: '14px', fontFamily: 'Hanken Grotesk', fontWeight: 300, wordWrap: 'break-word' }}>Terceira</div>
                  <div style={{ alignSelf: 'stretch', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: 'rgba(255, 255, 255, 0.80)', fontSize: '14px', fontFamily: 'Hanken Grotesk', fontWeight: 300, wordWrap: 'break-word' }}>Pico</div>
                  <div style={{ alignSelf: 'stretch', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: 'rgba(255, 255, 255, 0.80)', fontSize: '14px', fontFamily: 'Hanken Grotesk', fontWeight: 300, wordWrap: 'break-word' }}>São Jorge</div>
                </div>
                <div style={{ flex: '1 1 0', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '8px', display: 'inline-flex' }}>
                  <div style={{ alignSelf: 'stretch', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: 'rgba(255, 255, 255, 0.80)', fontSize: '14px', fontFamily: 'Hanken Grotesk', fontWeight: 300, wordWrap: 'break-word' }}>Graciosa</div>
                  <div style={{ alignSelf: 'stretch', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: 'rgba(255, 255, 255, 0.80)', fontSize: '14px', fontFamily: 'Hanken Grotesk', fontWeight: 300, wordWrap: 'break-word' }}>Santa Maria</div>
                  <div style={{ alignSelf: 'stretch', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: 'rgba(255, 255, 255, 0.80)', fontSize: '14px', fontFamily: 'Hanken Grotesk', fontWeight: 300, wordWrap: 'break-word' }}>Corvo</div>
                  <div style={{ alignSelf: 'stretch', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: 'rgba(255, 255, 255, 0.80)', fontSize: '14px', fontFamily: 'Hanken Grotesk', fontWeight: 300, wordWrap: 'break-word' }}>Flores</div>
                </div>
              </div>
            </div>
          </div>

            {/* Coluna 4 - Contact Info */}
            <div style={{ width: '174px', flexShrink: 0 }}>
              <div style={{ flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '12px', display: 'flex' }}>
                <div style={{ alignSelf: 'stretch', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: 'white', fontSize: '16px', fontFamily: 'Hanken Grotesk', fontWeight: 400, wordWrap: 'break-word' }}>
                  Contact Info
                </div>
                <div style={{ alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '8px', display: 'flex' }}>
                  <div style={{ alignSelf: 'stretch', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: 'rgba(255, 255, 255, 0.80)', fontSize: '14px', fontFamily: 'Hanken Grotesk', fontWeight: 300, wordWrap: 'break-word' }}>
                    Rua da Fajã Nova, nº 12 — 9700-215, Terceira
                  </div>
                  <div style={{ alignSelf: 'stretch', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: 'rgba(255, 255, 255, 0.80)', fontSize: '14px', fontFamily: 'Hanken Grotesk', fontWeight: 300, wordWrap: 'break-word' }}>
                    (+351) 292 123 456
                  </div>
                  <div style={{ alignSelf: 'stretch', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: 'rgba(255, 255, 255, 0.80)', fontSize: '14px', fontFamily: 'Hanken Grotesk', fontWeight: 300, wordWrap: 'break-word' }}>
                    azoreon@açores.com
                  </div>
                </div>
              </div>
            </div>
          </div> {/* Close right side columns group */}
        </div> {/* Close main footer content */}

        {/* Bottom Bar */}
        <div style={{ alignSelf: 'stretch', paddingTop: '24px', paddingBottom: '24px', borderTop: '0.50px rgba(255, 255, 255, 0.40) solid', justifyContent: 'space-between', alignItems: 'center', display: 'inline-flex', gap: '80px', marginTop: '80px' }}>
          <div style={{ justifyContent: 'center', display: 'flex', flexDirection: 'column', color: 'rgba(255, 255, 255, 0.80)', fontSize: '14px', fontFamily: 'Hanken Grotesk', fontWeight: 300, wordWrap: 'break-word' }}>
            © Copyright 2025, All Rights Reserved by Azoreon
          </div>
          <div style={{ justifyContent: 'flex-start', alignItems: 'center', gap: '40px', display: 'flex' }}>
            <Link href="/privacy" style={{ justifyContent: 'center', display: 'flex', flexDirection: 'column', color: 'rgba(255, 255, 255, 0.80)', fontSize: '14px', fontFamily: 'Hanken Grotesk', fontWeight: 300, wordWrap: 'break-word' }}>
              Privacy Policy
            </Link>
            <Link href="/terms" style={{ justifyContent: 'center', display: 'flex', flexDirection: 'column', color: 'rgba(255, 255, 255, 0.80)', fontSize: '14px', fontFamily: 'Hanken Grotesk', fontWeight: 300, wordWrap: 'break-word' }}>
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
