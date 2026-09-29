import { ImageResponse } from "next/og";

export const alt = "Arun Singh | AI/ML Student @ IIT Jodhpur";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0A0806",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          border: "4px solid #FF9A2E",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 52,
              height: 52,
              borderRadius: 14,
              background: "#14100C",
              border: "2px solid #FF9A2E",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#FF9A2E",
              fontSize: 30,
              fontWeight: 800,
            }}
          >
            A
          </div>
          <span style={{ color: "#FFA843", fontSize: 24, letterSpacing: 2 }}>
            ARUN SINGH · PORTFOLIO
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <h1
            style={{
              fontSize: 68,
              fontWeight: 900,
              color: "#F3EDE4",
              lineHeight: 1.1,
              margin: 0,
            }}
          >
            I build AI systems that watch, predict and protect.
          </h1>
          <p style={{ fontSize: 28, color: "#8A8178", margin: 0 }}>
            AI/ML Student @ IIT Jodhpur · Computer Vision · Full-Stack Developer
          </p>
        </div>

        <div style={{ display: "flex", gap: 24, color: "#FFA843", fontSize: 20 }}>
          <span>Google Cloud Innovator</span>
          <span>·</span>
          <span>NVIDIA Community Member</span>
          <span>·</span>
          <span>Jaipur, India</span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
