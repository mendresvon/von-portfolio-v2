# Von Mendres Portfolio

[![Live Demo](https://img.shields.io/badge/Live_Demo-00C7B7?style=for-the-badge&logo=vercel&logoColor=white)](https://von-mendres-portfolio.vercel.app/)
[![Next.js](https://img.shields.io/badge/Next.js_15-000000?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

A bilingual portfolio website built with Next.js 15 and TypeScript. It supports English and Traditional Chinese and uses Framer Motion for page animations.

🔗 **Live Demo:** [von-mendres-portfolio.vercel.app](https://von-mendres-portfolio.vercel.app/)

---

## Features

- Languages: English and 繁體中文 using react-i18next
- Visual design: Glassmorphism with teal accents
- Animations: Scroll-triggered animations using Framer Motion
- Responsive layout: Mobile, tablet, and desktop support
- Dark theme: Dark color scheme throughout the site
- Rendering: Static generation with the Next.js App Router

---

## Tech stack

| Category | Technologies |
|----------|-------------|
| **Framework** | Next.js 15 (App Router) |
| **Language** | TypeScript |
| **Styling** | Tailwind CSS |
| **Animations** | Framer Motion |
| **i18n** | react-i18next |
| **Icons** | react-icons |
| **Deployment** | Vercel |

---

## Getting started

### Prerequisites

- Node.js 18+
- npm, yarn, pnpm, or bun

### Installation

```bash
# Clone the repository
git clone https://github.com/mendresvon/von-portfolio-v2.git
cd von-portfolio-v2

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build for Production

```bash
npm run build
npm start
```

---

## Project structure

```
src/
├── app/              # Next.js App Router pages
├── components/       # React components
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Experience.tsx
│   ├── Skills.tsx
│   ├── Projects.tsx
│   └── Contact.tsx
└── i18n/
    └── locales/      # Translation files
        ├── en.json
        └── zh-TW.json
```

---

## License

This project is open source and available under the [MIT License](LICENSE).

---

<div align="center">

Built by [Von Mendres](https://von-mendres-portfolio.vercel.app/)

</div>
