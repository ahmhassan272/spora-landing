'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Users, Trophy, Swords, ArrowRight, CheckCircle, Loader2 } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const TOURNAMENT_DATE = new Date('2026-03-07T20:00:00+01:00');

const INPUT_CLASS = "w-full px-4 py-3 rounded-xl bg-[#0d0d1a] border border-[#2a2a3a] text-white placeholder:text-[#555] text-sm focus:outline-none focus:border-spora focus:ring-1 focus:ring-spora transition-colors";

function useCountdown(targetDate: Date) {
    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

    useEffect(() => {
        const tick = () => {
            const now = new Date().getTime();
            const diff = targetDate.getTime() - now;

            if (diff <= 0) {
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
                return;
            }

            setTimeLeft({
                days: Math.floor(diff / (1000 * 60 * 60 * 24)),
                hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((diff / (1000 * 60)) % 60),
                seconds: Math.floor((diff / 1000) % 60),
            });
        };

        tick();
        const interval = setInterval(tick, 1000);
        return () => clearInterval(interval);
    }, [targetDate]);

    return timeLeft;
}

function RegistrationForm() {
    const { t } = useLanguage();
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
    const [playerCount, setPlayerCount] = useState(6);
    const [agreed, setAgreed] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!agreed) return;

        setStatus('submitting');
        const form = e.currentTarget;
        const formData = new FormData(form);
        formData.append('Player_Count', String(playerCount));

        try {
            await fetch('https://formsubmit.co/ajax/ahmhassan272@gmail.com', {
                method: 'POST',
                body: formData,
            });
            setStatus('success');
        } catch {
            setStatus('error');
        }
    };

    if (status === 'success') {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
            >
                <CheckCircle size={56} className="text-spora mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">{t('tournament', 'success')}</h3>
                <p className="text-text-secondary">{t('tournament', 'successDetail')}</p>
            </motion.div>
        );
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
        >
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-6">
                {t('tournament', 'formTitle')}
            </h3>

            {/* 3-Step Process */}
            <div className="rounded-xl bg-darker border border-border p-5 mb-8 space-y-2.5">
                <p className="text-sm text-text-secondary flex items-start gap-2">
                    <span className="text-spora font-bold shrink-0">①</span>
                    {t('tournament', 'step1')}
                </p>
                <p className="text-sm text-text-secondary flex items-start gap-2">
                    <span className="text-spora font-bold shrink-0">②</span>
                    {t('tournament', 'step2')}
                </p>
                <p className="text-sm text-text-secondary flex items-start gap-2">
                    <span className="text-spora font-bold shrink-0">③</span>
                    {t('tournament', 'step3')}
                </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
                {/* Hidden inputs */}
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_subject" value="New Ramadan Cup Team Registration! ⚽" />

                {/* Team Name */}
                <div>
                    <label htmlFor="Team_Name" className="block text-sm font-medium text-text-secondary mb-1.5">
                        {t('tournament', 'teamNameLabel')}
                    </label>
                    <input
                        type="text"
                        id="Team_Name"
                        name="Team_Name"
                        required
                        placeholder={t('tournament', 'teamNamePlaceholder')}
                        className={INPUT_CLASS}
                    />
                </div>

                {/* Captain Name */}
                <div>
                    <label htmlFor="Captain_Name" className="block text-sm font-medium text-text-secondary mb-1.5">
                        {t('tournament', 'captainNameLabel')}
                    </label>
                    <input
                        type="text"
                        id="Captain_Name"
                        name="Captain_Name"
                        required
                        placeholder={t('tournament', 'captainNamePlaceholder')}
                        className={INPUT_CLASS}
                    />
                </div>

                {/* WhatsApp */}
                <div>
                    <label htmlFor="WhatsApp_Number" className="block text-sm font-medium text-text-secondary mb-1.5">
                        {t('tournament', 'whatsappLabel')}
                    </label>
                    <input
                        type="tel"
                        id="WhatsApp_Number"
                        name="WhatsApp_Number"
                        required
                        placeholder={t('tournament', 'whatsappPlaceholder')}
                        className={INPUT_CLASS}
                    />
                </div>

                {/* Two-column: Jersey Color + Player Count */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                        <label htmlFor="Jersey_Color" className="block text-sm font-medium text-text-secondary mb-1.5">
                            {t('tournament', 'jerseyColorLabel')}
                        </label>
                        <input
                            type="text"
                            id="Jersey_Color"
                            name="Jersey_Color"
                            placeholder={t('tournament', 'jerseyColorPlaceholder')}
                            className={INPUT_CLASS}
                        />
                    </div>
                    <div>
                        <label htmlFor="Player_Count" className="block text-sm font-medium text-text-secondary mb-1.5">
                            {t('tournament', 'playerCountLabel')}
                        </label>
                        <div className="flex items-center gap-3">
                            <button
                                type="button"
                                onClick={() => setPlayerCount(Math.max(6, playerCount - 1))}
                                className="w-10 h-10 rounded-lg bg-[#0d0d1a] border border-[#2a2a3a] text-white hover:border-spora transition-colors flex items-center justify-center text-lg font-bold"
                            >
                                −
                            </button>
                            <span className="text-2xl font-bold text-spora tabular-nums w-10 text-center">{playerCount}</span>
                            <button
                                type="button"
                                onClick={() => setPlayerCount(Math.min(10, playerCount + 1))}
                                className="w-10 h-10 rounded-lg bg-[#0d0d1a] border border-[#2a2a3a] text-white hover:border-spora transition-colors flex items-center justify-center text-lg font-bold"
                            >
                                +
                            </button>
                        </div>
                    </div>
                </div>

                {/* Teammates List */}
                <div>
                    <label htmlFor="Teammates_List" className="block text-sm font-medium text-text-secondary mb-1.5">
                        {t('tournament', 'teammatesLabel')}
                    </label>
                    <textarea
                        id="Teammates_List"
                        name="Teammates_List"
                        rows={4}
                        required
                        placeholder={t('tournament', 'teammatesPlaceholder')}
                        className={`${INPUT_CLASS} resize-none`}
                    />
                </div>

                {/* Agreement Checkbox */}
                <label className="flex items-start gap-3 cursor-pointer group">
                    <div className="relative mt-0.5">
                        <input
                            type="checkbox"
                            checked={agreed}
                            onChange={(e) => setAgreed(e.target.checked)}
                            className="sr-only peer"
                            required
                        />
                        <div className="w-5 h-5 rounded border-2 border-[#2a2a3a] bg-[#0d0d1a] peer-checked:bg-spora peer-checked:border-spora transition-all flex items-center justify-center">
                            {agreed && (
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                                    <path d="M2 6L5 9L10 3" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            )}
                        </div>
                    </div>
                    <span className="text-xs text-text-secondary leading-relaxed group-hover:text-text-primary transition-colors">
                        {t('tournament', 'agreementLabel')}
                    </span>
                </label>

                {/* Submit Button */}
                <button
                    type="submit"
                    disabled={!agreed || status === 'submitting'}
                    className={`group w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-bold text-lg transition-all duration-300 cursor-pointer ${agreed
                        ? 'bg-spora text-black hover:bg-spora-dark hover:shadow-lg hover:shadow-spora/25'
                        : 'bg-spora/30 text-black/50 cursor-not-allowed'
                        }`}
                >
                    {status === 'submitting' ? (
                        <>
                            <Loader2 size={20} className="animate-spin" />
                            {t('tournament', 'submitting')}
                        </>
                    ) : (
                        <>
                            {t('tournament', 'submitButton')}
                            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </>
                    )}
                </button>

                {status === 'error' && (
                    <p className="text-red-400 text-sm text-center">Something went wrong. Please try again or contact us via WhatsApp.</p>
                )}
            </form>
        </motion.div>
    );
}

