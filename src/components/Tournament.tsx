'use client';

import { motion } from 'framer-motion';
import { Trophy, Calendar, Users, Video, BarChart3, Shield, Zap, Star, ArrowRight, Award, Target, Shirt } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const INPUT_CLASS = "w-full px-4 py-3 rounded-xl bg-[#0d0d1a] border border-[#2a2a3a] text-white placeholder:text-[#555] text-sm focus:outline-none focus:border-spora focus:ring-1 focus:ring-spora transition-colors";

/* ─── FORMAT DATA ─── */

const FORMAT_CARDS = [
    {
        icon: Shield,
        title: '6-Game Guarantee',
        desc: 'Every team plays exactly 6 matches. 48 matches total across 4 weeks.',
        accent: 'from-emerald-500/20 to-teal-500/20',
    },
    {
        icon: Users,
        title: 'Weeks 1 & 2 — Group Stage',
        desc: '4 groups of 4 teams. Round-robin format. Every match matters.',
        accent: 'from-cyan-500/20 to-blue-500/20',
    },
    {
        icon: Zap,
        title: 'The Split',
        desc: 'Top 2 advance to the Gold Cup. Bottom 2 drop to the Silver Cup.',
        accent: 'from-amber-500/20 to-orange-500/20',
    },
    {
        icon: Trophy,
        title: 'Weeks 3 & 4 — Knockouts',
        desc: 'Knockouts & placements for a true 1st–16th global ranking.',
        accent: 'from-purple-500/20 to-pink-500/20',
    },
];

const PRIZES = [
    { emoji: '🥇', title: 'Gold Champions', items: ['Trophy', 'FREE next entry', 'Be Strong trial', 'VIP Team Dinner at Mélange'] },
    { emoji: '🥈🥉', title: 'Podium (2nd & 3rd)', items: ['Massive sponsor vouchers'] },
    { emoji: '🏆', title: 'Silver Champions (9th Overall)', items: ['Trophy & exclusive lower-bracket rewards'] },
    { emoji: '🏅', title: 'Individual Honors', items: ['MVP', 'Top Scorer', 'Top Assister', 'Best Keeper'] },
];

/* ─── MAIN COMPONENT ─── */

