import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Venues from '@/components/Venues';
import Tournament from '@/components/Tournament';
import Footer from '@/components/Footer';

export default function Home() {
    return (
        <>
            <Header />
            <main>
                <Hero />
                <Features />
                <Venues />
                <Tournament />
            </main>
            <Footer />
        </>
    );
}
