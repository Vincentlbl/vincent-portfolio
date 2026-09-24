import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] });
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Vincent Lebel · Développeur full-stack',
  description:
    'Portfolio de Vincent Lebel, développeur full-stack en alternance dans la fintech : paiements SEPA, ISO 20022, Vue.js, Node.js.',
  openGraph: {
    title: 'Vincent Lebel · Développeur full-stack',
    description: 'Paiements SEPA, ISO 20022, Vue.js, Node.js.',
    type: 'website',
    locale: 'fr_FR',
  },
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="fr" className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <body>{children}</body>
    </html>
  );
}