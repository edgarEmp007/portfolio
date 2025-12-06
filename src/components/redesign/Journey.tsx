"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { GitBranch, Server, LayoutDashboard, Database, ShieldCheck, Award } from "lucide-react";
import { useRef } from "react";
import { useTranslations } from 'next-intl';

const icons = [GitBranch, Server, LayoutDashboard, Database, ShieldCheck, Award];

export default function Journey() {
    const t = useTranslations('Journey');

    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    return (
        <section className="py-20 relative overflow-hidden" ref={containerRef}>
            {/* Background elements for depth */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-[var(--accent)]/5 to-transparent pointer-events-none opacity-20" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-20 flex flex-col items-center justify-center gap-4 text-center">
                        <span className="text-[var(--accent)] text-lg md:text-xl uppercase tracking-widest font-medium">
                            {t('title').split(':')[0]}
                        </span>
                        <span className="relative">
                            {t('title').split(':')[1]}
                            <span className="absolute -bottom-2 left-1/2 w-1/2 h-1 bg-[var(--accent)] transform -translate-x-1/2 rounded-full"></span>
                        </span>
                    </h2>

                    <div className="relative max-w-4xl mx-auto">
                        {/* Vertical Line Container */}
                        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-zinc-800 transform md:-translate-x-1/2 rounded-full overflow-hidden">
                            <motion.div
                                style={{ height: lineHeight }}
                                className="w-full bg-[var(--accent)] origin-top shadow-[0_0_15px_var(--accent)]"
                            />
                        </div>

                        <div className="space-y-16 md:space-y-24">
                            {[0, 1, 2, 3, 4, 5].map((index) => {
                                const Icon = icons[index];
                                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                                const rawStack = t.raw(`milestones.${index}.tech_stack`) as any;
                                let techStack: string[] = [];

                                if (Array.isArray(rawStack)) {
                                    techStack = rawStack;
                                } else if (typeof rawStack === 'string') {
                                    techStack = rawStack.split(', ');
                                }

                                return (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 50 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true, margin: "-100px" }}
                                        transition={{ duration: 0.6, delay: index * 0.1 }}
                                        className={`relative flex flex-col md:flex-row md:justify-between items-start md:items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                                            }`}
                                    >
                                        {/* Node/Icon */}
                                        <div className="absolute left-8 md:left-1/2 w-16 h-16 -ml-8 bg-[#121212] border-2 border-[var(--accent)] rounded-full flex items-center justify-center transform md:-translate-x-1/2 z-10 shadow-[0_0_20px_rgba(0,191,165,0.3)] transition-transform duration-300 hover:scale-110">
                                            {Icon && <Icon size={24} className="text-[var(--accent)]" />}
                                        </div>

                                        {/* Content Spacer */}
                                        <div className="w-full md:w-5/12" />

                                        {/* Content Card */}
                                        <div className={`w-full md:w-5/12 pl-24 md:pl-0 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12 md:text-left"}`}>
                                            <div className="group relative p-6 bg-zinc-900/50 backdrop-blur-sm rounded-xl border border-zinc-800 hover:border-[var(--accent)]/50 transition-all duration-300 hover:bg-zinc-800/80 hover:shadow-xl hover:-translate-y-1">
                                                <span className="inline-block px-3 py-1 mb-3 text-xs font-bold text-[#121212] bg-[var(--accent)] rounded-full">
                                                    {t(`milestones.${index}.year`)}
                                                </span>
                                                <h3 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-[var(--accent)] transition-colors">
                                                    {t(`milestones.${index}.title`)}
                                                </h3>
                                                <div className="text-sm font-semibold text-gray-300 mb-3 uppercase tracking-wider">
                                                    {t(`milestones.${index}.focus`)}
                                                </div>

                                                {/* Description: Handle String vs Array */}
                                                {(() => {
                                                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                                                    const description = t.raw(`milestones.${index}.description`) as any;

                                                    if (Array.isArray(description)) {
                                                        return (
                                                            <ul className="list-disc list-inside text-gray-400 text-sm leading-relaxed mb-4 space-y-1">
                                                                {description.map((point: string, i: number) => (
                                                                    <li key={i}>{point}</li>
                                                                ))}
                                                            </ul>
                                                        );
                                                    }

                                                    return (
                                                        <p className="text-gray-400 text-sm leading-relaxed mb-4">
                                                            {t(`milestones.${index}.description`)}
                                                        </p>
                                                    );
                                                })()}

                                                {/* Tech Stack Tags */}
                                                <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? "md:justify-end" : "md:justify-start"}`}>
                                                    {techStack.map((tech, tagIdx) => (
                                                        <span key={tagIdx} className="text-xs px-2 py-1 bg-zinc-800 text-[var(--accent)] rounded border border-[var(--accent)]/20">
                                                            {tech}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
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
