'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import Image from 'next/image';

export default function Header() {
    const { lang, setLang, t } = useLanguage();
    const [mobileOpen, setMobileOpen] = useState(false);

    const navLinks = [
        { label: t('nav', 'features'), href: '#features' },
        { label: t('nav', 'venues'), href: '#venues' },
        { label: t('nav', 'tournament'), href: '#tournament' },
    ];

    return (
        <motion.header
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="fixed top-0 left-0 right-0 z-50 bg-darker/80 backdrop-blur-xl border-b border-border"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
                {/* Logo */}
                <a href="#" className="flex items-center gap-2">
                    <Image src="/logo1.png" alt="Spora" width={40} height={40} className="rounded-lg" />
                    <span className="text-xl font-bold text-spora tracking-tight hidden sm:inline">SPORA</span>
                </a>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="text-sm text-text-secondary hover:text-spora transition-colors duration-200"
                        >
                            {link.label}
                        </a>
                    ))}
                </nav>

                {/* Right side */}
                <div className="flex items-center gap-3">
                    {/* Language Toggle */}
                    <button
                        onClick={() => setLang(lang === 'en' ? 'hu' : 'en')}
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-border text-xs font-medium text-text-secondary hover:text-spora hover:border-spora transition-all duration-200"
                    >
                        <Globe size={14} />
                        {lang === 'en' ? 'HU' : 'EN'}
                    </button>

                    {/* Book Now CTA */}
                    <a
                        href="https://wa.me/36702538983"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hidden sm:inline-flex items-center px-4 py-2 rounded-full bg-spora text-black text-sm font-semibold hover:bg-spora-dark transition-colors duration-200"
                    >
                        {t('nav', 'bookNow')}
                    </a>

                    {/* Mobile Menu Toggle */}
                    <button
                        onClick={() => setMobileOpen(!mobileOpen)}
                        className="md:hidden text-text-secondary hover:text-spora transition-colors"
                    >
                        {mobileOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Drawer */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden bg-darker/95 backdrop-blur-xl border-b border-border overflow-hidden"
                    >
                        <div className="px-4 py-4 flex flex-col gap-3">
                            {navLinks.map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setMobileOpen(false)}
                                    className="text-base text-text-secondary hover:text-spora transition-colors py-2"
                                >
                                    {link.label}
                                </a>
                            ))}
                            <a
                                href="https://wa.me/36702538983"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-2 inline-flex items-center justify-center px-4 py-2.5 rounded-full bg-spora text-black text-sm font-semibold"
                            >
                                {t('nav', 'bookNow')}
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
}
