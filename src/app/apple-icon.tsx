import { ImageResponse } from "next/og";

export const size = {
  width: 180,
  height: 180,
};
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 110,
          background: "#0A0806",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#FF9A2E",
          fontWeight: 900,
          fontFamily: "system-ui, sans-serif",
          borderRadius: 36,
          border: "6px solid #FF9A2E",
        }}
      >
        A
      </div>
    ),
    {
      ...size,
    }
  );
}
