import { ImageResponse } from "next/og";
import { getPost } from "@/lib/blog";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OgImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  const title = post?.seoTitle ?? "Marketing with Asmat";
  const category = post?.category ?? "Insights";

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
          background:
            "linear-gradient(135deg, #14141f 0%, #1c1c2a 50%, #232334 100%)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            marginBottom: 28,
            color: "#2dd4bf",
            fontSize: 22,
            fontWeight: 600,
          }}
        >
          Marketing with Asmat · {category}
        </div>
        <div
          style={{
            fontSize: 52,
            fontWeight: 700,
            color: "#fafafa",
            lineHeight: 1.15,
            maxWidth: 980,
          }}
        >
          {title}
        </div>
        <div
          style={{
            marginTop: 28,
            color: "#a1a1aa",
            fontSize: 24,
          }}
        >
          Meta and Google ads for US e-commerce, real estate, and home services
        </div>
      </div>
    ),
    { ...size },
  );
}
