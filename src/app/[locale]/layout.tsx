import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css"; // Fixed import path
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing, type Locale } from '@/i18n/routing';
import LanguageSwitcher from '@/components/LanguageSwitcher';

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Edgar Macías | Senior Software Engineer",
  description: "Senior Software Engineer & Full-Stack Developer specializing in AppSec and Scalability.",
  keywords: ["Software Engineer", "Full-Stack Developer", "AppSec", "Web Development", "Security", "Next.js", "React"],
};

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as Locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale} className="dark">
      <body className={`${inter.variable} min-h-screen bg-[var(--background)] text-[var(--foreground)] antialiased`}>
        <NextIntlClientProvider messages={messages}>
          <LanguageSwitcher />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}