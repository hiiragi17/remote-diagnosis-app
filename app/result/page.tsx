'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useEffect } from 'react';


export default function ResultPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const result = searchParams.get('result');

  useEffect(() => {
    if (result) {
      document.title = `${result}、リモートします。`;
    }
  }, [result]);

  return (
    // ヘッダー
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Header 
          title="診断結果"
          subtitle="〜 今日のあなたのリモート理由 〜"
          showMainTitle={false}
        />

      {/* メインコンテンツ */}
      <main className="flex flex-col items-center justify-center px-4">
        {/* 結果表示カード */}
        <div className="bg-white rounded-xl shadow-lg p-8 max-w-md w-full mb-8">
          <div className="text-center">
            {/* 結果アイコン */}
            <div className="text-6xl mb-6">🎉</div>
            
            {result && (
              <>
                {/* 結果テキスト */}
                <div className="bg-indigo-50 rounded-lg p-6 mb-6">
                  <p className="text-3xl font-bold text-indigo-800 mb-2">
                    {result}
                  </p>
                  <p className="text-3xl font-bold text-gray-800">
                    リモートします！
                  </p>
                </div>

                {/* 励ましメッセージ */}
                <div className="mb-6">
                  <p className="text-gray-600">
                    素晴らしい理由ですね！✨
                    <br />
                    今日も快適なリモートワークを
                    <br />
                    お楽しみください 🏠
                  </p>
                </div>
              </>
            )}

            {/* シェアボタン */}
            {result && (
              <div className="mb-2">
                <button
                  onClick={() => {
                    const text = `${result}、リモートします。`;
                    const hashtag = '#○○なので、リモートします。';
                    const url = window.location.href;
                    const tweetText = `${text} ${hashtag}`;
                    const ogImageUrl = new URL('/api/og', process.env.NEXT_PUBLIC_BASE_URL || window.location.origin);
                    ogImageUrl.searchParams.set('reason', result);
                    const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweetText)}&url=${encodeURIComponent(url)}`;
                    window.open(tweetUrl, '_blank');
                  }}
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200 mb-4"
                >
                  🐦 Xでシェアする
                </button>
              </div>
            )}

             {/* ボタンエリア */}
            <div className="space-y-2">
              <button
                onClick={() => router.push('/')}
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200"
              >
                🏠 TOPページに戻る
              </button>
              </div>
            </div>
          </div>

        {/* 追加メッセージ */}
        <div className="max-w-md text-center">
          <p className="text-gray-600 text-sm mb-4">
            好きな理由が出るまで、何度も診断してみてください！
          </p>
          <p className="text-xs text-gray-500">
            ※この理由はランダムに生成されています
          </p>
        </div>
      </main>

      {/* フッター */}
      <Footer showDisclaimer={false} />
    </div>
  );
}

