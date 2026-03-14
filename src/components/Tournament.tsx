'use client';

import { motion } from 'framer-motion';
import { Trophy, Calendar, Users, Video, BarChart3, Shield, Zap, Star, ArrowRight, Shirt, Clock, Timer } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const INPUT_CLASS = "w-full px-4 py-3 rounded-xl bg-[#0d0d1a] border border-[#2a2a3a] text-white placeholder:text-[#555] text-sm focus:outline-none focus:border-spora focus:ring-1 focus:ring-spora transition-colors";

export default function Tournament() {
    const { t } = useLanguage();

    /* ─── Format phases ─── */
    const phases = [
        { icon: Shield, title: t('tournament', 'phase1Title'), desc: t('tournament', 'phase1Desc'), accent: 'from-emerald-500/20 to-teal-500/20' },
        { icon: Zap, title: t('tournament', 'phase2Title'), desc: t('tournament', 'phase2Desc'), accent: 'from-amber-500/20 to-orange-500/20' },
        { icon: Trophy, title: t('tournament', 'phase3Title'), desc: t('tournament', 'phase3Desc'), accent: 'from-cyan-500/20 to-blue-500/20' },
        { icon: Star, title: t('tournament', 'phase4Title'), desc: t('tournament', 'phase4Desc'), accent: 'from-purple-500/20 to-pink-500/20' },
    ];

    /* ─── Operations cards ─── */
    const opsCards = [
        { icon: Shirt, title: t('tournament', 'opsMatchTitle'), items: [t('tournament', 'opsMatch1'), t('tournament', 'opsMatch2'), t('tournament', 'opsMatch3')] },
        { icon: Video, title: t('tournament', 'opsMediaTitle'), items: [t('tournament', 'opsMedia1'), t('tournament', 'opsMedia2'), t('tournament', 'opsMedia3')] },
        { icon: BarChart3, title: t('tournament', 'opsStatsTitle'), items: [t('tournament', 'opsStats1'), t('tournament', 'opsStats2'), t('tournament', 'opsStats3')] },
    ];

    /* ─── Prizes ─── */
    const prizes = [
        { emoji: '🥇', title: t('tournament', 'goldTitle'), items: [t('tournament', 'goldItem1'), t('tournament', 'goldItem2'), t('tournament', 'goldItem3'), t('tournament', 'goldItem4')], gold: true },
        { emoji: '🥈🥉', title: t('tournament', 'podiumTitle'), items: [t('tournament', 'podiumDesc')], gold: false },
        { emoji: '🏅', title: t('tournament', 'individualTitle'), items: [t('tournament', 'individualMvp'), t('tournament', 'individualScorer'), t('tournament', 'individualAssist'), t('tournament', 'individualKeeper')], gold: false },
    ];

    /* ─── Badges ─── */
    const badges = [
        { icon: Calendar, text: t('tournament', 'badgeDate') },
        { icon: Users, text: t('tournament', 'badgeTeams') },
        { icon: Shield, text: t('tournament', 'badgeGames') },
    ];

    return (
        <section id="tournament" className="py-24 sm:py-32 relative">
            <div className="absolute inset-0 bg-gradient-to-b from-darker via-spora/5 to-darker" />

            <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* ─── HERO ─── */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-14"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-spora/10 border border-spora/20 text-spora text-sm font-medium mb-5">
                        <Trophy size={14} />
                        {t('tournament', 'newSeason')}
                    </div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
                        {t('tournament', 'title')}
                        <br />
                        <span className="text-spora">{t('tournament', 'titleAccent')}</span>
                    </h2>
                    <p className="text-text-secondary text-base sm:text-lg max-w-2xl mx-auto mb-8">
                        {t('tournament', 'subtitle')}
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-3">
                        {badges.map((b, i) => (
                            <div key={i} className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-card border border-border text-sm text-white font-medium">
                                <b.icon size={14} className="text-spora" />
                                {b.text}
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* ─── FORMAT ─── */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="mb-14"
                >
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 text-center">{t('tournament', 'formatTitle')}</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {phases.map((p, i) => {
                            const Icon = p.icon;
                            return (
                                <div key={i} className="group rounded-2xl bg-card border border-border p-6 hover:border-spora/40 transition-all duration-300">
                                    <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${p.accent} flex items-center justify-center mb-4`}>
                                        <Icon size={22} className="text-white" />
                                    </div>
                                    <h4 className="font-bold text-white mb-1.5">{p.title}</h4>
                                    <p className="text-sm text-text-secondary leading-relaxed">{p.desc}</p>
                                </div>
                            );
                        })}
                    </div>
                </motion.div>

                {/* ─── SCHEDULE & LOGISTICS ─── */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.12 }}
                    className="mb-14"
                >
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 text-center">{t('tournament', 'scheduleTitle')}</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div className="rounded-2xl bg-card border border-border p-6">
                            <Timer size={24} className="text-spora mb-3" />
                            <p className="text-sm text-text-secondary leading-relaxed">{t('tournament', 'scheduleMatch')}</p>
                        </div>
                        <div className="rounded-2xl bg-card border border-border p-6">
                            <Shield size={24} className="text-spora mb-3" />
                            <p className="text-sm text-text-secondary leading-relaxed">{t('tournament', 'scheduleRule')}</p>
                        </div>
                        <div className="rounded-2xl bg-card border border-border p-6">
                            <Clock size={24} className="text-spora mb-3" />
                            <h4 className="font-bold text-white mb-2 text-sm">{t('tournament', 'scheduleShiftsTitle')}</h4>
                            <p className="text-sm text-text-secondary">{t('tournament', 'scheduleAfternoon')}</p>
                            <p className="text-sm text-text-secondary">{t('tournament', 'scheduleEvening')}</p>
                        </div>
                    </div>
                </motion.div>

                {/* ─── OPERATIONS ─── */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.15 }}
                    className="mb-14"
                >
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 text-center">{t('tournament', 'opsTitle')}</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        {opsCards.map((card, i) => {
                            const Icon = card.icon;
                            return (
                                <div key={i} className="rounded-2xl bg-card border border-border p-6">
                                    <Icon size={24} className="text-spora mb-3" />
                                    <h4 className="font-bold text-white mb-3">{card.title}</h4>
                                    <ul className="space-y-1.5">
                                        {card.items.map((item, j) => (
                                            <li key={j} className="flex items-start gap-2 text-sm text-text-secondary">
                                                <span className="text-spora mt-0.5 shrink-0">•</span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            );
                        })}
                    </div>
                </motion.div>

                {/* ─── FINANCES ─── */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mb-14"
                >
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 text-center">{t('tournament', 'financesTitle')}</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {/* Entrance Fee = ZERO */}
                        <div className="rounded-2xl bg-card border border-spora/30 p-6 relative overflow-hidden">
                            <div className="absolute top-0 right-0 px-3 py-1 bg-spora text-black text-[10px] font-bold uppercase tracking-wider rounded-bl-xl">FREE</div>
                            <p className="text-sm text-text-muted uppercase tracking-wider mb-2">{t('tournament', 'entranceFee')}</p>
                            <p className="text-4xl font-extrabold text-spora mb-1">{t('tournament', 'entranceFeeValue')}</p>
                            <p className="text-sm text-text-secondary">{t('tournament', 'entranceFeeDesc')}</p>
                        </div>
                        {/* Match Fee */}
                        <div className="rounded-2xl bg-card border border-border p-6 relative overflow-hidden">
                            <div className="absolute top-0 right-0 px-3 py-1 bg-gray-700 text-text-muted text-[10px] font-bold uppercase tracking-wider rounded-bl-xl">
                                /match
                            </div>
                            <p className="text-sm text-text-muted uppercase tracking-wider mb-2">{t('tournament', 'matchFeeLabel')}</p>
                            <p className="text-4xl font-extrabold text-white mb-1">{t('tournament', 'matchFeeValue')} <span className="text-lg font-medium text-text-muted">HUF</span></p>
                            <p className="text-sm text-text-secondary">{t('tournament', 'matchFeeDesc')}</p>
                            <div className="mt-3 px-3 py-2 rounded-lg bg-spora/10 border border-spora/20">
                                <p className="text-xs text-spora font-medium text-center">{t('tournament', 'matchFeeNote')}</p>
                            </div>
                            <p className="text-[11px] text-text-muted mt-2 text-center italic">{t('tournament', 'matchFeeGroupNote')}</p>
                        </div>
                    </div>
                </motion.div>

                {/* ─── PRIZES ─── */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.25 }}
                    className="mb-14"
                >
                    <div className="text-center mb-6">
                        <h3 className="text-xl sm:text-2xl font-bold text-white">{t('tournament', 'prizeTitle')}</h3>
                        <p className="text-sm text-text-muted mt-1">{t('tournament', 'prizeSubtitle')}</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        {prizes.map((p, i) => (
                            <div key={i} className={`rounded-2xl p-5 border ${p.gold ? 'bg-spora/10 border-spora/30' : 'bg-card border-border'}`}>
                                <div className="flex items-center gap-2 mb-3">
                                    <span className="text-xl">{p.emoji}</span>
                                    <h4 className="font-bold text-white text-sm">{p.title}</h4>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {p.items.map((item, j) => (
                                        <span key={j} className={`inline-block px-2.5 py-1 rounded-lg text-xs font-medium ${p.gold ? 'bg-spora/20 text-spora' : 'bg-gray-800 text-text-secondary'}`}>
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* ─── REGISTRATION FORM ─── */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="rounded-2xl bg-card border border-border p-6 sm:p-8"
                >
                    <div className="text-center mb-8">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-spora/10 border border-spora/20 text-spora text-xs font-bold uppercase tracking-wider mb-3">
                            <Star size={12} />
                            {t('tournament', 'regOpen')}
                        </div>
                        <h3 className="text-xl sm:text-2xl font-bold text-white">{t('tournament', 'regTitle')}</h3>
                    </div>

                    <form
                        action="https://formsubmit.co/Aalsayed212@gmail.com"
                        method="POST"
                        className="space-y-5"
                    >
                        <input type="hidden" name="_captcha" value="false" />
                        <input type="hidden" name="_subject" value="🚨 NEW SPRING BLITZ TEAM REGISTRATION!" />

                        {/* Team Name */}
                        <div>
                            <label htmlFor="Team_Name" className="block text-sm font-medium text-text-secondary mb-1.5">
                                {t('tournament', 'teamNameLabel')}
                            </label>
                            <input type="text" id="Team_Name" name="Team_Name" required placeholder={t('tournament', 'teamNamePlaceholder')} className={INPUT_CLASS} />
                        </div>

                        {/* Captain First + Last */}
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="Captain_First_Name" className="block text-sm font-medium text-text-secondary mb-1.5">
                                    {t('tournament', 'captainFirstLabel')}
                                </label>
                                <input type="text" id="Captain_First_Name" name="Captain_First_Name" required placeholder={t('tournament', 'captainFirstPlaceholder')} className={INPUT_CLASS} />
                            </div>
                            <div>
                                <label htmlFor="Captain_Last_Name" className="block text-sm font-medium text-text-secondary mb-1.5">
                                    {t('tournament', 'captainLastLabel')}
                                </label>
                                <input type="text" id="Captain_Last_Name" name="Captain_Last_Name" required placeholder={t('tournament', 'captainLastPlaceholder')} className={INPUT_CLASS} />
                            </div>
                        </div>

                        {/* WhatsApp */}
                        <div>
                            <label htmlFor="WhatsApp_Number" className="block text-sm font-medium text-text-secondary mb-1.5">
                                {t('tournament', 'whatsappLabel')}
                            </label>
                            <input type="tel" id="WhatsApp_Number" name="WhatsApp_Number" required placeholder={t('tournament', 'whatsappPlaceholder')} className={INPUT_CLASS} />
                        </div>

                        <div>
                            <h4 className="text-sm font-semibold text-white mb-1">{t('tournament', 'squadTitle')}</h4>
                            <p className="text-xs text-text-muted mb-1">{t('tournament', 'squadNote')}</p>
                            <p className="text-xs text-amber-400/80 italic mb-4">{t('tournament', 'squadMatchdayNote')}</p>
                            <div className="space-y-3">
                                {/* Players 2–6 (required) */}
                                {Array.from({ length: 5 }, (_, i) => i + 2).map((n) => (
                                    <div key={n} className="flex items-center gap-3">
                                        <span className="text-xs text-text-muted font-medium w-6 shrink-0 text-right tabular-nums">{n}.</span>
                                        <div className="grid grid-cols-2 gap-2 flex-1">
                                            <input type="text" name={`Player_${n}_First_Name`} required placeholder={`P${n} ${t('tournament', 'playerFirstPlaceholder')}`} className={INPUT_CLASS} />
                                            <input type="text" name={`Player_${n}_Last_Name`} required placeholder={`P${n} ${t('tournament', 'playerLastPlaceholder')}`} className={INPUT_CLASS} />
                                        </div>
                                    </div>
                                ))}
                                {/* Players 7–12 (optional) */}
                                {Array.from({ length: 6 }, (_, i) => i + 7).map((n) => (
                                    <div key={n} className="flex items-center gap-3">
                                        <span className="text-xs text-text-muted font-medium w-6 shrink-0 text-right tabular-nums">{n}.</span>
                                        <div className="grid grid-cols-2 gap-2 flex-1">
                                            <input type="text" name={`Player_${n}_First_Name`} placeholder={`P${n} ${t('tournament', 'playerFirstOptional')}`} className={INPUT_CLASS} />
                                            <input type="text" name={`Player_${n}_Last_Name`} placeholder={`P${n} ${t('tournament', 'playerLastOptional')}`} className={INPUT_CLASS} />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Submit */}
                        <button
                            type="submit"
                            className="group w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-spora text-black font-bold text-lg hover:bg-spora-dark hover:shadow-lg hover:shadow-spora/25 transition-all duration-300 cursor-pointer"
                        >
                            {t('tournament', 'submitButton')}
                            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
}
