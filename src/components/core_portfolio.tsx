"use client";

import Image from "next/image";
import Link from "next/link";
import { FormEvent, useEffect, useMemo, useState } from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { useTranslation } from "react-i18next";
import { FaCheck, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import {
  FiActivity,
  FiArrowUpRight,
  FiBookOpen,
  FiBriefcase,
  FiCpu,
  FiCopy,
  FiDownload,
  FiGlobe,
  FiGrid,
  FiHome,
  FiLayers,
  FiMail,
} from "react-icons/fi";
import {
  SiClaude,
  SiDocker,
  SiExpress,
  SiGithub,
  SiGithubactions,
  SiGitlab,
  SiGooglecloud,
  SiKubernetes,
  SiLinux,
  SiMongodb,
  SiMqtt,
  SiMysql,
  SiNodedotjs,
  SiOpenai,
  SiPostgresql,
  SiPytorch,
  SiReact,
  SiRedis,
  SiSqlite,
} from "react-icons/si";

type Job = {
  role: string;
  company: string;
  period: string;
  description: string[];
};

type Project = {
  number: string;
  title: string;
  introduction: string;
  description: string;
  note?: string;
  imageUrl: string;
  techStack: string[];
  liveUrl?: string;
  repoUrl?: string;
  videoUrl?: string;
  blogUrl?: string;
};

const email = "mendresvon@gmail.com";

function HermesMark() {
  return <span className="hermes-mark" aria-hidden="true" />;
}

function GoogleAntigravityMark() {
  return <span className="antigravity-mark" aria-hidden="true" />;
}

function HerdrMark() {
  return <span className="herdr-mark" aria-hidden="true" />;
}

const reveal: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" } },
};

const pictureReveal: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.65, ease: "easeOut" } },
};

const staticJobs: Job[] = [];

const awards = [
  {
    period: "2026",
    title: "1st Place · National English Social Solutions Contest",
    detail: "Proposed SafetyLink with Amber and Jerome, an autonomous one-button RF alert concept for seniors living alone in Taiwan.",
  },
  {
    period: "2023 — NOW",
    title: "Academic Elite Award · STUST",
    detail: "Recognized for academic performance while completing a Computer Science degree in Mandarin.",
  },
  {
    period: "USJ-R",
    title: "Valedictorian",
    detail: "Graduated as valedictorian of my class at the University of San Jose–Recoletos.",
  },
];

const leadership = [
  {
    period: "2026 — NOW",
    title: "Deputy Secretary-General · Tainan Youth Center",
    detail: "Helping organize youth programs and community initiatives in Tainan.",
  },
  {
    period: "2016 — 2020",
    title: "S2 General Scribe · USJ-R Senior Scouts",
    detail: "Served as General Scribe in the USJ-R Senior Scouts, focused on service, discipline, and community.",
  },
  {
    period: "2023 — NOW",
    title: "Acolyte, Lector & Psalmist · Sacred Heart Church",
    detail: "Contributing to the life of the Filipino community in Tainan.",
  },
];

const featuredPictures = [
  {
    src: "/images/featured/von-and-zoe.jpg",
    alt: "Von with his baby sister Zoe",
    width: 2134,
    height: 2134,
  },
  {
    src: "/images/featured/fr-jean.jpg",
    alt: "A large community group photo in a church",
    width: 1477,
    height: 1108,
  },
  {
    src: "/images/featured/more-safetylink.jpg",
    alt: "Three people holding SafetyLink certificates",
    width: 1200,
    height: 2134,
  },
  {
    src: "/images/featured/despidida.jpg",
    alt: "A group gathered outside a restaurant in Tainan",
    width: 1477,
    height: 1108,
  },
  {
    src: "/images/featured/family.jpg",
    alt: "A family selfie",
    width: 1422,
    height: 2134,
  },
];

