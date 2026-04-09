import { ImageResponse } from 'next/og';

export const runtime = 'edge';

// Image metadata
export const alt = 'fedup.studio — Design & Development Studio';
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#FAFAFA',
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(255, 68, 0, 0.08) 0%, #FAFAFA 50%)',
          }}
        />
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', zIndex: 10 }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              padding: '12px 24px',
              borderRadius: '999px',
              border: '1px solid #E5E5E5',
              backgroundColor: '#FFFFFF',
              marginBottom: '48px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.02)',
            }}
          >
            <div style={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: '#FF4400' }} />
            <span style={{ fontSize: 22, color: '#737373', fontFamily: 'sans-serif', fontWeight: 500 }}>
              fedup.studio
            </span>
          </div>

          <h1
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              fontSize: 84,
              fontFamily: 'sans-serif',
              color: '#111111',
              lineHeight: 1.1,
              letterSpacing: '-0.04em',
              marginBottom: 32,
              fontWeight: 800,
              textAlign: 'center',
            }}
          >
            <span>Fed up with old designs?</span>
            <span>Need a landing page <span style={{ color: '#FF4400' }}>like this?</span></span>
          </h1>
          
          <p
            style={{
              fontSize: 36,
              color: '#737373',
              fontFamily: 'sans-serif',
              textAlign: 'center',
              letterSpacing: '-0.01em',
              fontWeight: 500,
              lineHeight: 1.4,
              maxWidth: 800,
            }}
          >
            We design interfaces that convert and scale.
          </p>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
