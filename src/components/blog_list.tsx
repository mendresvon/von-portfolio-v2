"use client";

import Link from "next/link";
import { format, parseISO } from "date-fns";
import { zhTW, enUS } from "date-fns/locale";
import { useTranslation } from "react-i18next";
import { PostMetadata } from "@/lib/blog";

export default function BlogList({ initialPosts }: { initialPosts: PostMetadata[] }) {
  const { t, i18n: i18n_translation } = useTranslation();
  const dateLocale = i18n_translation.language === 'zh-TW' ? zhTW : enUS;

  // Ideally we'd re-fetch or filter here if the language changes, 
  // but for now we'll assume the server-provided list is filtered or we handle it in the parent.
  
  return (
    <div className="container mx-auto px-6 py-32 flex-1">
      {/* Back button */}
      <div className="max-w-5xl mx-auto mb-16">
        <Link 
          href="/" 
          className="group flex items-center text-[var(--text-muted)] hover:text-[var(--accent)] transition-all duration-300 gap-2 w-fit px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.06] hover:border-[var(--accent)]/30 font-medium text-sm"
        >
          <span className="transform transition-transform group-hover:-translate-x-1 font-bold">
            {t("blog.back")}
          </span>
        </Link>
      </div>

      <div className="max-w-5xl mx-auto">
        <h1
          className="text-6xl md:text-7xl font-extrabold mb-6 tracking-tighter text-white"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          {t("blog.title")}
        </h1>
        
        <p className="text-xl text-[var(--text-muted)] mb-20 leading-relaxed max-w-2xl">
          Thoughts on software engineering, creative AI, and building products with discipline.
        </p>
        
        {initialPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {initialPosts.map((post) => (
              <Link 
                key={post.slug} 
                href={`/blog/${post.slug}`}
                className="group relative p-8 card-base flex flex-col h-full overflow-hidden transition-all duration-300 hover:border-white/[0.12]"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent)]/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="flex flex-wrap gap-2 mb-4 relative">
                  {post.tags?.map((tag) => (
                    <span key={tag} className="text-[10px] uppercase tracking-widest font-bold px-2 py-0.5 rounded-full bg-[var(--accent)]/10 text-[var(--accent)] border border-[var(--accent)]/20">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <time className="text-sm font-bold text-[var(--text-muted)] mb-4 block tracking-wider uppercase relative" style={{ fontFamily: 'var(--font-mono)' }}>
                  {format(parseISO(post.date), 'MMMM dd, yyyy', { locale: dateLocale })}
                </time>
                
                <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-[var(--accent)] transition-colors duration-300 relative" style={{ fontFamily: 'var(--font-display)' }}>
                  {post.title}
                </h2>
                
                <p className="text-[var(--text-muted)] leading-relaxed flex-1 mb-6 relative">
                  {post.subtitle || post.description}
                </p>
                
                <div className="mt-auto flex items-center text-white font-bold gap-2 relative">
                   <span className="text-sm group-hover:text-[var(--accent)] transition-colors">Read Article</span>
                   <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform group-hover:text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                   </svg>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="p-16 card-base text-center">
             <div className="w-20 h-20 bg-[var(--accent)]/10 rounded-full flex items-center justify-center mx-auto mb-8 animate-pulse">
               <svg className="w-10 h-10 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10l4 4v10a2 2 0 01-2 2z" />
               </svg>
             </div>
             <h3 className="text-2xl font-bold text-white mb-2" style={{ fontFamily: 'var(--font-display)' }}>No posts yet</h3>
             <p className="text-[var(--text-muted)]">Stay tuned for upcoming articles!</p>
          </div>
        )}
      </div>
    </div>
  );
}
