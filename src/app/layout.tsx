import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { LanguageProvider } from '@/context/LanguageContext';

const inter = Inter({ subsets: ['latin', 'latin-ext'] });

export const metadata: Metadata = {
    title: 'Spora — Play. Connect. Compete. | Amateur Sports Platform in Debrecen',
    description:
        'The smartest way to organize amateur football in Debrecen. Book pitches, find players, split payments, and compete — all in one platform.',
    keywords: ['spora', 'amateur football', 'debrecen', 'sports booking', 'football', 'hungary', 'futsal'],
    openGraph: {
        title: 'Spora — Play. Connect. Compete.',
        description: 'The smartest way to organize amateur football in Debrecen.',
        type: 'website',
        locale: 'en_US',
        alternateLocale: 'hu_HU',
        siteName: 'Spora',
    },
};

const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SportsActivityLocation',
    name: 'Spora',
    description: 'Amateur sports organization platform in Debrecen, Hungary',
    url: 'https://spora.hu',
    address: {
        '@type': 'PostalAddress',
        addressLocality: 'Debrecen',
        addressRegion: 'Hajdú-Bihar',
        addressCountry: 'HU',
    },
    geo: {
        '@type': 'GeoCoordinates',
        latitude: 47.5316,
        longitude: 21.6273,
    },
    sport: 'Football',
    openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '08:00',
        closes: '23:00',
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className="dark">
            <head>
                <link rel="icon" href="/logo1.png" type="image/png" />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
            </head>
            <body className={`${inter.className} antialiased`}>
                <LanguageProvider>
                    {children}
                </LanguageProvider>
            </body>
        </html>
    );
}
