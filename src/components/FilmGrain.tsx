"use client";

export function FilmGrain() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-40 overflow-hidden"
    >
      {/* Film Grain Texture via SVG noise */}
      <svg className="fixed inset-0 h-full w-full opacity-[0.032] mix-blend-overlay">
        <filter id="cinder-grain">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.8"
            numOctaves="4"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#cinder-grain)" />
      </svg>

      {/* Cinematic Vignette */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_35%,rgba(10,8,6,0.75)_100%)]" />
    </div>
  );
}
