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

  return (
    <article className="container mx-auto px-6 py-32 flex-1 max-w-4xl">
      {/* Header */}
      <header className="mb-16">
        <Link 
          href="/blog" 
          className="group flex items-center text-teal-400 hover:text-teal-300 transition-all duration-300 gap-2 w-fit mb-8 px-4 py-2 rounded-full bg-teal-500/5 border border-teal-500/10 hover:border-teal-500/30 font-medium"
        >
           <span className="transform transition-transform group-hover:-translate-x-1">
            {t("blog.back")}
          </span>
        </Link>
        
        <h1 className="text-5xl md:text-7xl font-black text-white mb-8 leading-tight tracking-tight drop-shadow-md">
          {post.metadata.title}
        </h1>
        
        <div className="flex items-center gap-4 text-gray-400 font-bold tracking-wide">
          <time dateTime={post.metadata.date} className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-teal-500 shadow-[0_0_10px_rgba(20,184,166,0.5)]"></span>
            {formattedDate}
          </time>
        </div>
      </header>

      {/* Content */}
      <div className="prose prose-invert prose-teal max-w-none 
        prose-headings:font-black prose-headings:tracking-tight prose-headings:text-white
        prose-p:text-gray-300 prose-p:leading-relaxed prose-p:text-lg
        prose-strong:text-white prose-strong:font-bold
        prose-a:text-teal-400 hover:prose-a:text-teal-300 transition-colors
        prose-code:text-teal-300 prose-code:bg-teal-500/10 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:before:content-none prose-code:after:content-none
        prose-pre:bg-gray-900/50 prose-pre:border prose-pre:border-white/5 prose-pre:rounded-2xl
        border-t border-white/5 pt-16">
        <MDXRemote {...post.content} />
      </div>
    </article>
  );
}
