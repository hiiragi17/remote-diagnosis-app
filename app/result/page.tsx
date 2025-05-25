'use client';

import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

export default function ResultPage() {
  const searchParams = useSearchParams();
  const result = searchParams.get("result");
  const router = useRouter();

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-8">
          診断結果
        </h1>
        {result && (
          <p className="text-2xl">
            {result}、リモートします。
            </p>
        )}
        <div className="text-center">
        <button
            onClick={() => router.push('/')}
            className="bg-blue-500 text-white px-8 py-4 rounded text-xl mt-8"
        >
            TOPページに戻る
        </button>
    </div>
      </div>
    </div>
  );
}