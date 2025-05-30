'use client';

import { reasons } from '../data/reasons';
import { useRouter } from 'next/navigation'; 

export default function DiagnosisButton() {
  const router = useRouter();
  // 診断ボタンを押した時の処理
  const handleDiagnosis = () => {
  // ランダムに理由を選択
  const randomIndex = Math.floor(Math.random() * reasons.length);
  const selectedReason = reasons[randomIndex];
  // 結果ページに遷移
  router.push(`/result?result=${encodeURIComponent(selectedReason)}`);
  };

  return (
    <div className="text-center">
      <button
        onClick={handleDiagnosis}
        className="bg-blue-500 text-white px-8 py-4 rounded text-xl mb-8"
      >
        診断する
      </button>
    </div>
  );
}