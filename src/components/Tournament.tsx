'use client';

import { motion } from 'framer-motion';
import { Trophy, Calendar, Users, Shield, Star, MapPin, Clock } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

/* ─── GROUP STANDINGS DATA ─── */

const GROUP_A = [
    { team: 'Mangoes', p: 3, w: 2, d: 1, l: 0, gd: 14, pts: 7, cup: 'gold' },
    { team: 'Haram Ball', p: 3, w: 2, d: 0, l: 1, gd: -1, pts: 6, cup: 'gold' },
    { team: 'Bonita Banana SC', p: 3, w: 1, d: 0, l: 2, gd: -10, pts: 3, cup: 'silver' },
    { team: 'Palestina', p: 3, w: 0, d: 1, l: 2, gd: -3, pts: 1, cup: 'silver' },
];

const GROUP_B = [
    { team: 'Ashawo FC', p: 3, w: 2, d: 1, l: 0, gd: 4, pts: 7, cup: 'gold' },
    { team: 'Ballers United', p: 3, w: 2, d: 0, l: 1, gd: 2, pts: 6, cup: 'gold' },
    { team: 'Ay Caramba', p: 3, w: 1, d: 0, l: 2, gd: 2, pts: 3, cup: 'silver' },
    { team: 'HIK FC', p: 3, w: 0, d: 1, l: 2, gd: -8, pts: 1, cup: 'silver' },
];

/* ─── FIXTURES DATA ─── */

const SATURDAY_FIXTURES = [
    { time: '18:00 – 18:40', label: 'SEMI-FINAL 1', home: 'Bonita Banana SC', away: 'HIK FC' },
    { time: '18:50 – 19:30', label: 'SEMI-FINAL 2', home: 'Ay Caramba', away: 'Palestina' },
    { time: '19:40 – 20:20', label: '3RD PLACE', home: 'Loser SF1', away: 'Loser SF2' },
    { time: '20:30 – 21:10', label: 'THE SILVER FINAL', home: 'Winner SF1', away: 'Winner SF2' },
];

