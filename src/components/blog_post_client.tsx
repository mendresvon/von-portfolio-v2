"use client";

import { useTranslation } from "react-i18next";
import Link from "next/link";
import { format, parseISO } from "date-fns";
import { zhTW, enUS } from "date-fns/locale";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { PostMetadata } from "@/lib/blog";

interface PostData {
  metadata: PostMetadata;
  content: MDXRemoteSerializeResult;
}

export default function BlogPostClient({ initialPosts }: { initialPosts: Record<string, PostData | null> }) {
  const { t, i18n: i18n_translation } = useTranslation();
  
  const currentLang = i18n_translation.language;
  const post = initialPosts[currentLang] || initialPosts['en'] || initialPosts['zh-TW'];

  if (!post) {
     return <div className="text-white pt-32 text-center">Post not found in this language.</div>;
  }

  const dateLocale = currentLang === 'zh-TW' ? zhTW : enUS;
  const formattedDate = format(parseISO(post.metadata.date), 'PPP', { locale: dateLocale });

  const components = {
    img: (props: { src?: string; alt?: string }) => (
      <img
        src={props.src || ""}
        alt={props.alt || ""}
        className="w-full h-auto rounded-2xl border border-white/[0.06] shadow-2xl my-10 block"
        loading="lazy"
      />
    ),
  };

  return (
    <article className="container mx-auto px-6 py-32 flex-1 max-w-4xl">
      {/* Header */}
      <header className="mb-16">
        <Link 
          href="/blog" 
          className="group flex items-center text-[var(--text-muted)] hover:text-[var(--accent)] transition-all duration-300 gap-2 w-fit mb-8 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.06] hover:border-[var(--accent)]/30 font-medium text-sm"
        >
           <span className="transform transition-transform group-hover:-translate-x-1">
            {t("blog.back")}
          </span>
        </Link>
        
        <h1
          className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight tracking-tighter"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          {post.metadata.title}
        </h1>

        {post.metadata.subtitle && (
          <p className="text-2xl md:text-3xl font-medium text-[var(--accent)]/80 mb-8 leading-tight italic">
            {post.metadata.subtitle}
          </p>
        )}
        
        <div className="flex flex-wrap items-center gap-6 mt-10">
          <div className="flex items-center gap-4 text-[var(--text-muted)] font-bold tracking-wide">
            <time dateTime={post.metadata.date} className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[var(--accent)] shadow-[0_0_10px_rgba(var(--accent-rgb),0.5)]" />
              {formattedDate}
            </time>
          </div>

          <div className="flex flex-wrap gap-2">
            {post.metadata.tags?.map((tag: string) => (
              <span key={tag} className="text-xs uppercase tracking-widest font-bold px-3 py-1 rounded-full bg-white/[0.04] text-[var(--text-muted)] border border-white/[0.06]">
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="prose prose-invert max-w-none 
        prose-headings:text-white prose-headings:tracking-tight prose-p:text-[var(--text-secondary)] prose-p:text-lg
        prose-a:text-[var(--accent)] prose-strong:text-white
        prose-em:block prose-em:text-center prose-em:text-sm prose-em:text-[var(--text-muted)] prose-em:not-italic prose-em:-mt-6 prose-em:mb-12
        border-t border-white/[0.06] pt-16">
        <MDXRemote {...post.content} components={components} />
      </div>
    </article>
  );
}
