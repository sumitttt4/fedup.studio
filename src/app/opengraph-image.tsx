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
          backgroundColor: '#F7F4EE',
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
            backgroundImage: 'radial-gradient(circle at 50% 120%, rgba(201, 106, 43, 0.15), rgba(247, 244, 238, 1))',
          }}
        />
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', zIndex: 10 }}>
          <h1
            style={{
              fontSize: 100,
              fontFamily: 'sans-serif',
              color: '#171411',
              lineHeight: 1,
              letterSpacing: '-0.04em',
              marginBottom: 40,
              fontWeight: 800,
            }}
          >
            fedup<span style={{ color: '#C96A2B' }}>.</span>studio
          </h1>
          <p
            style={{
              fontSize: 44,
              color: '#6F675F',
              fontFamily: 'sans-serif',
              textAlign: 'center',
              letterSpacing: '-0.02em',
              fontWeight: 600,
              lineHeight: 1.2,
            }}
          >
            We design & build products <br/> that actually ship.
          </p>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
