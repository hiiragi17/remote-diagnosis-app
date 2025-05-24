'use client';

import { useState } from 'react';
import { reasons } from './data/reasons';

export default function Home() {
  const [result, setResult] = useState<string>('');

  // 診断ボタンを押した時の処理
  const handleDiagnosis = () => {
    // ランダムに理由を選択
    const randomIndex = Math.floor(Math.random() * reasons.length);
    const selectedReason = reasons[randomIndex];
    setResult(selectedReason);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-8">
          ○○なので、リモートします。
        </h1>
        
        <button
          onClick={handleDiagnosis}
          className="bg-blue-500 text-white px-8 py-4 rounded text-xl mb-8"
        >
          診断する
        </button>

        {result && (
          <div className="mt-8">
            <p className="text-2xl">
              {result}、リモートします。
            </p>
          </div>
        )}
      </div>
    </div>
  );
}