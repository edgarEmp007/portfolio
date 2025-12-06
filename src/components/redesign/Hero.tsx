"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useTranslations } from 'next-intl';

export default function Hero() {
    const t = useTranslations('Hero');

    return (
        <section className="min-h-screen flex flex-col justify-center items-center pt-20 pb-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16 lg:gap-24">

                    {/* Text Column */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="w-full md:w-1/2 text-center md:text-left order-2 md:order-1"
                    >
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6">
                            {t('title')}
                        </h1>
                        <h2 className="text-2xl md:text-4xl font-semibold text-gray-400 mb-2">
                            {t('role')}
                        </h2>
                        <h3 className="text-xl md:text-2xl text-[var(--accent)] font-medium mb-8">
                            {t('specialty')}
                        </h3>
                        <p className="max-w-2xl text-lg text-gray-300 leading-relaxed mb-10 mx-auto md:mx-0">
                            {t('description')}
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                            <Link
                                href="https://github.com/edgar-macias-se"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-black bg-[var(--accent)] hover:bg-opacity-90 transition-colors duration-300"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="w-5 h-5 mr-2"
                                >
                                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                                    <path d="M9 18c-4.51 2-5-2-7-2" />
                                </svg>
                                {t('ctaCode')}
                            </Link>
                            <Link
                                href="/cv.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center px-6 py-3 border border-gray-600 text-base font-medium rounded-md text-white bg-transparent hover:bg-gray-800 transition-colors duration-300"
                            >
                                <Download className="w-5 h-5 mr-2" />
                                {t('ctaCV')}
                            </Link>
                        </div>
                    </motion.div>

                    {/* Image Column */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="w-full md:w-1/2 flex justify-center md:justify-center order-1 md:order-2"
                    >
                        <div className="relative w-64 h-64 md:w-80 md:h-[400px] rounded-2xl overflow-hidden border-4 border-[var(--accent)]/20 shadow-[0_0_40px_rgba(0,191,165,0.2)]">
                            <Image
                                src="/me.png"
                                alt="Edgar Macías"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
