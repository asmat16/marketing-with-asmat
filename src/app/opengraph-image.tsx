import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

export const alt = siteConfig.description;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 72,
          background: "linear-gradient(135deg, #14141f 0%, #1c1c2a 50%, #232334 100%)",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            marginBottom: 32,
          }}
        >
          <div
            style={{
              width: 12,
              height: 12,
              borderRadius: "50%",
              background: "#2dd4bf",
            }}
          />
          <span style={{ color: "#2dd4bf", fontSize: 22, fontWeight: 600 }}>
            Marketing with Asmat
          </span>
        </div>
        <div
          style={{
            fontSize: 56,
            fontWeight: 700,
            color: "#fafafa",
            lineHeight: 1.15,
            maxWidth: 900,
            letterSpacing: "-0.02em",
          }}
        >
          Meta & Google Media Buyer
        </div>
        <div
          style={{
            fontSize: 36,
            fontWeight: 500,
            color: "#a1a1aa",
            marginTop: 16,
            maxWidth: 800,
            lineHeight: 1.3,
          }}
        >
          E-commerce · Real estate · Home services. Sales and lead gen
        </div>
        <div
          style={{
            display: "flex",
            gap: 32,
            marginTop: 48,
          }}
        >
          {["$20M+ ad spend", "7+ years", "Top Rated Plus"].map((stat) => (
            <div
              key={stat}
              style={{
                padding: "12px 24px",
                borderRadius: 999,
                border: "1px solid rgba(45, 212, 191, 0.35)",
                color: "#e4e4e7",
                fontSize: 22,
              }}
            >
              {stat}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size },
  );
}
