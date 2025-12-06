"use client";

import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle } from "lucide-react";
import Link from "next/link";
import { useTranslations } from 'next-intl';
import { useState, useEffect } from "react";

export default function FloatingContactButton() {
    const t = useTranslations('Contact');
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault(); // Prevent default anchor behavior
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        } else {
            // Fallback if ID not found, though we should add id="contact" to Contact.tsx
            window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
        }
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.3 }}
                    className="fixed bottom-8 right-8 z-50"
                >
                    <Link
                        href="#contact"
                        onClick={scrollToContact}
                        className="flex items-center gap-2 px-5 py-3 bg-[var(--accent)] text-[#121212] rounded-full font-bold shadow-[0_0_20px_rgba(0,191,165,0.4)] hover:shadow-[0_0_30px_rgba(0,191,165,0.6)] hover:scale-105 transition-all duration-300"
                    >
                        <MessageCircle size={20} />
                        <span className="hidden sm:inline">Contáctame</span>
                    </Link>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
