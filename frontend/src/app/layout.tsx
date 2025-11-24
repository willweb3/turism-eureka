import type { Metadata } from "next";
import { Hanken_Grotesk } from "next/font/google";
import "@/styles/globals.css";
import ClientLayout from "@/components/ClientLayout";

const hankenGrotesk = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-hanken',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "AZOREON - Turismo nos Açores",
  description: "Marketplace de turismo na Ilha do Pico, Açores",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${hankenGrotesk.variable} font-hanken`}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
