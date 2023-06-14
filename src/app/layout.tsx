import { Metadata } from 'next';

import { Inter } from 'next/font/google';

import Header from './components/header/header';
import Nav from './components/nav/nav';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Alcohol Management Service',
    description: 'Manage the inventory of an alcohol business',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Header />
                <Nav />
                <main>{children}</main>
            </body>
        </html>
    );
}
