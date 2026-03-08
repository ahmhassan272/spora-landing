'use client';

import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Users, Trophy, Swords, Target, CheckCircle } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

/* ─── EDITABLE DATA: Update these arrays as the tournament progresses ─── */

const GROUP_A = [
    { team: 'Ay Caramba', p: 2, w: 1, d: 1, l: 0, gd: 7, pts: 4, qualified: true },
    { team: 'Ashawo FC', p: 2, w: 1, d: 1, l: 0, gd: 4, pts: 4, qualified: true },
    { team: 'El Madfa3geya', p: 2, w: 0, d: 0, l: 2, gd: -11, pts: 0, qualified: false },
];

const GROUP_B = [
    { team: 'Warriors FC', p: 2, w: 1, d: 1, l: 0, gd: 7, pts: 4, qualified: true },
    { team: 'Wolves', p: 2, w: 1, d: 1, l: 0, gd: 1, pts: 4, qualified: true },
    { team: 'Chabibet 3omrane', p: 2, w: 0, d: 0, l: 2, gd: -8, pts: 0, qualified: false },
];

const DAY1_RESULTS = [
    { home: 'Ay Caramba', away: 'El Madfa3geya', scoreH: 7, scoreA: 0 },
    { home: 'El Madfa3geya', away: 'Ashawo FC', scoreH: 0, scoreA: 4 },
    { home: 'Ashawo FC', away: 'Ay Caramba', scoreH: 4, scoreA: 4 },
    { home: 'Warriors FC', away: 'Wolves', scoreH: 2, scoreA: 2 },
    { home: 'Wolves', away: 'Chabibet 3omrane', scoreH: 3, scoreA: 2 },
    { home: 'Warriors FC', away: 'Chabibet 3omrane', scoreH: 7, scoreA: 0 },
];

const FINALS_SCHEDULE = [
    { time: '20:30', label: 'SEMI-FINAL 1', home: 'Ay Caramba', away: 'Wolves' },
    { time: '20:55', label: 'SEMI-FINAL 2', home: 'Warriors FC', away: 'Ashawo FC' },
    { time: '21:30', label: 'GRAND FINAL', home: 'Winner SF 1', away: 'Winner SF 2' },
];

const TOP_SCORERS = [
    { name: 'Dani Ltaif', team: 'Warriors FC', goals: 12 },
    { name: 'Usman Ali-Concern', team: 'Ashawo FC', goals: 11 },
    { name: 'Adham Abushebeka', team: 'Ay Caramba', goals: 10 },
    { name: 'Ahmed Nehasa', team: 'Ay Caramba', goals: 7 },
    { name: 'Tammem Hamda', team: 'Saraya Al-Quds', goals: 5 },
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
                            <tr
                                key={i}
                                className={`border-t border-gray-700/60 hover:bg-gray-700/30 transition-colors ${row.qualified ? 'border-l-2 border-l-spora' : ''}`}
                            >
                                <td className="py-3 px-3 font-medium text-white whitespace-nowrap">
                                    <span className="flex items-center gap-2">
                                        {row.team}
                                        {row.qualified && (
                                            <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-full bg-spora/15 text-spora text-[10px] font-bold uppercase tracking-wider">
                                                <CheckCircle size={10} />
                                                Q
                                            </span>
                                        )}
                                    </span>
                                </td>
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

function ResultCard({ home, away, scoreH, scoreA }: { home: string; away: string; scoreH: number; scoreA: number }) {
    return (
        <div className="flex items-center justify-between gap-2 p-3 rounded-xl bg-gray-800/60 border border-gray-700/60">
            <span className="text-xs sm:text-sm text-text-secondary font-medium text-right flex-1 truncate">{home}</span>
            <div className="flex items-center gap-1.5 shrink-0 px-2">
                <span className={`text-base font-bold tabular-nums ${scoreH > scoreA ? 'text-spora' : scoreH === scoreA ? 'text-amber-400' : 'text-text-muted'}`}>{scoreH}</span>
                <span className="text-xs text-text-muted">–</span>
                <span className={`text-base font-bold tabular-nums ${scoreA > scoreH ? 'text-spora' : scoreA === scoreH ? 'text-amber-400' : 'text-text-muted'}`}>{scoreA}</span>
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

                {/* ── FINALS DAY SCHEDULE ── */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.22 }}
                    className="mb-10"
                >
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-1 flex items-center gap-2">
                        <Trophy size={20} className="text-spora" />
                        Finals Day — Sunday 8/3
                    </h3>
                    <p className="text-xs text-text-muted mb-4">📍 BeStrong Pallag</p>
                    <div className="space-y-3">
                        {FINALS_SCHEDULE.map((match, i) => (
                            <div
                                key={i}
                                className={`flex items-center gap-3 p-4 rounded-xl border transition-colors ${match.label === 'GRAND FINAL'
                                        ? 'bg-spora/10 border-spora/30'
                                        : 'bg-gray-800/60 border-gray-700/60'
                                    }`}
                            >
                                <div className="shrink-0 w-14 text-center">
                                    <span className="text-sm font-bold text-spora tabular-nums">{match.time}</span>
                                </div>
                                <div className="shrink-0">
                                    <span className={`inline-block px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${match.label === 'GRAND FINAL'
                                            ? 'bg-spora/20 text-spora'
                                            : 'bg-gray-700 text-text-muted'
                                        }`}>
                                        {match.label}
                                    </span>
                                </div>
                                <div className="flex-1 flex items-center justify-center gap-2 text-sm">
                                    <span className="text-text-secondary font-medium text-right flex-1 truncate">{match.home}</span>
                                    <span className="text-xs text-text-muted">vs</span>
                                    <span className="text-text-secondary font-medium text-left flex-1 truncate">{match.away}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* ── DAY 1 RESULTS ── */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.25 }}
                    className="mb-10"
                >
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-3">Day 1 Results</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {DAY1_RESULTS.map((r, i) => (
                            <ResultCard key={i} {...r} />
                        ))}
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
                                className={`flex items-center gap-4 px-4 sm:px-5 py-3.5 ${i > 0 ? 'border-t border-gray-700/60' : ''} ${i < 3 ? 'bg-spora/5' : 'bg-gray-800/40'} hover:bg-gray-700/30 transition-colors`}
                            >
                                <span className={`text-lg font-bold tabular-nums w-7 text-center ${i < 3 ? 'text-spora' : 'text-text-muted'}`}>
                                    {i + 1}
                                </span>
                                <div className="flex-1 min-w-0">
                                    <p className="text-sm font-medium text-white truncate">{scorer.name}</p>
                                    <p className="text-xs text-text-muted truncate">{scorer.team}</p>
                                </div>
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
