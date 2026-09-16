"use client";

import Link from "next/link";
import { format, parseISO } from "date-fns";
import { zhTW, enUS } from "date-fns/locale";
import { FiArrowUpRight } from "react-icons/fi";
import { useTranslation } from "react-i18next";
import { PostMetadata } from "@/lib/blog";

export default function BlogList({ initialPosts }: { initialPosts: PostMetadata[] }) {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language === "zh-TW" ? "zh-TW" : "en";
  const dateLocale = currentLanguage === "zh-TW" ? zhTW : enUS;
  const localizedPosts = initialPosts.filter((post) => post.lang === currentLanguage);
  const posts = localizedPosts.length > 0 ? localizedPosts : initialPosts.filter((post) => post.lang === "en");

  return (
    <div className="blog-index">
      <div className="blog-container">
        <header className="blog-index-header">
          <Link href="/" className="blog-back-link">{t("blog.back")}</Link>
          <p className="eyebrow">{t("blog.eyebrow")}</p>
          <h1>{t("blog.title")}</h1>
          <p className="blog-index-intro">{t("blog.intro")}</p>
        </header>

        {posts.length > 0 ? (
          <div className="blog-post-grid">
            {posts.map((post) => (
              <Link key={post.lang + "-" + post.slug} href={"/blog/" + post.slug} className="blog-card">
                <div className="blog-card-meta">
                  <div className="blog-tags">
                    {post.tags?.map((tag) => <span key={tag}>{tag}</span>)}
                  </div>
                  <time dateTime={post.date}>
                    {currentLanguage === "zh-TW" ? format(parseISO(post.date), "yyyy年M月d日", { locale: dateLocale }) : format(parseISO(post.date), "MMMM dd, yyyy", { locale: dateLocale })}
                  </time>
                </div>

                <h2>{post.title}</h2>
                <p>{post.subtitle || post.description}</p>
                <span className="blog-card-read">{t("blog.read")} <FiArrowUpRight /></span>
              </Link>
            ))}
          </div>
        ) : (
          <div className="blog-empty">
            <p className="eyebrow">{t("blog.eyebrow")}</p>
            <h2>{t("blog.emptyTitle")}</h2>
            <p>{t("blog.empty")}</p>
          </div>
        )}
      </div>
    </div>
  );
}
