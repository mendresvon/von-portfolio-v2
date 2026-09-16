"use client";

import { useTranslation } from "react-i18next";

export default function BlogPostClient({
  initialPosts,
}: {
  initialPosts: Record<string, React.ReactNode>;
}) {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language === "zh-TW" ? "zh-TW" : "en";
  const post = initialPosts[currentLanguage] || initialPosts.en || initialPosts["zh-TW"];

  return post || <div className="blog-empty"><h1>{t("blog.emptyTitle")}</h1></div>;
}
