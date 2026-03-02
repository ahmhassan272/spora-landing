'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Trophy } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import Image from 'next/image';

export default function Hero() {
    const { t } = useLanguage();

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 clip-hero">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-darker via-dark to-darker" />

            {/* Animated accent orbs */}
            <motion.div
                className="absolute top-1/4 -left-32 w-96 h-96 bg-spora/10 rounded-full blur-3xl"
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
                className="absolute bottom-1/4 -right-32 w-80 h-80 bg-spora/8 rounded-full blur-3xl"
                animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
                transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
            />

            {/* Grid pattern overlay */}
            <div
                className="absolute inset-0 opacity-5"
                style={{
                    backgroundImage: 'linear-gradient(#1ABC9C 1px, transparent 1px), linear-gradient(90deg, #1ABC9C 1px, transparent 1px)',
                    backgroundSize: '60px 60px',
                }}
            />

            <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                {/* Logo */}
                <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, ease: 'backOut' }}
                    className="mb-8"
                >
                    <Image
                        src="/logo2.png"
                        alt="Spora"
                        width={100}
                        height={100}
                        className="mx-auto rounded-2xl"
                    />
                </motion.div>

                {/* Headline */}
                <motion.h1
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight mb-6"
                >
                    {t('hero', 'headline').split('.').filter(Boolean).map((word, i) => (
                        <span key={i}>
                            <span className={i === 2 ? 'text-spora' : 'text-white'}>
                                {word.trim()}
                            </span>
                            {i < 2 && <span className="text-spora">.</span>}
                            {i === 2 && <span className="text-spora">.</span>}
                            {i < 2 && ' '}
                        </span>
                    ))}
                </motion.h1>

                {/* Subheadline */}
                <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-lg sm:text-xl text-text-secondary max-w-2xl mx-auto mb-10 leading-relaxed"
                >
                    {t('hero', 'subheadline')}
                </motion.p>

                {/* CTAs */}
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <a
                        href="https://wa.me/36702538983"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-spora text-black font-bold text-lg hover:bg-spora-dark transition-all duration-300 hover:shadow-lg hover:shadow-spora/25"
                    >
                        {t('hero', 'cta')}
                        <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                    <a
                        href="#tournament"
                        className="group inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-spora/40 text-spora font-semibold text-lg hover:bg-spora/10 hover:border-spora transition-all duration-300"
                    >
                        <Trophy size={20} />
                        {t('hero', 'ctaSecondary')}
                    </a>
                </motion.div>

            </div>
        </section>
    );
}