export default function Tournament() {
    const { t } = useLanguage();

    return (
        <section id="tournament" className="py-24 sm:py-32 relative">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-darker via-spora/5 to-darker" />

            <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* ─── HERO HEADER ─── */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-14"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-spora/10 border border-spora/20 text-spora text-sm font-medium mb-5">
                        <Trophy size={14} />
                        NEW SEASON
                    </div>

                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
                        🏆 Spora Super Cup
                        <br />
                        <span className="text-spora">Spring Blitz</span>
                    </h2>

                    <p className="text-text-secondary text-base sm:text-lg max-w-2xl mx-auto mb-8">
                        Debrecen&apos;s Ultimate 4-Week 6v6 League. 4K AI Cameras. 250,000 HUF Prize Pool.
                    </p>

                    {/* Badges */}
                    <div className="flex flex-wrap items-center justify-center gap-3">
                        {[
                            { icon: Calendar, text: 'Starts March 28th' },
                            { icon: Users, text: 'Strictly 16 Teams' },
                            { icon: Shield, text: '6-Game Guarantee' },
                        ].map((badge, i) => (
                            <div
                                key={i}
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-card border border-border text-sm text-white font-medium"
                            >
                                <badge.icon size={14} className="text-spora" />
                                {badge.text}
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* ─── THE FORMAT ─── */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="mb-14"
                >
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 text-center">The Format</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {FORMAT_CARDS.map((card, i) => {
                            const Icon = card.icon;
                            return (
                                <div
                                    key={i}
                                    className="group rounded-2xl bg-card border border-border p-6 hover:border-spora/40 transition-all duration-300"
                                >
                                    <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${card.accent} flex items-center justify-center mb-4`}>
                                        <Icon size={22} className="text-white" />
                                    </div>
                                    <h4 className="font-bold text-white mb-1.5">{card.title}</h4>
                                    <p className="text-sm text-text-secondary leading-relaxed">{card.desc}</p>
                                </div>
                            );
                        })}
                    </div>
                </motion.div>

                {/* ─── PRO OPERATIONS & MEDIA ─── */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.15 }}
                    className="mb-14"
                >
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 text-center">Pro Operations &amp; Media</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        {[
                            {
                                icon: Shirt,
                                title: 'Match Day',
                                items: ['40-min matches', 'Pro referees', 'Hydration provided'],
                            },
                            {
                                icon: Video,
                                title: '4K AI Recording',
                                items: ['XbotGo Falcon camera', 'Pro scouting footage', '"Moment of the Week" votes'],
                            },
                            {
                                icon: BarChart3,
                                title: 'Deep Stats',
                                items: ['Goals & Assists', 'Clean Sheets', 'MVP Awards'],
                            },
                        ].map((card, i) => {
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

                {/* ─── THE FINANCES ─── */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mb-14"
                >
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 text-center">The Finances</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {/* Registration */}
                        <div className="rounded-2xl bg-card border border-spora/30 p-6 relative overflow-hidden">
                            <div className="absolute top-0 right-0 px-3 py-1 bg-spora text-black text-[10px] font-bold uppercase tracking-wider rounded-bl-xl">
                                One-Time
                            </div>
                            <p className="text-sm text-text-muted uppercase tracking-wider mb-2">Registration</p>
                            <p className="text-4xl font-extrabold text-white mb-1">14,000 <span className="text-lg font-medium text-text-muted">HUF</span></p>
                            <p className="text-sm text-text-secondary">One-time fee to secure your spot</p>
                        </div>

                        {/* Matchday */}
                        <div className="rounded-2xl bg-card border border-border p-6 relative overflow-hidden">
                            <div className="absolute top-0 right-0 px-3 py-1 bg-gray-700 text-text-muted text-[10px] font-bold uppercase tracking-wider rounded-bl-xl">
                                Weekly
                            </div>
                            <p className="text-sm text-text-muted uppercase tracking-wider mb-2">Matchday Fee</p>
                            <p className="text-4xl font-extrabold text-white mb-1">12,000 <span className="text-lg font-medium text-text-muted">HUF</span></p>
                            <p className="text-sm text-text-secondary">Per team, per week</p>
                            <div className="mt-3 px-3 py-2 rounded-lg bg-spora/10 border border-spora/20">
                                <p className="text-xs text-spora font-medium text-center">
                                    💡 For a 10-man squad, that&apos;s just <strong>1,200 HUF</strong> per player/week
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* ─── 250,000 HUF PRIZE POOL ─── */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.25 }}
                    className="mb-14"
                >
                    <div className="text-center mb-6">
                        <h3 className="text-xl sm:text-2xl font-bold text-white">250,000 HUF Prize Pool</h3>
                        <p className="text-sm text-text-muted mt-1">Rewards at every level</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {PRIZES.map((p, i) => (
                            <div
                                key={i}
                                className={`rounded-2xl p-5 border ${i === 0 ? 'bg-spora/10 border-spora/30' : 'bg-card border-border'}`}
                            >
                                <div className="flex items-center gap-2 mb-3">
                                    <span className="text-xl">{p.emoji}</span>
                                    <h4 className="font-bold text-white text-sm">{p.title}</h4>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {p.items.map((item, j) => (
                                        <span
                                            key={j}
                                            className={`inline-block px-2.5 py-1 rounded-lg text-xs font-medium ${i === 0 ? 'bg-spora/20 text-spora' : 'bg-gray-800 text-text-secondary'}`}
                                        >
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
                            Registration Open
                        </div>
                        <h3 className="text-xl sm:text-2xl font-bold text-white">Register Your Squad</h3>
                    </div>

                    <form
                        action="https://formsubmit.co/Aalsayed212@gmail.com"
                        method="POST"
                        className="space-y-5"
                    >
                        {/* Hidden inputs */}
                        <input type="hidden" name="_captcha" value="false" />
                        <input type="hidden" name="_subject" value="🚨 NEW SPRING BLITZ TEAM REGISTRATION!" />

                        {/* Team Name */}
                        <div>
                            <label htmlFor="Team_Name" className="block text-sm font-medium text-text-secondary mb-1.5">
                                Team Name
                            </label>
                            <input
                                type="text"
                                id="Team_Name"
                                name="Team_Name"
                                required
                                placeholder="e.g. FC Thunder"
                                className={INPUT_CLASS}
                            />
                        </div>

                        {/* Captain Name — two columns */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="Captain_First_Name" className="block text-sm font-medium text-text-secondary mb-1.5">
                                    Captain&apos;s First Name
                                </label>
                                <input
                                    type="text"
                                    id="Captain_First_Name"
                                    name="Captain_First_Name"
                                    required
                                    placeholder="Ahmed"
                                    className={INPUT_CLASS}
                                />
                            </div>
                            <div>
                                <label htmlFor="Captain_Last_Name" className="block text-sm font-medium text-text-secondary mb-1.5">
                                    Captain&apos;s Last Name
                                </label>
                                <input
                                    type="text"
                                    id="Captain_Last_Name"
                                    name="Captain_Last_Name"
                                    required
                                    placeholder="Hassan"
                                    className={INPUT_CLASS}
                                />
                            </div>
                        </div>

                        {/* WhatsApp */}
                        <div>
                            <label htmlFor="WhatsApp_Number" className="block text-sm font-medium text-text-secondary mb-1.5">
                                Captain&apos;s WhatsApp Number
                            </label>
                            <input
                                type="tel"
                                id="WhatsApp_Number"
                                name="WhatsApp_Number"
                                required
                                placeholder="+36 70 123 4567"
                                className={INPUT_CLASS}
                            />
                        </div>

                        {/* Squad Registration */}
                        <div>
                            <h4 className="text-sm font-semibold text-white mb-1">Squad Registration (10 Required, 2 Optional)</h4>
                            <p className="text-xs text-text-muted mb-4">Captain = Player 1 (captured above). Enter First &amp; Last Name for each player.</p>
                            <div className="space-y-3">
                                {/* Players 2–10 (required) */}
                                {Array.from({ length: 9 }, (_, i) => i + 2).map((n) => (
                                    <div key={n} className="flex items-center gap-3">
                                        <span className="text-xs text-text-muted font-medium w-6 shrink-0 text-right tabular-nums">{n}.</span>
                                        <div className="grid grid-cols-2 gap-2 flex-1">
                                            <input
                                                type="text"
                                                name={`Player_${n}_First_Name`}
                                                required
                                                placeholder={`Player ${n} First Name`}
                                                className={INPUT_CLASS}
                                            />
                                            <input
                                                type="text"
                                                name={`Player_${n}_Last_Name`}
                                                required
                                                placeholder={`Player ${n} Last Name`}
                                                className={INPUT_CLASS}
                                            />
                                        </div>
                                    </div>
                                ))}
                                {/* Players 11–12 (optional) */}
                                {[11, 12].map((n) => (
                                    <div key={n} className="flex items-center gap-3">
                                        <span className="text-xs text-text-muted font-medium w-6 shrink-0 text-right tabular-nums">{n}.</span>
                                        <div className="grid grid-cols-2 gap-2 flex-1">
                                            <input
                                                type="text"
                                                name={`Player_${n}_First_Name`}
                                                placeholder={`Player ${n} First Name (Optional)`}
                                                className={INPUT_CLASS}
                                            />
                                            <input
                                                type="text"
                                                name={`Player_${n}_Last_Name`}
                                                placeholder={`Player ${n} Last Name (Optional)`}
                                                className={INPUT_CLASS}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="group w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-spora text-black font-bold text-lg hover:bg-spora-dark hover:shadow-lg hover:shadow-spora/25 transition-all duration-300 cursor-pointer"
                        >
                            Lock In Our Squad (14,000 HUF Deposit)
                            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
}
