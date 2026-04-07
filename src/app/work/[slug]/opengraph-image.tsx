import { ImageResponse } from "next/og";
import { getProjectBySlug, projects } from "@/data/projects";

export const alt = "Project Case Study";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) {
    return new ImageResponse(
      (
        <div
          style={{
            background: "#ffffff",
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#1a1a1a",
            fontSize: 48,
            fontFamily: "system-ui, sans-serif",
          }}
        >
          Project Not Found
        </div>
      ),
      { ...size }
    );
  }

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
            color: "#666666",
            fontSize: 20,
            fontWeight: 700,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            display: "flex",
          }}
        >
          {`${project.number} — ${project.category}`}
        </div>
        <div
          style={{
            color: "#1a1a1a",
            fontSize: 72,
            fontWeight: 700,
            marginTop: 16,
            lineHeight: 1.1,
          }}
        >
          {project.title}
        </div>
        <div
          style={{
            color: "#666666",
            fontSize: 24,
            marginTop: 20,
            maxWidth: 800,
          }}
        >
          {project.tagline}
        </div>
        <div style={{ color: "#999999", fontSize: 18, marginTop: 40 }}>
          ramon.dev
        </div>
      </div>
    ),
    { ...size }
  );
}
