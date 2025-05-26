'use client';

import DiagnosisButton from './components/DiagnosisButton';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* ヘッダー */}
      <header className="text-center py-8">
        <h1 className="text-5xl font-bold text-gray-800 mb-4">
          ○○なので、
        </h1>
        <h2 className="text-5xl font-bold text-indigo-600 mb-2">
          リモートします。
        </h2>
        <p className="text-lg text-gray-600 italic">
          〜 今日のリモート理由診断アプリ 〜
        </p>
      </header>

      {/* メインコンテンツ */}
      <main className="flex flex-col items-center justify-center px-4">
        {/* アプリ説明カード */}
        <div className="bg-white rounded-xl shadow-lg p-8 max-w-md w-full mb-8">
          <div className="text-center mb-6">
            <div className="text-6xl mb-4">🎯</div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              使い方
            </h3>
            <div className="text-left space-y-3 text-gray-600">
              <div className="flex items-center">
                <span className="bg-indigo-100 text-indigo-600 w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold mr-3">1</span>
                <span>下のボタンを押してください</span>
              </div>
              <div className="flex items-center">
                <span className="bg-indigo-100 text-indigo-600 w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold mr-3">2</span>
                <span>あなた専用の理由が表示されます</span>
              </div>
              <div className="flex items-center">
                <span className="bg-indigo-100 text-indigo-600 w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold mr-3">3</span>
                <span>堂々とリモートワークしましょう！</span>
              </div>
            </div>
          </div>
        
          <DiagnosisButton />
        </div>
        {/* 説明テキスト */}
        <div className="max-w-md text-center">
          <p className="text-gray-600 mb-4">
            毎日の「なんとなくリモートしたい」気持ちに、
            <br />
            それっぽい理由をプレゼント🎁
          </p>
          <p className="text-sm text-gray-500">
            ※完全にランダムです。実際の状況とは関係ありません😊
          </p>
        </div>
      </main>
      {/* フッター */}
      <footer className="text-center py-8 mt-16">
        <p className="text-gray-500 text-sm">
          今日も素敵なリモートワークライフを ✨
        </p>
      </footer>
    </div>
  );
}