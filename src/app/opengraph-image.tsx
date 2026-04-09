import { ImageResponse } from 'next/og';

export const runtime = 'edge';

// Image metadata
export const alt = 'Fedup Studio - Design & Development';
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default async function Image() {
  const fontData = await fetch(
    new URL('./Geist-Bold.ttf', import.meta.url)
  ).then((res) => res.arrayBuffer());

  return new ImageResponse(
    (
      <div
        style={{
          background: '#FAFAFA',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: '"Geist"',
          position: 'relative',
        }}
      >
        {/* Top badge */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '1px solid #E5E5E5',
            borderRadius: '9999px',
            padding: '12px 32px',
            marginBottom: '48px',
            backgroundColor: '#FFFFFF',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
          }}
        >
          <div
            style={{
              width: '10px',
              height: '10px',
              borderRadius: '50%',
              backgroundColor: '#FF4400',
              marginRight: '16px',
            }}
          />
          <div style={{ fontSize: 24, color: '#666666', letterSpacing: '-0.5px' }}>
            Fed up with old designs? We're here.
          </div>
        </div>

        {/* Main Text Content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div
            style={{
              fontSize: 96,
              color: '#111111',
              letterSpacing: '-4px',
              lineHeight: 1.1,
              display: 'flex',
            }}
          >
            Fed up with designs?
          </div>

          <div
            style={{
              fontSize: 96,
              color: '#111111',
              letterSpacing: '-4px',
              lineHeight: 1.1,
              display: 'flex',
              marginTop: '12px',
            }}
          >
            Need a landing page?
          </div>
          
          <div
            style={{
              fontSize: 96,
              color: '#FF4400', // Signature orange
              letterSpacing: '-4px',
              lineHeight: 1.1,
              display: 'flex',
              marginTop: '12px',
            }}
          >
            Call us.
          </div>
        </div>

        {/* Bottom Logo */}
        <div
          style={{
            position: 'absolute',
            top: 48,
            left: 48,
            fontSize: 32,
            color: '#111111',
            letterSpacing: '-1px',
            display: 'flex',
          }}
        >
          fedup.studio
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: 'Geist',
          data: fontData,
          style: 'normal',
          weight: 700,
        },
      ],
    }
  );
}