const stackGroups = [
  {
    label: "AI STACK / AGENTIC ENGINEERING",
    labelZh: "AI 堆疊 / Agentic Engineering",
    tools: [
      { name: "Hermes", Icon: HermesMark, tone: "hermes" },
      { name: "Codex", Icon: SiOpenai, tone: "codex" },
      { name: "Claude Code", Icon: SiClaude, tone: "claude" },
      { name: "Google Antigravity", Icon: GoogleAntigravityMark, tone: "antigravity" },
      { name: "Herdr", Icon: HerdrMark, tone: "herder" },
    ],
  },
  {
    label: "PRODUCT & FULL-STACK",
    labelZh: "產品與全端",
    tools: [
      { name: "MongoDB", Icon: SiMongodb, tone: "mongodb" },
      { name: "Express", Icon: SiExpress, tone: "express" },
      { name: "React", Icon: SiReact, tone: "react" },
      { name: "Node.js", Icon: SiNodedotjs, tone: "node" },
      { name: "REST APIs", Icon: FiGlobe, tone: "rest" },
    ],
  },
  {
    label: "CLOUD & DELIVERY",
    labelZh: "雲端與交付",
    tools: [
      { name: "Docker", Icon: SiDocker, tone: "docker" },
      { name: "Kubernetes", Icon: SiKubernetes, tone: "kubernetes" },
      { name: "Google Cloud", Icon: SiGooglecloud, tone: "google-cloud" },
      { name: "GitHub Actions", Icon: SiGithubactions, tone: "actions" },
      { name: "GitHub", Icon: SiGithub, tone: "github" },
      { name: "GitLab", Icon: SiGitlab, tone: "gitlab" },
      { name: "Linux", Icon: SiLinux, tone: "linux" },
    ],
  },
  {
    label: "DATABase, MESSAGING, & Others",
    labelZh: "資料庫、訊息傳遞與其他",
    tools: [
      { name: "MongoDB", Icon: SiMongodb, tone: "mongodb" },
      { name: "PostgreSQL", Icon: SiPostgresql, tone: "postgresql" },
      { name: "SQLite", Icon: SiSqlite, tone: "sqlite" },
      { name: "MySQL", Icon: SiMysql, tone: "mysql" },
      { name: "Redis", Icon: SiRedis, tone: "redis" },
      { name: "MQTT", Icon: SiMqtt, tone: "mqtt" },
      { name: "PyTorch", Icon: SiPytorch, tone: "pytorch" },
      { name: "FastAI", Icon: FiActivity, tone: "fastai" },
    ],
  },
];

function getProjectData(t: (key: string) => string): Project[] {
  return [
    {
      number: "01",
      title: t("projects.filmfolio.title"),
      introduction: t("projects.filmfolio.introduction"),
      description: t("projects.filmfolio.description"),
      note: t("projects.filmfolio.note"),
      imageUrl: "/filmfolio-ss.jpeg",
      techStack: ["MERN", "Redis", "Docker", "GCP Cloud Run", "CI/CD"],
      liveUrl: "https://filmfolio-mu.vercel.app/",
      repoUrl: "https://github.com/mendresvon/FilmFolio",
      videoUrl: "https://youtu.be/T5hhrOQvQP8",
    },
    {
      number: "02",
      title: t("projects.safetylink.title"),
      introduction: t("projects.safetylink.introduction"),
      description: t("projects.safetylink.description"),
      imageUrl: "/images/blog/safetylink-essc-win/award-ceremony.jpg",
      techStack: ["IoT", "Embedded Systems", "Project Proposal", "Project Design", "Negotiation", "Presentation"],
      blogUrl: "/blog/safetylink-essc-win",
    },
    {
      number: "03",
      title: t("projects.traffic_light.title"),
      introduction: t("projects.traffic_light.introduction"),
      description: t("projects.traffic_light.description"),
      imageUrl: "/traffic-light.jpeg",
      techStack: ["C++", "ESP32", "MQTT", "Android"],
      repoUrl: "https://github.com/mendresvon/Project-Portfolio/tree/main/Voice%20Controlled%20Traffic%20Control",
      videoUrl: "https://youtu.be/nRs0o199rpQ",
    },
  ];
}

