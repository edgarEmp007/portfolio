"use client";

import { motion } from "framer-motion";
import { ExternalLink, Lock, Search, LockKeyhole, Glasses } from "lucide-react";
import Link from "next/link";
import { useTranslations } from 'next-intl';

export default function Projects() {
    const t = useTranslations('Projects');

    const projects = [
        {
            key: 'devcybsec',
            link: "https://devcybsec.com/en/laboratorios",
            tech: ["Next.js", "AppSec", "Gamification"],
            icon: Lock,
            featured: true,
        },
        {
            key: 'minisast',
            link: "https://github.com/DevCybSec/mini-sast",
            tech: ["Python", "AST Parsing", "Security Rules"],
            icon: Search,
            featured: false,
        },
        {
            key: 'hexagonalauth',
            link: "https://github.com/edgar-macias-se/go-hexagonal-auth",
            tech: ["Go", "Gorm", "JWT", "Gin", "Hexagonal Architecture", "Docker"],
            icon: LockKeyhole,
            featured: false,
        },
        {
            key: 'leetcode',
            link: "https://github.com/edgar-macias-se/leetcode_road",
            tech: ["LeetCode", "Algorithms", "Data Structures", "Competitive Programming"],
            icon: Glasses,
            featured: false,
        }
    ];

    return (
        <section className="py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-16 flex items-center gap-3">
                        <span className="w-2 h-8 bg-[var(--accent)] rounded-full"></span>
                        {t('title')}
                    </h2>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {projects.map((project, index) => (
                            <div
                                key={index}
                                className="group relative bg-zinc-900 border border-zinc-800 rounded-2xl p-8 hover:border-[var(--accent)] transition-all duration-300 flex flex-col h-full"
                            >
                                <div className="absolute top-8 right-8 text-zinc-700 group-hover:text-[var(--accent)] transition-colors">
                                    <project.icon size={32} />
                                </div>

                                <div className="mb-6">
                                    <span className="text-[var(--accent)] font-medium text-sm tracking-wide uppercase mb-2 block">
                                        {t(`${project.key}.role`)}
                                    </span>
                                    <h3 className="text-2xl font-bold text-white mb-4">
                                        {t(`${project.key}.title`)}
                                    </h3>
                                    <p className="text-gray-400 leading-relaxed mb-6">
                                        {t(`${project.key}.description`)}
                                    </p>
                                </div>

                                <div className="mt-auto">
                                    <div className="flex flex-wrap gap-2 mb-8">
                                        {project.tech.map((t, i) => (
                                            <span key={i} className="text-xs font-medium text-gray-400 bg-zinc-800 px-3 py-1 rounded-full">
                                                {t}
                                            </span>
                                        ))}
                                    </div>

                                    <Link
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center text-[var(--accent)] font-medium hover:underline"
                                    >
                                        {t(`${project.key}.cta`)} <ExternalLink size={16} className="ml-2" />
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
