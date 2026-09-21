import Image from "next/image";
import Link from "next/link";
import type { BlogPost } from "@/lib/blog";
import { formatBlogDate } from "@/lib/blog";

export function BlogCard({ post }: { post: BlogPost }) {
  const isSvg = post.cover.split("?")[0].endsWith(".svg");

  return (
    <article
      data-reveal
      className="card-hover group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-[var(--card)]"
    >
      <Link
        href={`/blogs/${post.slug}`}
        className="relative block aspect-[1200/630] overflow-hidden bg-[var(--surface)]"
      >
        {isSvg ? (
          // SVG covers stay crisp as files; next/image does not optimize them.
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={post.cover}
            alt={post.coverAlt}
            width={1200}
            height={630}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
            loading="lazy"
            decoding="async"
          />
        ) : (
          <Image
            src={post.cover}
            alt={post.coverAlt}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 380px"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
          />
        )}
      </Link>
      <div className="flex flex-1 flex-col p-5">
        <p className="text-xs font-medium tracking-wider text-teal-400/90 uppercase">
          {post.category}
        </p>
        <h3 className="mt-2 text-lg font-semibold leading-snug text-white">
          <Link
            href={`/blogs/${post.slug}`}
            className="transition-colors hover:text-teal-300"
          >
            {post.title}
          </Link>
        </h3>
        <p className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-zinc-400">
          {post.excerpt}
        </p>
        <p className="mt-4 text-xs text-zinc-500">
          Asmat {formatBlogDate(post.publishedAt)} · {post.readingMinutes} min read
        </p>
        <Link
          href={`/blogs/${post.slug}`}
          className="mt-4 inline-flex items-center text-sm font-medium text-teal-400 transition-colors hover:text-teal-300"
        >
          Read article
          <span aria-hidden className="ml-1 transition-transform group-hover:translate-x-0.5">
            →
          </span>
        </Link>
      </div>
    </article>
  );
}