export default function CorePortfolio() {
  const { t, i18n } = useTranslation();
  const prefersReducedMotion = useReducedMotion();
  const [isMounted, setIsMounted] = useState(false);
  const [time, setTime] = useState("--:--:-- GMT+8");
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState<"idle" | "sending" | "sent" | "error">("idle");

  useEffect(() => {
    setIsMounted(true);

    const updateTime = () => {
      setTime(
        new Intl.DateTimeFormat("en-US", {
          timeZone: "Asia/Taipei",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        }).format(new Date()) + " GMT+8",
      );
    };

    updateTime();
    const interval = window.setInterval(updateTime, 1000);
    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement;
      if (event.key.toLowerCase() !== "c" || ["INPUT", "TEXTAREA"].includes(target.tagName)) return;
      void copyEmail();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const isZh = isMounted && i18n.language.startsWith("zh");
  const copy = isZh
    ? {
        basedIn: "現居台灣台南",
        introRole: "資訊工程 · 軟體 · AI 研究",
        introLead: "嗨，我是 Von，一名來自菲律賓 🇵🇭、目前在台灣 🇹🇼 就讀的資訊工程學生。",
        intro: "我來到台灣時完全不會中文。現在，我所有課程都以中文授課，並在全中文授課的資工系中排名第一。",
        emailHint: "按下 C 複製我的電子郵件",
        personalBlog: "個人部落格",
        work: "作品",
        workTitle: "精選作品",
        picturesTitle: "精選照片",
        picturesCaption: "記憶快照",
        favoriteProjects: "喜愛的專案",
        favoriteProjectsIntro: "從雲端系統到嵌入式系統，這些是我最投入的幾個作品。",
        moreWorkPrefix: "我也持續打造軟體、雲端系統與 AI 應用。歡迎造訪我的",
        moreWorkSuffix: "查看更多作品。",
        aiResearch: "AI 研究",
        researchIntro: "機制可解釋性研究的核心問題是：神經網路如何表徵資訊，又是哪些內部組件造成它們的輸出？",
        researchContext: "我與一位 NCKU 教授及一位同校研究生共同撰寫研究論文，並負責以下實驗。",
        experience: "經歷",
        experienceTitle: "工作經歷",
        experienceIntro: "除了投入 AI 研究、維持優異的學業表現並承擔社群責任外，我也透過兼職工作全額負擔學業與生活開支。",
        qualifications: "學歷與認證",
        qualificationsIntro: "除了課堂學習，我也主動透過自學、認證與實作，持續尋找校外的學習機會。",
        stack: "技術堆疊",
        stackIntro: "我在研究、軟體開發與日常工作中使用的工具與技術。",
        awards: "獎項",
        leadership: "領導與服務",
        outside: "螢幕之外",
        outsideIntro: "在台南生活、學習、教學，也和一群很棒的人一起完成 SafetyLink。",
        writing: "文章",
        contact: "聯絡",
        contactIntro: "你可以使用表單，或透過下方連結聯絡我。",
        send: "發送訊息",
        sent: "訊息已送出，謝謝你。",
      }
    : {
        basedIn: "BASED IN TAINAN, TAIWAN",
        introRole: "Computer Science · Software · AI Research",
        introLead: "Hey, I'm Von. A computer science student from the Philippines 🇵🇭, currently studying in Taiwan 🇹🇼.",
        intro: "I came to Taiwan without speaking the language. Today, I take all my classes in Mandarin and rank #1 in an all-Mandarin CS program.",
        emailHint: "Press C to copy my email",
        personalBlog: "Personal Blog",
        work: "WORK",
        workTitle: "Featured Work",
        picturesTitle: "Featured Pictures",
        picturesCaption: "Snapshots of Memories",
        favoriteProjects: "Favorite Projects",
        favoriteProjectsIntro: "A few of the projects I have been most invested in, from cloud systems to embedded hardware.",
        moreWorkPrefix: "I build software projects, cloud systems, and AI applications. Visit my",
        moreWorkSuffix: "to see more.",
        aiResearch: "AI Research",
        researchIntro: "Mechanistic interpretability answers a central question about modern AI: how does a neural network turn an input into an output? By tracing features, circuits, and causal pathways inside a model, it seeks to explain not only what a model does, but why it does it.",
        researchContext: "I worked with a professor and a graduate student from NCKU, a top-200 global university, on a research paper submitted to NeurIPS, which is currently under review. I was in charge of the experiments below.",
        experience: "EXPERIENCE",
        experienceTitle: "Work Experience",
        experienceIntro: "Alongside AI research, a top-performing academic record, and community responsibilities, I work part-time to fully fund my studies and support myself.",
        qualifications: "EDUCATION & CERTIFICATIONS",
        qualificationsIntro: "Alongside my coursework, I actively pursue learning beyond school through independent study, certifications, and hands-on projects.",
        stack: "STACK",
        stackIntro: "Tools and technologies I use across research, software development, and daily work.",
        awards: "AWARDS",
        leadership: "LEADERSHIP & SERVICE",
        outside: "OUTSIDE THE SCREEN",
        outsideIntro: "Life in Tainan means studying, teaching, serving, and building SafetyLink with a thoughtful team.",
        writing: "WRITING",
        contact: "CONTACT",
        contactIntro: "You can contact me using the form or via the links below.",
        send: "Send message",
        sent: "Message sent. Thanks for reaching out.",
      };

  const projects = useMemo(() => getProjectData(t), [t]);
  const translatedJobs = (t("experience.jobs", { returnObjects: true }) as Job[]) || [];
  const jobs = [...staticJobs, ...translatedJobs];
  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFormState("sending");
    const form = event.currentTarget;
    const data = new FormData(form);
    const formspreeUrl = process.env.NEXT_PUBLIC_FORMSPREE_URL;

    if (!formspreeUrl) {
      const subject = encodeURIComponent(`Portfolio message from ${data.get("name") || "a visitor"}`);
      const body = encodeURIComponent(`${data.get("message") || ""}\n\nReply to: ${data.get("email") || ""}`);
      window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
      setFormState("sent");
      return;
    }

    try {
      const response = await fetch(formspreeUrl, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      setFormState(response.ok ? "sent" : "error");
      if (response.ok) form.reset();
    } catch {
      setFormState("error");
    }
  }

  return (
    <main className="portfolio-page">
      <div className="portfolio-container">
        <header className="portfolio-header" id="top">
          <div className="meta-row">
            <span>EST. 2004</span>
            <div className="meta-right">
              <span className="meta-time">
                <span className="time-dot" aria-hidden="true" />
                {time}
              </span>
              <div className="language-control" aria-label="Language">
                <span className="language-label">LANGUAGE</span>
                <button type="button" className={!isZh ? "active" : ""} onClick={() => i18n.changeLanguage("en")}>EN</button>
                <span>/</span>
                <button type="button" className={isZh ? "active" : ""} onClick={() => i18n.changeLanguage("zh-TW")}>繁中</button>
              </div>
            </div>
          </div>

          <div className="intro-block">
            <div className="profile-frame">
              <Image src="/profile.jpg" alt="Von Breznev A. Mendres" fill priority sizes="72px" />
              <span className="online-dot" aria-label="Available for opportunities" />
            </div>
            <div className="intro-name-row">
              <h1>Von Breznev A. Mendres</h1>
              <span className="verified-mark" role="img" aria-label="Meta Verified" title="Meta Verified"><FaCheck aria-hidden="true" /></span>
            </div>
            <p className="intro-role">{copy.introRole}</p>
            <p className="intro-copy intro-lead">{copy.introLead}</p>
            <p className="intro-copy">{copy.intro}</p>

            <div className="intro-actions">
              <div className="social-links" aria-label="Social links">
                <a href="https://github.com/mendresvon" target="_blank" rel="noreferrer">GitHub <FiArrowUpRight /></a>
                <a href="https://www.linkedin.com/in/vonmendres/" target="_blank" rel="noreferrer">LinkedIn <FiArrowUpRight /></a>
                <Link href="/blog">{copy.personalBlog} <FiBookOpen /></Link>
                <a href="https://flowcv.com/resume/p9w1ulfwwo8r" target="_blank" rel="noreferrer">Resume <FiDownload /></a>
              </div>
              <button type="button" className="copy-link" onClick={() => void copyEmail()}>
                {copied ? <FaCheck aria-hidden="true" /> : <FiCopy aria-hidden="true" />}
                {copied ? (isZh ? "已複製" : "Copied") : copy.emailHint}
              </button>
            </div>
          </div>

          <div className="picture-strip" aria-label={copy.picturesTitle}>
            {featuredPictures.map((picture, index) => (
              <motion.figure
                className={`picture-card picture-card-${index + 1}`}
                key={picture.src}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.16 }}
                variants={pictureReveal}
                transition={{ delay: index * 0.06 }}
              >
                <Image src={picture.src} alt={picture.alt} fill sizes="(max-width: 740px) 36vw, (max-width: 1100px) 18vw, 220px" />
              </motion.figure>
            ))}
          </div>
          <div className="picture-caption-row">
            <span>{copy.picturesCaption}</span>
          </div>

        </header>

        <nav className="inspiration-nav" aria-label="Primary navigation">
          <a href="#top" aria-label="Home" title="Home"><FiHome /></a>
          <a href="#work" aria-label="Work" title="Work"><FiGrid /></a>
          <a href="#research" aria-label="Research" title="Research"><FiLayers /></a>
          <a href="#experience" aria-label="Experience" title="Experience"><FiBriefcase /></a>
          <a href="#qualifications" aria-label="Education" title="Education"><FiBookOpen /></a>
          <a href="#stack" aria-label="Stack" title="Stack"><FiCpu /></a>
          <a href="#contact" aria-label="Contact" title="Contact"><FiMail /></a>
        </nav>

        <section className="portfolio-section work-section" id="work">
          <motion.div className="section-intro featured-work-intro" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={reveal}>
            <h2>{copy.workTitle}</h2>
          </motion.div>

          <div className="featured-group research-featured" id="research">
            <div className="featured-group-heading research-heading">
              <div>
                <span className="featured-index">01</span>
                <h3>{copy.aiResearch}</h3>
              </div>
              <div className="research-introduction">
                <p className="research-question">{copy.researchIntro}</p>
                <p className="research-context">{copy.researchContext}</p>
              </div>
            </div>

            <div className="research-layout">
            <div className="research-list">
              <motion.div className="research-row" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal}>
                <span className="research-year">2026</span>
                <div>
                  <h3>Causal neuron ablation · Multimodal model</h3>
                  <p>Measuring how targeted neuron removal changes predictions in a multimodal model and reveals its internal causal structure.</p>
                </div>
              </motion.div>
              <motion.div className="research-row" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal}>
                <span className="research-year">2026</span>
                <div>
                  <h3>Neuron-to-feature mapping</h3>
                  <p>Mapping learned features to individual neurons and neuron groups to make internal representations easier to inspect.</p>
                </div>
              </motion.div>
            </div>

            <div className="research-figure" aria-label="Animated generic neuron diagram" role="img">
              <div className="figure-label">NEURON SIGNAL FLOW</div>
              <motion.svg viewBox="0 0 360 230" fill="none" aria-hidden="true" animate={prefersReducedMotion ? undefined : { opacity: [0.72, 1, 0.72] }} transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut" }}>
                <motion.path d="M56 46C122 46 132 115 196 115M56 115C120 115 135 46 196 46M56 184C122 184 132 115 196 115M196 46C247 46 255 84 304 84M196 115C245 115 258 115 304 115M196 184C247 184 255 146 304 146" stroke="currentColor" strokeWidth="1" animate={prefersReducedMotion ? undefined : { pathLength: [0.82, 1, 0.82] }} transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut" }} />
                {[ [56, 46, 7, 0], [56, 115, 7, 0.3], [56, 184, 7, 0.6], [196, 46, 9, 0.4], [196, 115, 9, 0.8], [196, 184, 9, 1.1], [304, 84, 7, 0.7], [304, 115, 7, 1], [304, 146, 7, 1.3] ].map(([cx, cy, radius, delay]) => (
                  <motion.circle key={`${cx}-${cy}`} cx={cx} cy={cy} r={radius} fill="currentColor" animate={prefersReducedMotion ? undefined : { scale: [0.88, 1.14, 0.88], opacity: [0.55, 1, 0.55] }} transition={{ duration: 2.6, repeat: Infinity, delay, ease: "easeInOut" }} />
                ))}
              </motion.svg>
              <div className="figure-caption"><span>signal in</span><span>signal out</span></div>
            </div>
            </div>
          </div>

          <div className="featured-group favorite-featured" id="favorite-projects">
            <div className="featured-group-heading">
              <div>
                <span className="featured-index">02</span>
                <h3>{copy.favoriteProjects}</h3>
              </div>
              <p>{copy.favoriteProjectsIntro}</p>
            </div>

            {projects[0]?.note && (
              <aside className="filmfolio-note">
                <p className="eyebrow">{isZh ? "個人緣起" : "WHY I BUILT IT"}</p>
                <p>{projects[0].note}</p>
              </aside>
            )}

            <div className="project-stage">
              <div className="dot-grid" aria-hidden="true" />
              {projects.map((project, index) => (
                <motion.article
                  className={`project-item project-item-${index + 1}`}
                  key={project.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.16 }}
                  variants={reveal}
                  transition={{ delay: index * 0.08 }}
                  whileHover={prefersReducedMotion ? undefined : { y: -7 }}
                >
                  <div className="project-media">
                    <Image src={project.imageUrl} alt={`${project.title} project screenshot`} fill sizes="(max-width: 700px) 100vw, 50vw" />
                  </div>
                  <div className="project-copy">
                    <div className="project-index">{project.number}</div>
                    <h3>{project.title}</h3>
                    <p className="project-introduction">{project.introduction}</p>
                    <p className="project-description">{project.description}</p>
                    <div className="project-footer">
                      <div className="project-tags">{project.techStack.join(" · ")}</div>
                      <div className="project-links">
                        {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noreferrer">Live <FiArrowUpRight /></a>}
                        {project.repoUrl && <a href={project.repoUrl} target="_blank" rel="noreferrer">Code <FiArrowUpRight /></a>}
                        {project.videoUrl && <a href={project.videoUrl} target="_blank" rel="noreferrer">Demo <FiArrowUpRight /></a>}
                        {project.blogUrl && <Link href={project.blogUrl}>Blog <FiArrowUpRight /></Link>}
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
            <p className="more-work-note">
              {copy.moreWorkPrefix} <a href="https://github.com/mendresvon" target="_blank" rel="noopener noreferrer">GitHub</a> {copy.moreWorkSuffix}
            </p>
          </div>
        </section>

        <section className="portfolio-section stack-section" id="stack">
          <motion.div className="section-intro" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={reveal}>
            <h2>{copy.stack}</h2>
            <p>{copy.stackIntro}</p>
          </motion.div>

          <div className="stack-list">
            {stackGroups.map((group) => (
              <div className="stack-row" key={group.label}>
                <p className="row-label">{isZh ? group.labelZh : group.label}</p>
                <div className="stack-tools">
                  {group.tools.map(({ name, Icon, tone }) => (
                    <span className={`stack-tool stack-tool-${tone}`} key={name} title={name}>
                      <span className="stack-tool-icon" aria-hidden="true"><Icon /></span>
                      <span className="stack-tool-name">{name}</span>
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="portfolio-section split-section" id="awards">
          <div className="split-column">
            <motion.div className="section-intro section-intro-compact" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={reveal}>
              <h2>{copy.awards}</h2>
            </motion.div>
            <div className="plain-list">
              {awards.map((item) => <div className="plain-list-row" key={item.title}><span>{item.period}</span><div><h3>{item.title}</h3><p>{item.detail}</p></div></div>)}
            </div>
          </div>
          <div className="split-column">
            <motion.div className="section-intro section-intro-compact" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={reveal}>
              <h2>{copy.leadership}</h2>
            </motion.div>
            <div className="plain-list">
              {leadership.map((item) => <div className="plain-list-row" key={item.title}><span>{item.period}</span><div><h3>{item.title}</h3><p>{item.detail}</p></div></div>)}
            </div>
          </div>
        </section>

        <section className="portfolio-section experience-section" id="experience">
          <motion.div className="section-intro" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={reveal}>
            <h2>{copy.experienceTitle}</h2>
            <p>{copy.experienceIntro}</p>
          </motion.div>

          <div className="experience-path">
            {jobs.map((job, index) => (
              <motion.details className="experience-node" key={`${job.company}-${job.role}`} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }} variants={reveal} transition={{ delay: index * 0.05 }}>
                <summary className="experience-summary">
                  <span className="experience-period">{isZh && index > 0 ? job.period.replace("Oct", "10月").replace("Jan", "1月").replace("Present", "至今") : job.period}</span>
                  <span className="experience-marker" aria-hidden="true"><span>{String(index + 1).padStart(2, "0")}</span></span>
                  <span className="experience-summary-copy">
                    <span className="experience-role">{job.role}</span>
                    <span className="experience-company">{job.company}</span>
                  </span>
                </summary>
                <div className="experience-popover">
                  <ul>{job.description.map((item) => <li key={item}>{item}</li>)}</ul>
                </div>
              </motion.details>
            ))}
          </div>
        </section>

        <section className="portfolio-section qualification-section" id="qualifications">
          <motion.div className="section-intro" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={reveal}>
            <h2>{copy.qualifications}</h2>
            <p>{copy.qualificationsIntro}</p>
          </motion.div>

          <div className="qualification-grid">
            <div>
              <p className="row-label">EDUCATION</p>
              <h3>{isZh ? "南臺科技大學" : "Southern Taiwan University of Science and Technology"}</h3>
              <p>{isZh ? "資訊工程學系學士 · 2027" : "B.S. Computer Science and Information Engineering · 2027"}</p>
              <p className="qualification-note">{isZh ? "系排名 #1 / 132" : "Department rank #1 / 132"}</p>
            </div>
            <div>
              <p className="row-label">{isZh ? "校外課程" : "EXTERNAL COURSEWORK"}</p>
              <p className="qualification-provider">{isZh ? "哈佛大學（線上課程）" : "Harvard University (online coursework)"}</p>
              <div className="link-stack">
                <a href="https://certificates.cs50.io/ca725574-9d0f-48d9-bd78-19fa78241779.pdf?size=letter" target="_blank" rel="noreferrer">CS50x · Computer Science <FiArrowUpRight /></a>
                <a href="https://certificates.cs50.io/af766a85-6434-42d1-b271-e04b39ccb6a1.pdf?size=letter" target="_blank" rel="noreferrer">CS50T · Understanding Technology <FiArrowUpRight /></a>
                <a href="https://certificates.cs50.io/e58bc053-4269-4012-8be6-41dd1d92af68.pdf?size=letter" target="_blank" rel="noreferrer">CS50P · Programming with Python <FiArrowUpRight /></a>
              </div>
            </div>
            <div>
              <p className="row-label">CERTIFICATIONS</p>
              <div className="link-stack">
                <a href="https://www.coursera.org/account/accomplishments/professional-cert/ZFBSVP8GUL2D" target="_blank" rel="noreferrer">Google IT Support <FiArrowUpRight /></a>
                <a href="https://www.coursera.org/account/accomplishments/specialization/MZ3HK8DAZD3F" target="_blank" rel="noreferrer">IBM Software Engineering <FiArrowUpRight /></a>
                <a href="https://certificates.simplicdn.net/share/8262965_86191031745763809351.pdf" target="_blank" rel="noreferrer">Google Cloud · Generative AI <FiArrowUpRight /></a>
              </div>
            </div>
          </div>

        </section>

        <section className="portfolio-section contact-section" id="contact">
          <motion.div className="section-intro" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={reveal}>
            <h2>{copy.contact}</h2>
            <p>{copy.contactIntro}</p>
          </motion.div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="contact-fields">
              <label><span>Name</span><input name="name" type="text" placeholder="Your name" required /></label>
              <label><span>Email</span><input name="email" type="email" placeholder="you@example.com" required /></label>
              <label><span>Message</span><textarea name="message" placeholder="What would you like to talk about?" rows={4} required /></label>
            </div>
            <div className="contact-submit-row">
              <button className="send-button" type="submit" disabled={formState === "sending"}>
                {formState === "sending" ? "Sending…" : formState === "sent" ? <><FaCheck /> {copy.sent}</> : formState === "error" ? "Something went wrong" : <>{copy.send} <FiArrowUpRight /></>}
              </button>
              <span className="enter-hint">or ↵ Enter to send</span>
            </div>
          </form>

          <div className="contact-links-list">
            <button type="button" className="contact-link-row" onClick={() => void copyEmail()}>
              <span className="contact-link-name"><FiMail aria-hidden="true" /> Email</span>
              <span className="contact-link-value">{email}</span>
              <FiCopy aria-hidden="true" />
            </button>
            <a className="contact-link-row" href="https://github.com/mendresvon" target="_blank" rel="noreferrer">
              <span className="contact-link-name"><FaGithub aria-hidden="true" /> GitHub</span>
              <span className="contact-link-value">/mendresvon</span>
              <FiArrowUpRight aria-hidden="true" />
            </a>
            <a className="contact-link-row" href="https://www.instagram.com/mendrezzzzz/" target="_blank" rel="noreferrer">
              <span className="contact-link-name"><FaInstagram aria-hidden="true" /> Instagram</span>
              <span className="contact-link-value">@mendrezzzzz</span>
              <FiArrowUpRight aria-hidden="true" />
            </a>
            <a className="contact-link-row" href="https://www.linkedin.com/in/vonmendres/" target="_blank" rel="noreferrer">
              <span className="contact-link-name"><FaLinkedin aria-hidden="true" /> LinkedIn</span>
              <span className="contact-link-value">/in/vonmendres</span>
              <FiArrowUpRight aria-hidden="true" />
            </a>
            <a className="contact-link-row" href="https://flowcv.com/resume/p9w1ulfwwo8r" target="_blank" rel="noreferrer">
              <span className="contact-link-name"><FiDownload aria-hidden="true" /> Resume</span>
              <span className="contact-link-value">FlowCV</span>
              <FiArrowUpRight aria-hidden="true" />
            </a>
          </div>
        </section>

        <footer className="portfolio-footer">
          <span>© {new Date().getFullYear()} Von Breznev A. Mendres</span>
          <span>{copy.basedIn}</span>
          <a href="#top">Back to top ↑</a>
        </footer>
      </div>
    </main>
  );
}
