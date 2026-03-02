'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, ChevronDown } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function Legal() {
    const { t } = useLanguage();
    const [openSection, setOpenSection] = useState<string | null>(null);

    const sections = [
        { key: 'privacy', title: t('legal', 'privacyTitle'), content: t('legal', 'privacyContent') },
        { key: 'terms', title: t('legal', 'termsTitle'), content: t('legal', 'termsContent') },
    ];

    return (
        <section className="py-16 sm:py-24 bg-darker">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-10"
                >
                    <Shield size={28} className="text-spora mx-auto mb-3" />
                    <h2 className="text-2xl font-bold">{t('legal', 'title')}</h2>
                </motion.div>

                <div className="space-y-3">
                    {sections.map((section) => (
                        <motion.div
                            key={section.key}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="rounded-xl border border-border bg-card overflow-hidden"
                        >
                            <button
                                onClick={() => setOpenSection(openSection === section.key ? null : section.key)}
                                className="w-full flex items-center justify-between p-5 text-left hover:bg-card-hover transition-colors"
                            >
                                <span className="font-semibold text-white">{section.title}</span>
                                <motion.div
                                    animate={{ rotate: openSection === section.key ? 180 : 0 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <ChevronDown size={18} className="text-text-muted" />
                                </motion.div>
                            </button>
                            <AnimatePresence>
                                {openSection === section.key && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="px-5 pb-5">
                                            <p className="text-sm text-text-secondary leading-relaxed">
                                                {section.content}
                                            </p>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
