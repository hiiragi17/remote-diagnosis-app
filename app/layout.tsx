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
    images: [
      {
        url: '/api/og',
        width: 1200,
        height: 630,
        alt: '○○なので、リモートします',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '○○なので、リモートします',
    description: '今日のリモート理由を診断するアプリ',
    images: ['/api/og'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <head>
        <meta property="og:image" content="/api/og" />
        <meta name="twitter:image" content="/api/og" />
      </head>
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}