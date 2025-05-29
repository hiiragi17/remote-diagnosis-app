interface FooterProps {
  showDisclaimer?: boolean;
}

export default function Footer({ showDisclaimer = false }: FooterProps) {
  return (
    <>
      {/* 免責事項 */}
      {showDisclaimer && (
        <div className="max-w-2xl mx-auto px-4 mb-8">
          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <p className="text-xs text-red-600 text-center leading-relaxed">
              このアプリで出された理由を使用されて生じた被害に関して、当方は一切責任を負いません。ご了承ください。
            </p>
          </div>
        </div>
      )}

      {/* フッター */}
      <footer className="text-center py-8">
        <p className="text-gray-500 text-sm">
          © 2025 ○○なので、リモートします。
        </p>
      </footer>
    </>
  );
}