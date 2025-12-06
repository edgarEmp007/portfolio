"use client";

import { motion } from "framer-motion";
import { Briefcase, Server, ShieldCheck, Users } from "lucide-react";
import { useTranslations } from 'next-intl';

export default function Experience() {
    const t = useTranslations('Experience');

    const achievements = [
        {
            icon: Users,
            text: t('achievements.users'),
        },
        {
            icon: Server,
            text: t('achievements.migration'),
        },
        {
            icon: ShieldCheck,
            text: t('achievements.security'),
        },
        {
            icon: Briefcase,
            text: t('achievements.optimization'),
        },
    ];

    return (
        <section className="py-20 bg-[var(--muted)]/30">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 flex items-center gap-3">
                        <span className="w-2 h-8 bg-[var(--accent)] rounded-full"></span>
                        {t('title')}
                    </h2>

                    <div className="space-y-12">
                        <div
                            className="bg-zinc-900/50 rounded-xl p-8 border border-zinc-800 hover:border-[var(--accent)]/50 transition-colors duration-300"
                        >
                            <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                                <div>
                                    <h3 className="text-2xl font-bold text-white mb-2">
                                        {t('role')}
                                    </h3>
                                    <h4 className="text-xl text-[var(--accent)]">
                                        {t('company')}
                                    </h4>
                                </div>
                                <span className="text-gray-400 mt-2 md:mt-0 font-mono bg-zinc-800 px-3 py-1 rounded-md text-sm">
                                    {t('period')}
                                </span>
                            </div>

                            <p className="text-gray-300 mb-8 max-w-3xl">
                                {t('description')}
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {achievements.map((achievement, i) => (
                                    <div key={i} className="flex items-start gap-3">
                                        <div className="p-2 bg-[var(--accent)]/10 rounded-lg text-[var(--accent)] mt-1">
                                            <achievement.icon size={20} />
                                        </div>
                                        <p className="text-gray-300 text-sm leading-relaxed">
                                            {achievement.text}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
