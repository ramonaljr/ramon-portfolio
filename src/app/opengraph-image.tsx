import { ImageResponse } from "next/og";

export const alt = "Ramon Vallejera — Full-Stack Developer & AI Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0a0a0a",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
        }}
      >
        <div
          style={{
            color: "#fa7025",
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
            color: "#f0ede8",
            fontSize: 64,
            fontWeight: 700,
            marginTop: 20,
            lineHeight: 1.1,
          }}
        >
          Full-Stack Developer & AI Engineer
        </div>
        <div style={{ color: "#9a9590", fontSize: 24, marginTop: 20 }}>
          React · Next.js · Node.js · Python · AI Automation
        </div>
      </div>
    ),
    { ...size }
  );
}
