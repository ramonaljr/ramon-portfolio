import { ImageResponse } from "next/og";

export const alt = "Ramon A. Vallejera, Jr. — Full-Stack Developer & AI Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#ffffff",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            color: "#1a1a1a",
            fontSize: 24,
            fontWeight: 700,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
          }}
        >
          ramon.dev
        </div>
        <div
          style={{
            color: "#1a1a1a",
            fontSize: 64,
            fontWeight: 700,
            marginTop: 20,
            lineHeight: 1.1,
          }}
        >
          Full-Stack Developer & AI Engineer
        </div>
        <div style={{ color: "#666666", fontSize: 24, marginTop: 20 }}>
          React · Next.js · Node.js · Python · AI Automation
        </div>
      </div>
    ),
    { ...size }
  );
}
