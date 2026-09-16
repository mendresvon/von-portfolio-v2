import Link from "next/link";
import { format, parseISO } from "date-fns";
import { zhTW, enUS } from "date-fns/locale";
import { MDXRemote } from "next-mdx-remote/rsc";
import { FiArrowUpRight } from "react-icons/fi";
import type { PostData } from "@/lib/blog";

export default function BlogPostView({
  post,
  language,
}: {
  post: PostData;
  language: "en" | "zh-TW";
}) {
  const dateLocale = language === "zh-TW" ? zhTW : enUS;
  const copy = language === "zh-TW"
    ? { back: "← 回到首頁", eyebrow: "文章", blogTitle: "部落格" }
    : { back: "← Back to Home", eyebrow: "WRITING", blogTitle: "Blog" };
  const formattedDate = format(parseISO(post.metadata.date), "PPP", { locale: dateLocale });

  const components = {
    img: (props: { src?: string; alt?: string }) => (
      <img
        src={props.src || ""}
        alt={props.alt || ""}
        className="blog-prose-image"
        loading="lazy"
      />
    ),
  };

  return (
    <article className="blog-post blog-container">
      <header className="blog-post-header">
        <Link href="/blog" className="blog-back-link">{copy.back}</Link>
        <p className="eyebrow">{copy.eyebrow}</p>
        <h1>{post.metadata.title}</h1>

        {post.metadata.subtitle && <p className="blog-post-subtitle">{post.metadata.subtitle}</p>}

        <div className="blog-post-meta">
          <time dateTime={post.metadata.date}>{formattedDate}</time>
          <div className="blog-tags">
            {post.metadata.tags?.map((tag) => <span key={tag}>#{tag}</span>)}
          </div>
        </div>
      </header>

      <div className="blog-prose">
        <MDXRemote source={post.source} components={components} />
      </div>

      <Link href="/blog" className="blog-end-link">{copy.blogTitle} <FiArrowUpRight /></Link>
    </article>
  );
}
