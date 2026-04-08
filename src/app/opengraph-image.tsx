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
          backgroundColor: '#0a0a0a',
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
            backgroundImage: 'radial-gradient(circle at 50% 120%, rgba(255, 68, 0, 0.4), rgba(10, 10, 10, 1))',
          }}
        />
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', zIndex: 10 }}>
          <h1
            style={{
              fontSize: 120,
              fontFamily: 'sans-serif',
              color: '#FFFFFF',
              lineHeight: 1,
              letterSpacing: '-0.05em',
              marginBottom: 40,
              fontWeight: 800,
            }}
          >
            fedup<span style={{ color: '#FF4400' }}>.</span>studio
          </h1>
          <p
            style={{
              fontSize: 40,
              color: '#E5E5E5',
              fontFamily: 'sans-serif',
              textAlign: 'center',
              letterSpacing: '-0.02em',
              fontWeight: 500,
              lineHeight: 1.2,
            }}
          >
            We set the stage. <br/> You steal the show.
          </p>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
