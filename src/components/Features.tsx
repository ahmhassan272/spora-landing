'use client';

import { motion } from 'framer-motion';
import { CreditCard, Brain } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { translations, Lang } from '@/lib/translations';

const featureItems = [
    { key: 'splitPayment' as const, icon: CreditCard, gradient: 'from-emerald-500/20 to-teal-500/20' },
    { key: 'matchmaking' as const, icon: Brain, gradient: 'from-cyan-500/20 to-blue-500/20' },
];

export default function Features() {
    const { lang, t } = useLanguage();

    return (
        <section id="features" className="py-24 sm:py-32 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                        {t('features', 'title')}
                    </h2>
                    <p className="text-text-secondary text-lg max-w-xl mx-auto">
                        {t('features', 'subtitle')}
                    </p>
                </motion.div>

                {/* Feature Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
                    {featureItems.map((feature, i) => {
                        const Icon = feature.icon;
                        const featureData = translations.features[feature.key];
                        const title = featureData.title[lang];
                        const desc = featureData.desc[lang];

                        return (
                            <motion.div
                                key={feature.key}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-50px' }}
                                transition={{ duration: 0.5, delay: i * 0.15 }}
                                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                                className="group relative rounded-2xl bg-card border border-border p-8 hover:border-spora/40 transition-all duration-300"
                            >
                                {/* Gradient glow on hover */}
                                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                                <div className="relative z-10">
                                    <div className="w-14 h-14 rounded-xl bg-spora/10 flex items-center justify-center mb-6 group-hover:bg-spora/20 transition-colors duration-300">
                                        <Icon size={28} className="text-spora" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-3 group-hover:text-spora transition-colors duration-300">
                                        {title}
                                    </h3>
                                    <p className="text-text-secondary leading-relaxed text-sm">
                                        {desc}
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
