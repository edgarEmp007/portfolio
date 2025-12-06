"use client";

import { motion } from "framer-motion";
import { Code2, ShieldAlert } from "lucide-react";
import { useTranslations } from 'next-intl';

const skills = {
    engineering: [
        "JavaScript / TypeScript",
        "Python",
        "React / Next.js",
        "Tailwind CSS",
        "Node.js",
        "PostgreSQL / MySQL",
        "Docker / Kubernetes",
        "AWS / Azure",
    ],
    appsec: [
        "Secure Coding Models",
        "OWASP Top 10",
        "SAST / DAST Tools",
        "Threat Modeling",
        "DevSecOps Pipelines",
        "Authentication (OAuth/OIDC)",
        "Penetration Testing Basics",
    ],
};

export default function Skills() {
    const t = useTranslations('Skills');

    return (
        <section className="py-20 bg-[var(--muted)]/20">
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

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Engineering Stack */}
                        <div className="bg-zinc-900/50 p-8 rounded-2xl border border-zinc-800">
                            <div className="flex items-center gap-3 mb-8 text-blue-400">
                                <Code2 className="w-8 h-8" />
                                <h3 className="text-2xl font-bold text-white">{t('engineeringTitle')}</h3>
                            </div>
                            <div className="flex flex-wrap gap-3">
                                {skills.engineering.map((skill, index) => (
                                    <span
                                        key={index}
                                        className="px-4 py-2 bg-blue-500/10 border border-blue-500/20 text-blue-300 rounded-lg text-sm font-medium hover:border-blue-500/50 transition-colors cursor-default"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* AppSec Stack */}
                        <div className="bg-zinc-900/50 p-8 rounded-2xl border border-zinc-800">
                            <div className="flex items-center gap-3 mb-8 text-[var(--accent)]">
                                <ShieldAlert className="w-8 h-8" />
                                <h3 className="text-2xl font-bold text-white">{t('appsecTitle')}</h3>
                            </div>
                            <div className="flex flex-wrap gap-3">
                                {skills.appsec.map((skill, index) => (
                                    <span
                                        key={index}
                                        className="px-4 py-2 bg-[var(--accent)]/10 border border-[var(--accent)]/20 text-[var(--accent)] rounded-lg text-sm font-medium hover:border-[var(--accent)]/50 transition-colors cursor-default"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
