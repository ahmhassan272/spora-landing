'use client';

import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Users, Trophy, Swords, Target } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

/* ─── EDITABLE DATA: Update these arrays as the tournament progresses ─── */

const GROUP_A = [
    { team: 'Ay Caramba', p: 0, w: 0, d: 0, l: 0, gd: 0, pts: 0 },
    { team: 'El Madfa3geya', p: 0, w: 0, d: 0, l: 0, gd: 0, pts: 0 },
    { team: 'Ashawo FC', p: 0, w: 0, d: 0, l: 0, gd: 0, pts: 0 },
];

const GROUP_B = [
    { team: 'Warriors FC', p: 0, w: 0, d: 0, l: 0, gd: 0, pts: 0 },
    { team: 'Wolves', p: 0, w: 0, d: 0, l: 0, gd: 0, pts: 0 },
    { team: 'Chabibet 3omrane', p: 0, w: 0, d: 0, l: 0, gd: 0, pts: 0 },
];

const FIXTURES_A = [
    { round: 1, time: '20:30 – 21:00', home: 'Ay Caramba', away: 'El Madfa3geya' },
    { round: 2, time: '21:05 – 21:35', home: 'El Madfa3geya', away: 'Ashawo FC' },
    { round: 3, time: '21:40 – 22:10', home: 'Ashawo FC', away: 'Ay Caramba' },
];

const FIXTURES_B = [
    { round: 1, time: '20:30 – 21:00', home: 'Warriors FC', away: 'Wolves' },
    { round: 2, time: '21:05 – 21:35', home: 'Wolves', away: 'Chabibet 3omrane' },
    { round: 3, time: '21:40 – 22:10', home: 'Warriors FC', away: 'Chabibet 3omrane' },
];

const TOP_SCORERS = [
    { name: 'Dani Ltaif', team: 'Warriors FC', goals: 8 },
    { name: 'Usman Ali-Concern', team: 'Ashawo FC', goals: 8 },
    { name: 'Tammem Hamda', team: 'Saraya Al-Quds', goals: 5 },
    { name: 'Adham Aboushebeka', team: 'Ay Caramba', goals: 4 },
    { name: 'Ahmed Nehasa', team: 'Ay Caramba', goals: 4 },
];

/* ─── COMPONENTS ─── */

const TABLE_COLS = ['Team', 'P', 'W', 'D', 'L', 'GD', 'Pts'];