export default function Tournament() {
    const { t } = useLanguage();
    const countdown = useCountdown(TOURNAMENT_DATE);

    const details = [
        { icon: Calendar, label: t('tournament', 'dates') },
        { icon: Clock, label: t('tournament', 'time') },
        { icon: MapPin, label: t('tournament', 'location') },
        { icon: Swords, label: t('tournament', 'format') },
        { icon: Users, label: t('tournament', 'teams') },
        { icon: Clock, label: t('tournament', 'matchDuration') },
    ];

    const countdownItems = [
        { value: countdown.days, label: t('tournament', 'daysLabel') },
        { value: countdown.hours, label: t('tournament', 'hoursLabel') },
        { value: countdown.minutes, label: t('tournament', 'minutesLabel') },
        { value: countdown.seconds, label: t('tournament', 'secondsLabel') },
    ];

    return (
        <section id="tournament" className="py-24 sm:py-32 relative">
            {/* Background accent */}
            <div className="absolute inset-0 bg-gradient-to-b from-darker via-spora/5 to-darker" />

            <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-spora/10 border border-spora/20 text-spora text-sm font-medium mb-4">
                        <Trophy size={14} />
                        {t('tournament', 'liveEvent')}
                    </div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                        {t('tournament', 'title')}
                    </h2>
                    <p className="text-text-secondary text-lg max-w-xl mx-auto">
                        {t('tournament', 'subtitle')}
                    </p>
                </motion.div>

                {/* Countdown Timer */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="flex items-center justify-center gap-3 sm:gap-6 mb-12"
                >
                    {countdownItems.map((item, i) => (
                        <div key={i} className="text-center">
                            <div className="w-16 sm:w-20 h-16 sm:h-20 rounded-xl bg-card border border-border flex items-center justify-center mb-1.5">
                                <span className="text-2xl sm:text-3xl font-bold text-spora tabular-nums">
                                    {String(item.value).padStart(2, '0')}
                                </span>
                            </div>
                            <span className="text-xs text-text-muted uppercase tracking-wider">{item.label}</span>
                        </div>
                    ))}
                </motion.div>

                {/* Tournament Card */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="rounded-2xl bg-card border border-border overflow-hidden"
                >
                    {/* Details Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-px bg-border">
                        {details.map((detail, i) => {
                            const Icon = detail.icon;
                            return (
                                <div
                                    key={i}
                                    className="bg-card p-5 sm:p-6 flex items-center gap-3"
                                >
                                    <Icon size={20} className="text-spora shrink-0" />
                                    <span className="text-sm text-text-secondary">{detail.label}</span>
                                </div>
                            );
                        })}
                    </div>

                    {/* Entry Fee & Prizes */}
                    <div className="p-6 sm:p-8 border-t border-border">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {/* Entry Fee */}
                            <div className="rounded-xl bg-darker p-5 border border-border">
                                <h4 className="text-sm text-text-muted uppercase tracking-wider mb-2">{t('tournament', 'entryFeeLabel')}</h4>
                                <p className="text-2xl font-bold text-white">{t('tournament', 'entryFee')}</p>
                                <p className="text-sm text-text-muted mt-1">{t('tournament', 'paidBy')}</p>
                            </div>

                            {/* Prizes */}
                            <div className="rounded-xl bg-darker p-5 border border-border">
                                <h4 className="text-sm text-text-muted uppercase tracking-wider mb-2">{t('tournament', 'prizesTitle')}</h4>
                                <div className="space-y-2">
                                    <p className="text-sm text-white">
                                        {t('tournament', 'champion').replace('The Farm Debrecen', '')}
                                        <a href="https://www.thefarmdebrecen.hu/" target="_blank" rel="noopener noreferrer" className="text-spora hover:underline">The Farm Debrecen</a>
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Registration Form */}
                        <div className="mt-8 pt-8 border-t border-border">
                            <RegistrationForm />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
