'use client';

import { motion } from 'framer-motion';
import { MapPin, Lock } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const venueKeys = ['venue1', 'venue2', 'venue3', 'venue4'] as const;

export default function Venues() {
    const { t } = useLanguage();

    return (
        <section id="venues" className="py-24 sm:py-32 relative bg-dark/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-spora/10 border border-spora/20 text-spora text-sm font-medium mb-4">
                        <MapPin size={14} />
                        Debrecen, Hungary
                    </div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                        {t('venues', 'title')}
                    </h2>
                    <p className="text-text-secondary text-lg max-w-xl mx-auto">
                        {t('venues', 'subtitle')}
                    </p>
                </motion.div>

                {/* Venue Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {venueKeys.map((key, i) => (
                        <motion.div
                            key={key}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-50px' }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="group relative rounded-2xl bg-card border border-border overflow-hidden"
                        >
                            {/* Blurred venue image placeholder */}
                            <div className="h-28 bg-gradient-to-br from-spora/5 to-spora/15 relative">
                                <div className="absolute inset-0 backdrop-blur-sm" />
                                {/* Lock overlay */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <motion.div
                                        animate={{ scale: [1, 1.1, 1] }}
                                        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                                    >
                                        <Lock size={32} className="text-spora/60" />
                                    </motion.div>
                                </div>
                            </div>

                            {/* Venue Info */}
                            <div className="p-5">
                                <span className="inline-block px-2.5 py-0.5 rounded-full bg-spora/10 text-spora text-xs font-medium">
                                    {t('venues', 'comingSoon')}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
