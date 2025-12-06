"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import Link from "next/link";
import { useTranslations } from 'next-intl';

// Replace Github/Linkedin imports with inline SVGs or custom components if preferred,
// but for now I will inline them to be safe and quick.
// Wait, I can just define them as components in the file or replacing usages directly.
// Let's replace usages directly with SVGs.

export default function Contact() {
    const t = useTranslations('Contact');
    const year = new Date().getFullYear();

    return (
        <section id="contact" className="py-24 bg-[var(--muted)]/30 border-t border-zinc-900">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
                        {t('title')}
                    </h2>
                    <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
                        {t('subtitle')}
                    </p>

                    <div className="flex flex-wrap justify-center gap-6">
                        <Link
                            href="mailto:edgarmacias@devcybsec.com"
                            className="group flex items-center gap-3 px-8 py-4 bg-zinc-900 border border-zinc-700 rounded-full text-white hover:border-[var(--accent)] hover:bg-[var(--accent)]/10 transition-all duration-300"
                        >
                            <Mail className="w-5 h-5 text-[var(--accent)]" />
                            <span className="font-medium">{t('ctaEmail')}</span>
                        </Link>

                        <Link
                            href="https://www.linkedin.com/in/edgar-macias-devcybsec"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center gap-3 px-8 py-4 bg-zinc-900 border border-zinc-700 rounded-full text-white hover:border-[#0077b5] hover:bg-[#0077b5]/10 transition-all duration-300"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="w-5 h-5 text-[#0077b5]"
                            >
                                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                                <rect width="4" height="12" x="2" y="9" />
                                <circle cx="4" cy="4" r="2" />
                            </svg>
                            <span className="font-medium">{t('ctaLinkedIn')}</span>
                        </Link>

                        <Link
                            href="https://github.com/edgar-macias-se"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center gap-3 px-8 py-4 bg-zinc-900 border border-zinc-700 rounded-full text-white hover:border-white hover:bg-white/10 transition-all duration-300"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="w-5 h-5 text-white"
                            >
                                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                                <path d="M9 18c-4.51 2-5-2-7-2" />
                            </svg>
                            <span className="font-medium">{t('ctaGitHub')}</span>
                        </Link>
                    </div>

                    <div className="mt-20 text-zinc-600 text-sm">
                        {t('footer', { year })}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
