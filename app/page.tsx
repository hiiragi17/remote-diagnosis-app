'use client';

import DiagnosisButton from './components/DiagnosisButton';
import Header from './components/Header';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* ヘッダー */}
      <Header /> 

       {/* メインコンテンツ */}
      <main className="flex flex-col items-center justify-center px-4">
        {/* 説明文セクション */}
        <div className="max-w-lg w-full mb-8">
          <div className="text-left space-y-4 text-gray-700 mb-6">
            <div className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg border-l-4 border-gray-400">
              <div className="text-xl mt-1">😤</div>
              <p className="font-medium leading-relaxed">
                フルリモートOKの会社のはずだったのに、急に原則出社だと言われた……
              </p>
            </div>
            <div className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg border-l-4 border-gray-400">
              <div className="text-xl mt-1">😔</div>
              <p className="font-medium leading-relaxed">
                フルリモートOKだったはずなのに、リモートが禁止だと言われた……
              </p>
            </div>
            <div className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg border-l-4 border-gray-400">
              <div className="text-xl mt-1">🤔</div>
              <p className="font-medium leading-relaxed">
                受託会社でお客様との取引もリモートなのに、なぜ出社しなければいけないのか？
              </p>
            </div>
            <div className="text-center mt-6 p-3 bg-blue-50 rounded-lg">
              <p className="text-lg font-semibold text-indigo-600">
                💭 皆様はそんなことありませんか？
              </p>
            </div>
          </div>
          
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
            <div className="flex items-center">
              <div className="text-2xl mr-3">💡</div>
              <div className="text-left">
                <p className="font-bold text-gray-800">でも大丈夫！</p>
                <p className="text-gray-700">このアプリがあれば、それらしいリモート理由を捻出できます！</p>
              </div>
            </div>
          </div>
        </div>

        {/* 診断ボタンカード */}
        <div className="bg-white rounded-xl shadow-lg p-8 max-w-lg w-full mb-8">
          <div className="text-center mb-6">
            <div className="text-6xl mb-4">🎯</div>
          </div>

          <p className="text-xl font-bold text-indigo-600 mb-8 text-center">
            さあ貴方も早速診断！
          </p>
          {/* 診断ボタン */}
          <DiagnosisButton />
        </div>

        {/* 説明テキスト（削除） */}

      </main>
      <div className="max-w-2xl mx-auto px-4 mb-8">
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <p className="text-xs text-red-600 text-center leading-relaxed">
            このアプリで出された理由を使用されて生じた被害に関して、当方は一切責任を負いません。ご了承ください。
          </p>
        </div>
      </div>

      {/* フッター */}
      <footer className="text-center py-8 mt-16">
        <p className="text-gray-500 text-sm">
          今日も素敵なリモートワークライフを ✨
        </p>
      </footer>
    </div>
  );
}