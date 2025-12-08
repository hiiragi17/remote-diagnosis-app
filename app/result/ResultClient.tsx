'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { reasons } from '../data/reasons';

interface ResultClientProps {
  result: string | undefined;
}

export default function ResultClient({ result }: ResultClientProps) {
  const router = useRouter();

  // セキュリティ: resultが有効な理由リストに含まれているかチェック
  const isValidResult = result && reasons.includes(result);

  // 無効な結果の場合、ホームページにリダイレクト
  useEffect(() => {
    if (result && !isValidResult) {
      router.push('/');
    }
  }, [result, isValidResult, router]);

  // 動的にページタイトルを変更（検証済みの値のみ使用）
  useEffect(() => {
    if (isValidResult) {
      document.title = `${result}、リモートします。`;
    }
  }, [result, isValidResult]);

  return (
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

            {isValidResult && (
              <>
                {/* 結果テキスト */}
                <div className="bg-indigo-50 rounded-lg p-6 mb-6">
                  <p className="text-3xl font-bold text-indigo-800 mb-2">
                    {result}、
                  </p>
                  <p className="text-3xl font-bold text-gray-800">
                    リモートします。
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
            {isValidResult && (
              <div className="mb-2">
                <button
                  onClick={() => {
                    const text = `${result}、リモートします。`;
                    const hashtag = '#OOなのでリモートします。';
                    const url = window.location.href;
                    const tweetText = `${text} ${hashtag}`;
                    const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweetText)}&url=${encodeURIComponent(url)}`;
                    window.open(tweetUrl, '_blank');
                  }}
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200"
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
            貴方にぴったりな理由が出るまで診断してみてくださいね！
          </p>
          <p className="text-xs text-gray-500">
            ※この理由はランダムに生成されています
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}