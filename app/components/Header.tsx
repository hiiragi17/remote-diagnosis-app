interface HeaderProps {
  title?: string;
  subtitle?: string;
  showMainTitle?: boolean;
}

export default function Header({ 
  title, 
  subtitle, 
  showMainTitle = true 
}: HeaderProps) {
  return (
    <header className="text-center py-8">
      {showMainTitle && (
        <>
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            ○○なので、
          </h1>
          <h2 className="text-5xl font-bold text-indigo-600 mb-2">
            リモートします。
          </h2>
        </>
      )}
      
      {title && (
        <h1 className="text-4xl font-bold text-gray-800 mb-2">
          {title}
        </h1>
      )}
      
      {subtitle && (
        <p className="text-lg text-gray-600 italic">
          {subtitle}
        </p>
      )}
      
      {showMainTitle && (
        <p className="text-lg text-gray-600 italic">
          〜 今日のリモート理由診断アプリ 〜
        </p>
      )}
    </header>
  );
}