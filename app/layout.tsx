import type { Metadata } from 'next';
import { Nunito } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar/Navbar';
import ClientOnly from '@/components/ClientOnly';
import RegisterModal from '@/components/Modal/RegisterModal';
import ToasterProviders from '@/providers/ToasterProviders';

const nunito = Nunito({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Airbnb',
    description: 'Airbnb clone',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={nunito.className}>
                <ClientOnly>
                    <ToasterProviders />
                    <RegisterModal />
                    <Navbar />
                </ClientOnly>
                {children}
            </body>
        </html>
    );
}
