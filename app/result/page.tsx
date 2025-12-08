import type { Metadata } from 'next';
import { Suspense } from 'react';
import ResultClient from './ResultClient';
import { reasons } from '../data/reasons';

type Props = {
  searchParams: Promise<{ result?: string }>
}

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
  const params = await searchParams;
  const result = params.result || '○○なので';

  // セキュリティ: resultが有効な理由リストに含まれているかチェック
  const validResult = reasons.includes(result) ? result : '○○なので';

  const title = `${validResult}、リモートします。`;
  const description = '今日のリモート理由を診断するアプリ';
  const ogImageUrl = `/api/og?result=${encodeURIComponent(validResult)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'website',
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImageUrl],
    },
  };
}

export default async function ResultPage({ searchParams }: Props) {
  const params = await searchParams;
  
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">読み込み中...</div>}>
      <ResultClient result={params.result} />
    </Suspense>
  );
}