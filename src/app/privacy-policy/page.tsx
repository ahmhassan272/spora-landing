'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Shield } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function PrivacyPolicyPage() {
    const { t } = useLanguage();

    const renderListItem = (text: string) => {
        const parts = text.split(':');
        if (parts.length > 1) {
            return (
                <>
                    <strong className="text-white">{parts[0]}:</strong>
                    {parts.slice(1).join(':')}
                </>
            );
        }
        return text;
    };

    return (
        <div className="min-h-screen flex flex-col pt-16">
            <Header />
            <main className="flex-grow py-16 sm:py-24 bg-darker">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="mb-12 border-b border-border pb-8 text-center"
                    >
                        <Shield size={36} className="text-spora mx-auto mb-4" />
                        <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-white">{t('privacyPolicyFull', 'title')}</h1>
                        <p className="text-text-secondary font-medium">{t('privacyPolicyFull', 'lastUpdated')}</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="space-y-12 text-text-secondary leading-relaxed"
                    >
                        {/* Section 1 */}
                        <section>
                            <h2 className="text-2xl font-semibold text-white mb-4">1. {t('privacyPolicyFull', 'section1Title')}</h2>
                            <p>{t('privacyPolicyFull', 'section1Body')}</p>
                        </section>

                        {/* Section 2 */}
                        <section>
                            <h2 className="text-2xl font-semibold text-white mb-4">2. {t('privacyPolicyFull', 'section2Title')}</h2>
                            <p className="mb-4">{t('privacyPolicyFull', 'section2Intro')}</p>
                            <ul className="list-disc pl-6 space-y-3">
                                <li>{renderListItem(t('privacyPolicyFull', 'section2Item1'))}</li>
                                <li>{renderListItem(t('privacyPolicyFull', 'section2Item2'))}</li>
                                <li>{renderListItem(t('privacyPolicyFull', 'section2Item3'))}</li>
                                <li>{renderListItem(t('privacyPolicyFull', 'section2Item4'))}</li>
                                <li>{renderListItem(t('privacyPolicyFull', 'section2Item5'))}</li>
                            </ul>
                        </section>

                        {/* Section 3 */}
                        <section>
                            <h2 className="text-2xl font-semibold text-white mb-4">3. {t('privacyPolicyFull', 'section3Title')}</h2>
                            <p className="mb-4">{t('privacyPolicyFull', 'section3Intro')}</p>
                            <ul className="list-disc pl-6 space-y-3">
                                <li>{t('privacyPolicyFull', 'section3Item1')}</li>
                                <li>{t('privacyPolicyFull', 'section3Item2')}</li>
                                <li>{t('privacyPolicyFull', 'section3Item3')}</li>
                                <li>{t('privacyPolicyFull', 'section3Item4')}</li>
                            </ul>
                        </section>

                        {/* Section 4 */}
                        <section>
                            <h2 className="text-2xl font-semibold text-white mb-4">4. {t('privacyPolicyFull', 'section4Title')}</h2>
                            <p className="mb-4">{t('privacyPolicyFull', 'section4Intro')}</p>
                            <ul className="list-disc pl-6 space-y-3">
                                <li>{renderListItem(t('privacyPolicyFull', 'section4Item1'))}</li>
                                <li>{renderListItem(t('privacyPolicyFull', 'section4Item2'))}</li>
                                <li>{renderListItem(t('privacyPolicyFull', 'section4Item3'))}</li>
                            </ul>
                        </section>

                        {/* Section 5 */}
                        <section>
                            <h2 className="text-2xl font-semibold text-white mb-4">5. {t('privacyPolicyFull', 'section5Title')}</h2>
                            <p className="mb-4">{t('privacyPolicyFull', 'section5Intro')}</p>
                            <ul className="list-disc pl-6 space-y-3">
                                <li>{renderListItem(t('privacyPolicyFull', 'section5Item1'))}</li>
                                <li>{renderListItem(t('privacyPolicyFull', 'section5Item2'))}</li>
                                <li>{renderListItem(t('privacyPolicyFull', 'section5Item3'))}</li>
                            </ul>
                        </section>

                        {/* Section 6 */}
                        <section>
                            <h2 className="text-2xl font-semibold text-white mb-4">6. {t('privacyPolicyFull', 'section6Title')}</h2>
                            <p>{t('privacyPolicyFull', 'section6Body')}</p>
                        </section>

                        {/* Section 7 */}
                        <section>
                            <h2 className="text-2xl font-semibold text-white mb-4">7. {t('privacyPolicyFull', 'section7Title')}</h2>
                            <p className="mb-4">{t('privacyPolicyFull', 'section7Intro')}</p>
                            <ul className="list-disc pl-6 space-y-3">
                                <li>{renderListItem(t('privacyPolicyFull', 'section7Item1'))}</li>
                                <li>{renderListItem(t('privacyPolicyFull', 'section7Item2'))}</li>
                                <li>{renderListItem(t('privacyPolicyFull', 'section7Item3'))}</li>
                                <li>{renderListItem(t('privacyPolicyFull', 'section7Item4'))}</li>
                            </ul>
                        </section>

                        {/* Section 8 */}
                        <section>
                            <h2 className="text-2xl font-semibold text-white mb-4">8. {t('privacyPolicyFull', 'section8Title')}</h2>
                            <p className="mb-4">{t('privacyPolicyFull', 'section8Intro')}</p>
                            <div className="bg-card border border-border p-6 rounded-xl space-y-3 text-text-secondary">
                                <p>{renderListItem(t('privacyPolicyFull', 'section8Item1'))}</p>
                                <p>{renderListItem(t('privacyPolicyFull', 'section8Item2'))}</p>
                                <p>
                                    <strong className="text-white">Email:</strong>{' '}
                                    <a href="mailto:admin@spora-hu.app" className="text-spora hover:underline">
                                        admin@spora-hu.app
                                    </a>
                                </p>
                                <p>{renderListItem(t('privacyPolicyFull', 'section8Item4'))}</p>
                            </div>
                        </section>

                    </motion.div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
