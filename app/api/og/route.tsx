import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';

export const runtime = 'edge';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const result = searchParams.get('result') || 'OOなので';

    return new ImageResponse(
      (
        <div
          style={{
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: 'system-ui, -apple-system, sans-serif',
          }}
        >
          {/* メインカード */}
          <div
            style={{
              background: 'rgba(255, 255, 255, 0.95)',
              backdropFilter: 'blur(10px)',
              padding: '60px',
              borderRadius: '24px',
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              maxWidth: '900px',
              margin: '0 40px',
            }}
          >
            {/* アイコン */}
            <div
              style={{
                fontSize: '80px',
                marginBottom: '30px',
                display: 'flex',
              }}
            >
              🏠
            </div>

            {/* メインテキスト */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                marginBottom: '40px',
              }}
            >
              <div
                style={{
                  fontSize: '48px',
                  fontWeight: '800',
                  background: 'linear-gradient(45deg, #667eea, #764ba2)',
                  backgroundClip: 'text',
                  color: 'transparent',
                  marginBottom: '10px',
                  display: 'flex',
                  textAlign: 'center',
                  lineHeight: '1.2',
                }}
              >
                {result}、
              </div>
              <div
                style={{
                  fontSize: '52px',
                  fontWeight: '800',
                  color: '#1f2937',
                  display: 'flex',
                  textAlign: 'center',
                }}
              >
                リモートします。
              </div>
            </div>

            {/* 区切り線 */}
            <div
              style={{
                width: '200px',
                height: '4px',
                background: 'linear-gradient(90deg, #667eea, #764ba2)',
                borderRadius: '2px',
                marginBottom: '30px',
                display: 'flex',
              }}
            />

            {/* サブタイトル */}
            <div
              style={{
                fontSize: '28px',
                color: '#6b7280',
                fontWeight: '600',
                display: 'flex',
                marginBottom: '20px',
              }}
            >
              ooなので、リモートします。
            </div>

            {/* 装飾要素 */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
              }}
            >
              <span style={{ fontSize: '20px', display: 'flex' }}>✨</span>
              <span
                style={{
                  fontSize: '18px',
                  color: '#9ca3af',
                  fontWeight: '500',
                  display: 'flex',
                }}
              >
                今日のあなたにぴったりの理由
              </span>
              <span style={{ fontSize: '20px', display: 'flex' }}>✨</span>
            </div>
          </div>

          {/* 背景装飾 */}
          <div
            style={{
              position: 'absolute',
              top: '50px',
              right: '50px',
              fontSize: '120px',
              opacity: 0.1,
              display: 'flex',
            }}
          >
            💻
          </div>
          <div
            style={{
              position: 'absolute',
              bottom: '50px',
              left: '50px',
              fontSize: '100px',
              opacity: 0.1,
              display: 'flex',
            }}
          >
            ☁️
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (error) {
    console.log('OG画像エラー:', error);
    return new Response(`エラー: ${error}`, { status: 500 });
  }
}