const SUNDAY_FIXTURES = [
    { time: '18:30 – 19:10', label: 'SEMI-FINAL 1', home: 'Mangoes', away: 'Ballers United' },
    { time: '19:20 – 20:00', label: 'SEMI-FINAL 2', home: 'Ashawo FC', away: 'Haram Ball' },
    { time: '20:10 – 20:50', label: '3RD PLACE', home: 'Loser SF1', away: 'Loser SF2' },
    { time: '21:00 – 21:40', label: 'THE GOLD FINAL', home: 'Winner SF1', away: 'Winner SF2' },
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
                                <th key={col} className={`py-3 px-3 font-semibold uppercase tracking-wider text-xs ${col === 'Team' ? 'text-left' : 'text-center'}`}>
                                    {col}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className="bg-gray-800/60">
                        {teams.map((row, i) => (
                            <tr
                                key={i}
                                className={`border-t transition-colors hover:bg-gray-700/30 ${
                                    row.cup === 'gold'
                                        ? 'border-l-2 border-l-amber-400 border-t-gray-700/60'
                                        : 'border-l-2 border-l-gray-400 border-t-gray-700/60'
                                }`}
                            >
                                <td className="py-3 px-3 font-medium text-white whitespace-nowrap">
                                    <span className="flex items-center gap-2">
                                        {row.team}
                                        <span className={`inline-flex items-center gap-1 px-1.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                                            row.cup === 'gold'
                                                ? 'bg-amber-400/15 text-amber-400'
                                                : 'bg-gray-500/15 text-gray-400'
                                        }`}>
                                            {row.cup === 'gold' ? '🥇 Gold' : '🥈 Silver'}
                                        </span>
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

function FixtureCard({ time, label, home, away, isFinal }: { time: string; label: string; home: string; away: string; isFinal: boolean }) {
    return (
        <div className={`flex items-center gap-3 p-4 rounded-xl border transition-colors ${
            isFinal ? 'bg-spora/10 border-spora/30' : 'bg-gray-800/60 border-gray-700/60'
        }`}>
            <div className="shrink-0 w-[6.5rem] text-center">
                <span className="text-xs font-bold text-spora tabular-nums">{time}</span>
            </div>
            <div className="shrink-0">
                <span className={`inline-block px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${
                    isFinal ? 'bg-spora/20 text-spora' : 'bg-gray-700 text-text-muted'
                }`}>
                    {label}
                </span>
            </div>
            <div className="flex-1 flex items-center justify-center gap-2 text-sm min-w-0">
                <span className="text-text-secondary font-medium text-right flex-1 truncate">{home}</span>
                <span className="text-xs text-text-muted shrink-0">vs</span>
                <span className="text-text-secondary font-medium text-left flex-1 truncate">{away}</span>
            </div>
        </div>
    );
}

/* ─── MAIN COMPONENT ─── */

export default function Tournament() {
    const { t } = useLanguage();

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
                    {/* LIVE Badge */}
                    <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-spora/10 border border-spora/30 text-sm font-bold mb-5">
                        <span className="relative flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-spora opacity-75" />
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-spora" />
                        </span>
                        <span className="text-spora">🔴 LIVE HUB</span>
                    </div>

                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-3 leading-tight">
                        {t('tournament', 'title')}
                        <br />
                        <span className="text-spora">{t('tournament', 'titleAccent')}</span>
                    </h2>

                    {/* Socca Hungary Badge */}
                    <div className="inline-flex items-center gap-2 px-5 py-2 rounded-xl bg-amber-500/10 border border-amber-500/30 mb-5">
                        <span className="text-amber-400 text-lg">🇭🇺</span>
                        <span className="text-amber-400 text-sm font-bold uppercase tracking-wide">{t('tournament', 'officialBadge')}</span>
                    </div>

                    <p className="text-text-secondary text-base sm:text-lg max-w-2xl mx-auto mb-8">
                        Group stage complete. Finals Weekend is here.
                    </p>

                    {/* Info badges */}
                    <div className="flex flex-wrap items-center justify-center gap-3">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-card border border-border text-sm text-white font-medium">
                            <Calendar size={14} className="text-spora" />
                            Finals Weekend: Apr 19-20
                        </div>
                    </div>
                </motion.div>

                {/* ─── FINAL GROUP STANDINGS ─── */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="mb-14"
                >
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 text-center">Final Group Standings</h3>
                    <p className="text-sm text-text-muted text-center mb-6">Top 2 → Gold Cup &nbsp;|&nbsp; Bottom 2 → Silver Cup</p>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <StandingsTable title="Group A" teams={GROUP_A} />
                        <StandingsTable title="Group B" teams={GROUP_B} />
                    </div>
                </motion.div>

                {/* ─── FINALS WEEKEND FIXTURES ─── */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 text-center flex items-center justify-center gap-2">
                        <Star size={22} className="text-spora" />
                        Gameweek 3: Finals Weekend
                    </h3>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {/* SATURDAY — Silver Cup */}
                        <div className="rounded-2xl bg-card border border-gray-500/30 p-5 sm:p-6">
                            <div className="flex items-center gap-2 mb-1">
                                <span className="text-lg">🥈</span>
                                <h4 className="font-bold text-white text-lg">Saturday: The Silver Cup</h4>
                            </div>
                            <div className="flex items-center gap-4 text-xs text-text-muted mb-5">
                                <span className="flex items-center gap-1"><MapPin size={12} /> West Hostel Pitch</span>
                                <span className="flex items-center gap-1"><Clock size={12} /> Arrival: 17:45</span>
                            </div>
                            <div className="space-y-2.5">
                                {SATURDAY_FIXTURES.map((f, i) => (
                                    <FixtureCard key={i} {...f} isFinal={f.label.includes('FINAL') && !f.label.includes('SEMI')} />
                                ))}
                            </div>
                        </div>

                        {/* SUNDAY — Gold Cup */}
                        <div className="rounded-2xl bg-card border border-amber-500/30 p-5 sm:p-6">
                            <div className="flex items-center gap-2 mb-1">
                                <span className="text-lg">🥇</span>
                                <h4 className="font-bold text-white text-lg">Sunday: The Gold Cup</h4>
                            </div>
                            <div className="flex items-center gap-4 text-xs text-text-muted mb-5">
                                <span className="flex items-center gap-1"><MapPin size={12} /> BeStrong Pallag</span>
                                <span className="flex items-center gap-1"><Clock size={12} /> Arrival: 18:15</span>
                            </div>
                            <div className="space-y-2.5">
                                {SUNDAY_FIXTURES.map((f, i) => (
                                    <FixtureCard key={i} {...f} isFinal={f.label.includes('FINAL') && !f.label.includes('SEMI')} />
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
