'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Mail, Phone } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function ContactPage() {
    const { t } = useLanguage();

    return (
        <div className="min-h-screen flex flex-col pt-16">
            <Header />
            <main className="flex-grow py-16 sm:py-24 bg-darker">
                <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="mb-12"
                    >
                        <h1 className="text-3xl sm:text-4xl font-bold mb-4">{t('support', 'title')}</h1>
                        <p className="text-text-secondary leading-relaxed max-w-lg mx-auto">
                            {t('support', 'intro')}
                        </p>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="grid grid-cols-1 sm:grid-cols-2 gap-6"
                    >
                        {/* Email Card */}
                        <a 
                            href="mailto:admin@spora-hu.app"
                            className="flex flex-col items-center p-8 rounded-2xl border border-border bg-card hover:bg-card-hover transition-colors group"
                        >
                            <div className="w-12 h-12 rounded-full bg-spora/10 flex items-center justify-center mb-4 group-hover:bg-spora/20 transition-colors">
                                <Mail className="text-spora" size={24} />
                            </div>
                            <h3 className="text-lg font-semibold mb-2">{t('support', 'emailUs')}</h3>
                            <p className="text-text-secondary text-sm">admin@spora-hu.app</p>
                        </a>

                        {/* Phone / WhatsApp Card */}
                        <a 
                            href="tel:+36702538983"
                            className="flex flex-col items-center p-8 rounded-2xl border border-border bg-card hover:bg-card-hover transition-colors group"
                        >
                            <div className="w-12 h-12 rounded-full bg-spora/10 flex items-center justify-center mb-4 group-hover:bg-spora/20 transition-colors">
                                <Phone className="text-spora" size={24} />
                            </div>
                            <h3 className="text-lg font-semibold mb-2">{t('support', 'phone')}</h3>
                            <p className="text-text-secondary text-sm">+36 70 253 8983</p>
                        </a>
                    </motion.div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
