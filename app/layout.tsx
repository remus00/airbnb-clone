import type { Metadata } from 'next';
import { Nunito } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar/Navbar';
import ClientOnly from '@/components/ClientOnly';
import RegisterModal from '@/components/Modal/RegisterModal';
import ToasterProviders from '@/providers/ToasterProviders';
import LoginModal from '@/components/Modal/LoginModal';
import getCurrentUser from '@/actions/getCurrentUser';

const nunito = Nunito({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Airbnb',
    description: 'Airbnb clone',
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
    const currentUser = await getCurrentUser();
    return (
        <html lang="en">
            <body className={nunito.className}>
                <ClientOnly>
                    <ToasterProviders />
                    <LoginModal />
                    <RegisterModal />
                    <Navbar currentUser={currentUser} />
                </ClientOnly>
                {children}
            </body>
        </html>
    );
}
