"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { GraduationCap, Shield, Code, Rocket } from "lucide-react";
import { useRef } from "react";
import { useTranslations } from 'next-intl';

const icons = [GraduationCap, Code, Shield, Rocket];

export default function Journey() {
    const t = useTranslations('Journey');
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    return (
        <section className="py-20" ref={containerRef}>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-16 flex items-center justify-center gap-3">
                        <span className="w-2 h-8 bg-[var(--accent)] rounded-full"></span>
                        {t('title')}
                    </h2>

                    <div className="relative max-w-3xl mx-auto">
                        {/* Vertical Line */}
                        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-zinc-800 transform md:-translate-x-1/2">
                            <motion.div
                                style={{ height: lineHeight }}
                                className="w-full bg-[var(--accent)] origin-top"
                            />
                        </div>

                        <div className="space-y-12">
                            {[0, 1, 2, 3].map((index) => {
                                const Icon = icons[index];
                                return (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true, margin: "-50px" }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        className={`relative flex items-center md:justify-between ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                                            }`}
                                    >
                                        {/* Node/Icon */}
                                        <div className="absolute left-0 md:left-1/2 w-9 h-9 bg-zinc-900 border-2 border-[var(--accent)] rounded-full flex items-center justify-center transform md:-translate-x-1/2 z-10">
                                            <Icon size={16} className="text-[var(--accent)]" />
                                        </div>

                                        {/* Content Spacer for layout */}
                                        <div className="hidden md:block w-5/12" />

                                        {/* Content Card */}
                                        <div className="ml-12 md:ml-0 md:w-5/12 bg-zinc-900/80 p-6 rounded-xl border border-zinc-800 hover:border-[var(--accent)]/30 transition-all duration-300">
                                            <span className="text-[var(--accent)] font-bold text-lg block mb-1">
                                                {t(`milestones.${index}.year`)}
                                            </span>
                                            <h3 className="text-xl font-bold text-white mb-2">
                                                {t(`milestones.${index}.title`)}
                                            </h3>
                                            <p className="text-gray-400 text-sm">
                                                {t(`milestones.${index}.description`)}
                                            </p>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
