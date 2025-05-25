'use client';

import DiagnosisButton from './components/DiagnosisButton';

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-8">
          ○○なので、リモートします。
        </h1>
        
        <DiagnosisButton />
      </div>
    </div>
  );
}