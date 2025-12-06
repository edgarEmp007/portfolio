"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Code2, Layout, Database, ShieldCheck } from "lucide-react";
import { useTranslations } from 'next-intl';
import { useState } from "react";

const tabs = [
    { id: 'backend', icon: Code2 },
    { id: 'frontend', icon: Layout },
    { id: 'data', icon: Database },
    { id: 'security', icon: ShieldCheck },
];

export default function Skills() {
    const t = useTranslations('Skills');
    const [activeTab, setActiveTab] = useState('backend');

    return (
        <section className="py-20 bg-[var(--muted)]/20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-10 flex items-center justify-center gap-3">
                        <span className="w-2 h-8 bg-[var(--accent)] rounded-full"></span>
                        {t('title')}
                    </h2>

                    <div className="max-w-4xl mx-auto">
                        {/* Tab Navigation */}
                        <div className="flex flex-wrap justify-center gap-4 mb-12">
                            {tabs.map((tab) => {
                                const Icon = tab.icon;
                                const isActive = activeTab === tab.id;
                                return (
                                    <button
                                        key={tab.id}
                                        onClick={() => setActiveTab(tab.id)}
                                        className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${isActive
                                            ? "bg-[var(--accent)] text-[#121212] shadow-[0_0_15px_rgba(0,191,165,0.4)]"
                                            : "bg-zinc-900 text-gray-400 border border-zinc-800 hover:border-[var(--accent)]/50 hover:text-white"
                                            }`}
                                    >
                                        <Icon size={18} />
                                        {t(`categories.${tab.id}.title`)}
                                    </button>
                                );
                            })}
                        </div>

                        {/* Content Area */}
                        <div className="bg-zinc-900/50 p-8 md:p-12 rounded-2xl border border-zinc-800 min-h-[300px] shadow-2xl">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeTab}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <div className="flex flex-col gap-6">
                                        <div className="flex items-center gap-4 mb-4">
                                            <div className="p-3 bg-[var(--accent)]/10 rounded-xl">
                                                {(() => {
                                                    const ActiveIcon = tabs.find(t => t.id === activeTab)?.icon;
                                                    return ActiveIcon ? <ActiveIcon size={32} className="text-[var(--accent)]" /> : null;
                                                })()}
                                            </div>
                                            <h3 className="text-2xl md:text-3xl font-bold text-white">
                                                {t(`categories.${activeTab}.title`)}
                                            </h3>
                                        </div>

                                        <div className="flex flex-wrap gap-3">
                                            {[0, 1, 2, 3, 4, 5, 6].map((idx) => {
                                                // We try to access up to 7 items, but check if they exist
                                                // This is a dynamic way to render translations array without knowing strict length
                                                // In a real optimized scenario we might use rich text chunks, but this works for array simulation
                                                try {
                                                    const skill = t(`categories.${activeTab}.items.${idx}`);
                                                    if (skill?.includes('categories.')) return null; // fallback check
                                                    return (
                                                        <span
                                                            key={idx}
                                                            className="px-4 py-2 bg-zinc-800/50 border border-zinc-700 text-gray-200 rounded-lg text-base font-medium hover:border-[var(--accent)]/50 hover:text-[var(--accent)] transition-colors cursor-default"
                                                        >
                                                            {skill}
                                                        </span>
                                                    )
                                                } catch (e) {
                                                    return null;
                                                }
                                            })}
                                        </div>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
