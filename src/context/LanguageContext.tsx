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
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const sec = (translations as any)[section];
        if (!sec) return key;
        const entry = sec[key];
        if (!entry) return key;
        if (typeof entry === 'object' && entry[lang]) return entry[lang];
        return key;
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
