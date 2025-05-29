'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import Header from '../components/Header';
import Footer from '../components/Footer';


export default function ResultPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const result = searchParams.get('result');

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

            {/* ボタンエリア */}
            <div className="space-y-4">
              <button
                onClick={() => router.push('/')}
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200"
              >
                🏠 TOPページに戻る
              </button>
              
              <button

                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200 mb-4"
              >
                🐦 Xでシェアする
              </button>
            </div>
          </div>
        </div>

        {/* 追加メッセージ */}
        <div className="max-w-md text-center">
          <p className="text-gray-600 text-sm mb-4">
            また明日も新しい理由で診断してみてくださいね！
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