'use client';

import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import Image from 'next/image';

export default function Footer() {
    const { t } = useLanguage();

    const quickLinks = [
        { label: t('nav', 'features'), href: '#features' },
        { label: t('nav', 'venues'), href: '#venues' },
        { label: t('nav', 'tournament'), href: '#tournament' },
    ];

    return (
        <footer className="border-t border-border bg-darker">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
                    {/* Brand */}
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <Image src="/logo2.png" alt="Spora" width={36} height={36} className="rounded-lg" />
                            <span className="text-lg font-bold text-spora">SPORA</span>
                        </div>
                        <p className="text-sm text-text-secondary leading-relaxed">
                            {t('footer', 'tagline')}
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-semibold text-white mb-4">{t('footer', 'quickLinks')}</h4>
                        <ul className="space-y-2">
                            {quickLinks.map((link) => (
                                <li key={link.href}>
                                    <a
                                        href={link.href}
                                        className="text-sm text-text-secondary hover:text-spora transition-colors"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-semibold text-white mb-4">{t('footer', 'contact')}</h4>
                        <a
                            href="https://wa.me/36702538983"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-spora transition-colors"
                        >
                            <MessageCircle size={16} />
                            {t('footer', 'whatsapp')}
                        </a>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="mt-10 pt-6 border-t border-border text-center">
                    <p className="text-xs text-text-muted">
                        {t('legal', 'company')}
                    </p>
                </div>
            </div>
        </footer>
    );
}
