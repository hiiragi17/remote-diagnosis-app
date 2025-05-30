import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '○○なので、リモートします',
  description: '今日のリモート理由を診断するアプリ',
  openGraph: {
    title: '○○なので、リモートします',
    description: '今日のリモート理由を診断するアプリ',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '○○なので、リモートします',
    description: '今日のリモート理由を診断するアプリ',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}