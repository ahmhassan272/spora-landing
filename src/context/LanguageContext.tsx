'use client';

import { createContext, useContext, useState, ReactNode } from 'react';
import { translations, Lang } from '@/lib/translations';

type LanguageContextType = {
    lang: Lang;
    setLang: (lang: Lang) => void;
    t: (section: string, key: string) => string;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [lang, setLang] = useState<Lang>('en');

    const t = (section: string, key: string): string => {
        const sec = (translations as Record<string, Record<string, { en: string; hu: string }>>)[section];
        if (!sec) return key;
        const entry = sec[key];
        if (!entry) return key;
        return entry[lang] || entry.en || key;
    };

    return (
        <LanguageContext.Provider value={{ lang, setLang, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (!context) throw new Error('useLanguage must be used within LanguageProvider');
    return context;
}
