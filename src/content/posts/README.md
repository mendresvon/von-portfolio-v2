# Blog Post Creation Guide

To add a new post to the blog, add a `.mdx` file to this folder using the rules below.

## 1. File Naming Convention
To support multilingual switching, every post must have a **shared slug** followed by the **language identifier**.

- **File Syntax**: `unique-slug.language.mdx`
- **English version**: `my-new-post.en.mdx`
- **Traditional Chinese version**: `my-new-post.zh-TW.mdx`

> [!IMPORTANT]
> Both versions **MUST** share the same base slug (`my-new-post`) so they function correctly as a single piece of content when switching languages.

## 2. Required Metadata (Frontmatter)
Every post must define its metadata at the very top of the file within triple dashes (`---`).

```markdown
---
title: "Your Post Title"
date: "2026-04-14"
description: "A short, catchy summary for the blog card."
image: "/images/blog/optional-featured.jpg"
---
```

## 3. Example Structure
```markdown
---
title: "Understanding Next.js 15"
date: "2026-04-14"
description: "Exploring the new features in Next.js 15 and how to migrate."
---

Your markdown/MDX content goes here...
```
