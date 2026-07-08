'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, ChevronDown } from 'lucide-react';

export default function PrivacyPage() {
    const [openSection, setOpenSection] = useState<string | null>(null);

    const sections = [
        { 
            key: 'privacy', 
            title: 'Privacy Policy', 
            content: 'Content coming soon...' 
        },
        { 
            key: 'terms', 
            title: 'Terms of Service', 
            content: 'Spora Digital Kft. provides a digital intermediary service for amateur sports organization. We do not own or operate any sports venues. Venue availability, pricing, and conditions are set by the respective venue operators. Spora facilitates bookings and payments but is not liable for venue conditions, player injuries, or disputes between users. The split-payment system requires all designated players to complete payment within 2 hours of the initial booking, or the reservation is automatically released. Tournament entry fees are non-refundable once registration is confirmed. All users must be 16 years of age or older. These terms are governed by Hungarian law.' 
        },
    ];

    return (
        <div className="min-h-screen flex flex-col pt-16">
            <Header />
            <main className="flex-grow py-16 sm:py-24 bg-darker">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-10"
                    >
                        <Shield size={32} className="text-spora mx-auto mb-4" />
                        <h1 className="text-3xl font-bold">Legal</h1>
                    </motion.div>

                    <div className="space-y-4">
                        {sections.map((section) => (
                            <motion.div
                                key={section.key}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
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
            </main>
            <Footer />
        </div>
    );
}