function StandingsTable({ title, teams }: { title: string; teams: typeof GROUP_A }) {
    return (
        <div>
            <h3 className="text-lg sm:text-xl font-bold text-white mb-3">{title}</h3>
            <div className="overflow-x-auto rounded-xl border border-gray-700">
                <table className="w-full text-sm">
                    <thead>
                        <tr className="bg-spora/20 text-spora">
                            {TABLE_COLS.map((col) => (
                                <th
                                    key={col}
                                    className={`py-3 px-3 font-semibold uppercase tracking-wider text-xs ${col === 'Team' ? 'text-left' : 'text-center'}`}
                                >
                                    {col}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className="bg-gray-800/60">
                        {teams.map((row, i) => (
                            <tr key={i} className="border-t border-gray-700/60 hover:bg-gray-700/30 transition-colors">
                                <td className="py-3 px-3 font-medium text-white whitespace-nowrap">{row.team}</td>
                                <td className="py-3 px-3 text-center text-text-secondary tabular-nums">{row.p}</td>
                                <td className="py-3 px-3 text-center text-text-secondary tabular-nums">{row.w}</td>
                                <td className="py-3 px-3 text-center text-text-secondary tabular-nums">{row.d}</td>
                                <td className="py-3 px-3 text-center text-text-secondary tabular-nums">{row.l}</td>
                                <td className="py-3 px-3 text-center text-text-secondary tabular-nums">{row.gd >= 0 ? `+${row.gd}` : row.gd}</td>
                                <td className="py-3 px-3 text-center font-bold text-spora tabular-nums">{row.pts}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

function FixtureCard({ round, time, home, away }: { round: number; time: string; home: string; away: string }) {
    return (
        <div className="flex items-center justify-between gap-3 p-3 sm:p-4 rounded-xl bg-gray-800/60 border border-gray-700/60">
            <span className="text-xs text-text-muted uppercase shrink-0 w-10">R{round}</span>
            <span className="text-xs sm:text-sm text-text-secondary font-medium text-right flex-1 truncate">{home}</span>
            <div className="flex flex-col items-center shrink-0 px-2">
                <span className="text-[10px] text-text-muted uppercase tracking-wider">vs</span>
                <span className="text-xs text-spora font-medium">{time}</span>
            </div>
            <span className="text-xs sm:text-sm text-text-secondary font-medium text-left flex-1 truncate">{away}</span>
        </div>
    );
}

/* ─── MAIN COMPONENT ─── */

export default function Tournament() {
    const { t } = useLanguage();

    const details = [
        { icon: Calendar, label: t('tournament', 'dates') },
        { icon: Clock, label: t('tournament', 'time') },
        { icon: MapPin, label: t('tournament', 'location') },
        { icon: Swords, label: t('tournament', 'format') },
        { icon: Users, label: t('tournament', 'teams') },
        { icon: Clock, label: t('tournament', 'matchDuration') },
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
                    className="text-center mb-10"
                >
                    {/* LIVE Badge */}
                    <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-spora/10 border border-spora/30 text-sm font-bold mb-5">
                        <span className="relative flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-spora opacity-75" />
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-spora" />
                        </span>
                        <span className="text-spora">🔴 TOURNAMENT LIVE</span>
                    </div>

                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                        {t('tournament', 'title')}
                    </h2>
                    <p className="text-text-secondary text-lg max-w-xl mx-auto">
                        {t('tournament', 'subtitle')}
                    </p>
                </motion.div>

                {/* Tournament Info Card */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.15 }}
                    className="rounded-2xl bg-card border border-border overflow-hidden mb-10"
                >
                    {/* Details Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-px bg-border">
                        {details.map((detail, i) => {
                            const Icon = detail.icon;
                            return (
                                <div key={i} className="bg-card p-5 sm:p-6 flex items-center gap-3">
                                    <Icon size={20} className="text-spora shrink-0" />
                                    <span className="text-sm text-text-secondary">{detail.label}</span>
                                </div>
                            );
                        })}
                    </div>

                    {/* Entry Fee & Prizes */}
                    <div className="p-6 sm:p-8 border-t border-border">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="rounded-xl bg-darker p-5 border border-border">
                                <h4 className="text-sm text-text-muted uppercase tracking-wider mb-2">{t('tournament', 'entryFeeLabel')}</h4>
                                <p className="text-2xl font-bold text-white">{t('tournament', 'entryFee')}</p>
                                <p className="text-sm text-text-muted mt-1">{t('tournament', 'paidBy')}</p>
                            </div>
                            <div className="rounded-xl bg-darker p-5 border border-border">
                                <h4 className="text-sm text-text-muted uppercase tracking-wider mb-2">{t('tournament', 'prizesTitle')}</h4>
                                <p className="text-sm text-white leading-relaxed">
                                    {t('tournament', 'champion').replace('The Farm Debrecen', '')}
                                    <a href="https://www.thefarmdebrecen.hu/" target="_blank" rel="noopener noreferrer" className="text-spora hover:underline">The Farm Debrecen</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* ── GROUP STANDINGS ── */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10"
                >
                    <StandingsTable title="Group A" teams={GROUP_A} />
                    <StandingsTable title="Group B" teams={GROUP_B} />
                </motion.div>

                {/* ── FIXTURES ── */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.25 }}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10"
                >
                    {/* Group A Fixtures */}
                    <div>
                        <h3 className="text-lg sm:text-xl font-bold text-white mb-1">Group A Fixtures</h3>
                        <p className="text-xs text-text-muted mb-3">📍 BeStrong Pallag · Pitch 1</p>
                        <div className="space-y-2">
                            {FIXTURES_A.map((f) => (
                                <FixtureCard key={f.round} {...f} />
                            ))}
                        </div>
                    </div>

                    {/* Group B Fixtures */}
                    <div>
                        <h3 className="text-lg sm:text-xl font-bold text-white mb-1">Group B Fixtures</h3>
                        <p className="text-xs text-text-muted mb-3">📍 BeStrong Pallag · Pitch 2</p>
                        <div className="space-y-2">
                            {FIXTURES_B.map((f) => (
                                <FixtureCard key={f.round} {...f} />
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* ── TOP SCORERS ── */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-4 flex items-center gap-2">
                        <Target size={20} className="text-spora" />
                        Top Scorers
                    </h3>
                    <div className="rounded-xl border border-gray-700 overflow-hidden">
                        {TOP_SCORERS.map((scorer, i) => (
                            <div
                                key={i}
                                className={`flex items-center gap-4 px-4 sm:px-5 py-3.5 ${i > 0 ? 'border-t border-gray-700/60' : ''} ${i < 2 ? 'bg-spora/5' : 'bg-gray-800/40'} hover:bg-gray-700/30 transition-colors`}
                            >
                                {/* Rank */}
                                <span className={`text-lg font-bold tabular-nums w-7 text-center ${i < 2 ? 'text-spora' : 'text-text-muted'}`}>
                                    {i + 1}
                                </span>

                                {/* Player Info */}
                                <div className="flex-1 min-w-0">
                                    <p className="text-sm font-medium text-white truncate">{scorer.name}</p>
                                    <p className="text-xs text-text-muted truncate">{scorer.team}</p>
                                </div>

                                {/* Goals */}
                                <div className="flex items-center gap-1.5 shrink-0">
                                    <span className="text-xl font-bold text-spora tabular-nums">{scorer.goals}</span>
                                    <span className="text-xs text-text-muted">⚽</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
