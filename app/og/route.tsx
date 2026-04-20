import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get("title") || "Standards & Partners";

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          height: "100%",
          width: "100%",
          background: "#0b1f3a",
          color: "#ffffff",
          padding: "72px",
          flexDirection: "column",
          justifyContent: "space-between",
          fontSize: 58,
          fontWeight: 700,
        }}
      >
        <div style={{ fontSize: 28, opacity: 0.8 }}>Business Infrastructure</div>
        <div style={{ maxWidth: "90%" }}>{title}</div>
        <div style={{ fontSize: 24, color: "#16f1ff" }}>trust and run · Standards & Partners</div>
      </div>
    ),
    { width: 1200, height: 630 },
  );
}
