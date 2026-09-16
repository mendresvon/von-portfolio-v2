"use client";

import Image from "next/image";
import Link from "next/link";
import { FormEvent, useEffect, useMemo, useRef, useState } from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { useTranslation } from "react-i18next";
import { FaCheck, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import {
  FiActivity,
  FiAward,
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
  FiFolder,
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

function FilmfolioNote({ note, isZh }: { note: string; isZh: boolean }) {
  const noteRef = useRef<HTMLElement | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [isPinned, setIsPinned] = useState(false);
  const [isHoverDismissed, setIsHoverDismissed] = useState(false);
  const [isFocusDismissed, setIsFocusDismissed] = useState(false);
  const isExpanded =
    isPinned ||
    (isHovered && !isHoverDismissed) ||
    (isFocused && !isFocusDismissed);

  useEffect(() => {
    if (!isPinned) return;

    const closeOnOutsideClick = (event: MouseEvent) => {
      if (noteRef.current && !noteRef.current.contains(event.target as Node)) {
        setIsPinned(false);
        setIsHoverDismissed(true);
        setIsFocusDismissed(true);
      }
    };

    document.addEventListener("click", closeOnOutsideClick);
    return () => document.removeEventListener("click", closeOnOutsideClick);
  }, [isPinned]);

  const togglePinned = () => {
    if (isPinned) {
      setIsPinned(false);
      setIsHoverDismissed(true);
      setIsFocusDismissed(true);
      return;
    }

    setIsPinned(true);
    setIsHoverDismissed(false);
    setIsFocusDismissed(false);
  };

  return (
    <aside
      className={`filmfolio-note${isExpanded ? " is-expanded" : ""}`}
      ref={noteRef}
      onPointerEnter={() => {
        setIsHovered(true);
        setIsHoverDismissed(false);
      }}
      onPointerLeave={() => {
        setIsHovered(false);
        setIsHoverDismissed(false);
      }}
    >
      <button
        type="button"
        className="filmfolio-note-toggle"
        aria-expanded={isExpanded}
        aria-controls="filmfolio-note-details"
        onClick={togglePinned}
        onFocus={() => {
          setIsFocused(true);
          setIsFocusDismissed(false);
        }}
        onBlur={() => {
          setIsFocused(false);
          setIsFocusDismissed(false);
        }}
      >
        <span className="eyebrow">{isZh ? "個人緣起" : "WHY I BUILT IT"}</span>
        <span className="filmfolio-note-summary">
          {isZh ? "我為妹妹打造了 FilmFolio…" : "I built it for my baby sister…"}
          <span className="filmfolio-note-action">
            {isPinned ? (isZh ? "收起" : "See less") : (isZh ? "查看更多" : "See more")}
          </span>
        </span>
      </button>
      <p id="filmfolio-note-details" className="filmfolio-note-full" aria-hidden={!isExpanded}>
        {note}
      </p>
    </aside>
  );
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
    periodZh: "2026",
    title: "1st Place · National English Social Solutions Contest",
    titleZh: "第一名 · 全國英語社會方案競賽",
    detail: "Proposed SafetyLink with Amber and Jerome, an autonomous one-button RF alert concept for seniors living alone in Taiwan.",
    detailZh: "與 Amber 和 Jerome 共同提出 SafetyLink，一套為臺灣獨居長者設計的單鍵 RF 求助警報概念。",
  },
  {
    period: "2023 — NOW",
    periodZh: "2023 — 至今",
    title: "Academic Elite Award · STUST",
    titleZh: "學業菁英獎 · 南臺科技大學",
    detail: "Recognized for academic performance while completing a Computer Science degree in Mandarin.",
    detailZh: "在以中文修讀資訊工程學位期間，因學業表現優異而獲獎。",
  },
  {
    period: "USJ-R",
    periodZh: "USJ-R",
    title: "Valedictorian",
    titleZh: "畢業生代表",
    detail: "Graduated as valedictorian of my class at the University of San Jose–Recoletos.",
    detailZh: "以班級第一名身分畢業於聖荷西－雷科萊多大學（University of San Jose–Recoletos）。",
  },
];

const leadership = [
  {
    period: "2026 — NOW",
    periodZh: "2026 — 至今",
    title: "Deputy Secretary-General · Tainan Youth Center",
    titleZh: "臺南青年中心副總幹事",
    detail: "Helping organize youth programs and community initiatives in Tainan.",
    detailZh: "協助籌辦臺南的青年活動與社區計畫。",
  },
  {
    period: "2016 — 2020",
    periodZh: "2016 — 2020",
    title: "S2 General Scribe · USJ-R Senior Scouts",
    titleZh: "USJ-R Senior Scouts S2 總記錄員",
    detail: "Served as General Scribe in the USJ-R Senior Scouts, focused on service, discipline, and community.",
    detailZh: "在 USJ-R Senior Scouts 擔任總記錄員，專注於服務、紀律與社群參與。",
  },
  {
    period: "2023 — NOW",
    periodZh: "2023 — 至今",
    title: "Acolyte, Lector & Psalmist · Sacred Heart Church",
    titleZh: "聖心堂輔祭、讀經員與領唱員",
    detail: "Contributing to the life of the Filipino community in Tainan.",
    detailZh: "參與並服務臺南菲律賓社群的教會生活。",
  },
];

const featuredPictures = [
  {
    src: "/images/featured/von-and-zoe.jpg",
    alt: "Von with his baby sister Zoe",
    altZh: "Von 與妹妹 Zoe 的合照",
    width: 2134,
    height: 2134,
  },
  {
    src: "/images/featured/fr-jean.jpg",
    alt: "A large community group photo in a church",
    altZh: "教堂內的大型團體合照",
    width: 1477,
    height: 1108,
  },
  {
    src: "/images/featured/more-safetylink.jpg",
    alt: "Three people holding SafetyLink certificates",
    altZh: "三人手持 SafetyLink 證書",
    width: 1200,
    height: 2134,
  },
  {
    src: "/images/featured/despidida.jpg",
    alt: "A group gathered outside a restaurant in Tainan",
    altZh: "一群人在臺南餐廳外的合照",
    width: 1477,
    height: 1108,
  },
  {
    src: "/images/featured/family.jpg",
    alt: "A family selfie",
    altZh: "家庭自拍照",
    width: 1422,
    height: 2134,
  },
];

const stackGroups = [
  {
    label: "AI STACK / AGENTIC ENGINEERING",
    labelZh: "AI 技術堆疊 / Agentic Engineering",
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
    labelZh: "產品與全端開發",
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
    labelZh: "雲端與軟體交付",
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
    label: "DATABASE, MESSAGING, & OTHER TOOLS",
    labelZh: "資料庫、訊息傳遞與其他工具",
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
        language: "語言",
        primaryNavigation: "主要導覽",
        available: "目前開放工作機會",
        socialLinks: "社群連結",
        resume: "履歷",
        projectImageAlt: "專案畫面",
        linkLive: "線上版",
        linkCode: "程式碼",
        linkDemo: "示範影片",
        linkBlog: "文章",
        neuronSignalFlow: "神經元訊號流",
        neuronDiagramAlt: "動態神經元示意圖",
        signalIn: "訊號輸入",
        signalOut: "訊號輸出",
        education: "學歷",
        degree: "資訊工程學系學士 · 2027",
        departmentRank: "系排名 #1 / 132",
        externalCoursework: "校外課程",
        courseProvider: "哈佛大學（線上課程）",
        certifications: "專業認證",
        courseComputerScience: "電腦科學",
        courseUnderstandingTechnology: "科技理解",
        courseProgrammingPython: "Python 程式設計",
        contactName: "姓名",
        contactEmail: "電子郵件",
        contactMessage: "訊息",
        sending: "傳送中…",
        error: "發生錯誤",
        enterHint: "或按下 ↵ Enter 傳送",
        backToTop: "回到頂端 ↑",
        copied: "已複製",
        basedIn: "現居臺南，臺灣",
        introRole: "資訊工程 · 軟體 · AI 研究",
        introLead: "嗨，我是 Von，一名來自菲律賓、目前在臺灣求學的資訊工程學生。",
        intro: "我來到臺灣時完全不會說中文。現在，我所有課程都以中文授課，並在全中文授課的資訊工程系中排名第一。",
        emailHint: "按下 C 複製我的電子郵件",
        personalBlog: "個人部落格",
        work: "作品",
        workTitle: "精選作品",
        picturesTitle: "精選照片",
        picturesCaption: "回憶剪影",
        favoriteProjects: "喜愛的專案",
        favoriteProjectsIntro: "從雲端系統到嵌入式硬體，這些是我投入最多心力的幾個專案。",
        moreWorkPrefix: "我打造軟體專案、雲端系統與 AI 應用。歡迎造訪我的",
        moreWorkSuffix: "，查看更多作品。",
        aiResearch: "AI 研究",
        researchIntro: "機制可解釋性研究探討現代 AI 的核心問題：神經網路如何將輸入轉化為輸出？透過追蹤模型內部的特徵、迴路與因果路徑，研究者不僅試圖理解模型做了什麼，也希望解釋它為什麼這麼做。",
        researchContext: "我與來自國立成功大學（NCKU）的一位教授及一位研究生合作撰寫一篇投稿至 NeurIPS 的研究論文；NCKU 是全球排名前 200 名的大學，目前論文正在審查中。我負責以下實驗。",
        experience: "經歷",
        experienceTitle: "工作經歷",
        experienceIntro: "除了進行 AI 研究、維持優異的學業成績並承擔社群責任外，我也透過兼職工作全額負擔學業與生活開支。",
        qualifications: "學歷與專業認證",
        qualificationsIntro: "除了課堂學習，我也主動透過自學、認證與實作，持續尋找校外的學習機會。",
        stack: "技術堆疊",
        stackIntro: "我在研究、軟體開發與日常工作中使用的工具與技術。",
        awards: "獎項",
        leadership: "領導與服務",
        outside: "螢幕之外",
        outsideIntro: "在臺南生活，意味著學習、教學、服務，也和一群用心的夥伴一起打造 SafetyLink。",
        writing: "文章",
        contact: "聯絡",
        contactIntro: "你可以使用表單，或透過下方連結聯絡我。",
        send: "傳送訊息",
        sent: "訊息已送出，謝謝你。",
      }
    : {
        language: "LANGUAGE",
        primaryNavigation: "Primary navigation",
        available: "Available for opportunities",
        socialLinks: "Social links",
        resume: "Resume",
        projectImageAlt: "project screenshot",
        linkLive: "Live",
        linkCode: "Code",
        linkDemo: "Demo",
        linkBlog: "Blog",
        neuronSignalFlow: "NEURON SIGNAL FLOW",
        neuronDiagramAlt: "Animated generic neuron diagram",
        signalIn: "signal in",
        signalOut: "signal out",
        education: "EDUCATION",
        degree: "B.S. Computer Science and Information Engineering · 2027",
        departmentRank: "Department rank #1 / 132",
        externalCoursework: "EXTERNAL COURSEWORK",
        courseProvider: "Harvard University (online coursework)",
        certifications: "CERTIFICATIONS",
        courseComputerScience: "Computer Science",
        courseUnderstandingTechnology: "Understanding Technology",
        courseProgrammingPython: "Programming with Python",
        contactName: "Name",
        contactEmail: "Email",
        contactMessage: "Message",
        sending: "Sending…",
        error: "Something went wrong",
        enterHint: "or ↵ Enter to send",
        backToTop: "Back to top ↑",
        copied: "Copied",
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

  const navItems = [
    { href: "#top", label: isZh ? "首頁" : "Home", Icon: FiHome },
    { href: "#work", label: copy.workTitle, Icon: FiGrid },
    { href: "#research", label: copy.aiResearch, Icon: FiLayers },
    { href: "#favorite-projects", label: copy.favoriteProjects, Icon: FiFolder },
    { href: "#stack", label: copy.stack, Icon: FiCpu },
    { href: "#awards", label: copy.awards, Icon: FiAward },
    { href: "#experience", label: copy.experienceTitle, Icon: FiBriefcase },
    { href: "#qualifications", label: copy.qualifications, Icon: FiBookOpen },
    { href: "#contact", label: copy.contact, Icon: FiMail },
  ];

  const researchItems = isZh
    ? [
        {
          year: "2026",
          title: "因果神經元消融 · 多模態模型",
          description: "測量針對性移除神經元如何改變多模態模型的預測，並揭示其內部的因果結構。",
        },
        {
          year: "2026",
          title: "神經元－特徵映射",
          description: "將模型學得的特徵對應至個別神經元與神經元群組，讓內部表徵更容易檢視。",
        },
      ]
    : [
        {
          year: "2026",
          title: "Causal neuron ablation · Multimodal model",
          description: "Measuring how targeted neuron removal changes predictions in a multimodal model and reveals its internal causal structure.",
        },
        {
          year: "2026",
          title: "Neuron-to-feature mapping",
          description: "Mapping learned features to individual neurons and neuron groups to make internal representations easier to inspect.",
        },
      ];

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
              <div className="language-control" aria-label={copy.language}>
                <span className="language-label">{copy.language}</span>
                <button type="button" className={!isZh ? "active" : ""} onClick={() => i18n.changeLanguage("en")}>EN</button>
                <span>/</span>
                <button type="button" className={isZh ? "active" : ""} onClick={() => i18n.changeLanguage("zh-TW")}>繁中</button>
              </div>
            </div>
          </div>

          <div className="intro-block">
            <div className="profile-frame">
              <Image src="/profile.jpg" alt={isZh ? "馬盛中" : "Von Breznev A. Mendres"} fill priority sizes="72px" />
              <span className="online-dot" aria-label={copy.available} />
            </div>
            <div className="intro-name-row">
              <h1>Von Breznev A. Mendres</h1>
              <span className="verified-mark" role="img" aria-label="Meta Verified" title="Meta Verified"><FaCheck aria-hidden="true" /></span>
            </div>
            <p className="intro-role">{copy.introRole}</p>
            <p className="intro-copy intro-lead">{copy.introLead}</p>
            <p className="intro-copy">{copy.intro}</p>

            <div className="intro-actions">
              <div className="social-links" aria-label={copy.socialLinks}>
                <a href="https://github.com/mendresvon" target="_blank" rel="noreferrer">GitHub <FiArrowUpRight /></a>
                <a href="https://www.linkedin.com/in/vonmendres/" target="_blank" rel="noreferrer">LinkedIn <FiArrowUpRight /></a>
                <Link href="/blog">{copy.personalBlog} <FiBookOpen /></Link>
                <a href="https://flowcv.com/resume/p9w1ulfwwo8r" target="_blank" rel="noreferrer">{copy.resume} <FiDownload /></a>
              </div>
              <button type="button" className="copy-link" onClick={() => void copyEmail()}>
                {copied ? <FaCheck aria-hidden="true" /> : <FiCopy aria-hidden="true" />}
                {copied ? copy.copied : copy.emailHint}
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
                <Image src={picture.src} alt={isZh ? picture.altZh : picture.alt} fill sizes="(max-width: 740px) 36vw, (max-width: 1100px) 18vw, 220px" />
              </motion.figure>
            ))}
          </div>
          <div className="picture-caption-row">
            <span>{copy.picturesCaption}</span>
          </div>

        </header>

        <nav className="inspiration-nav" aria-label={copy.primaryNavigation}>
          {navItems.map(({ href, label, Icon }) => (
            <a href={href} key={href} aria-label={label}>
              <Icon aria-hidden="true" />
              <span className="inspiration-nav-tooltip" aria-hidden="true">{label}</span>
            </a>
          ))}
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
              {researchItems.map((item) => (
                <motion.div className="research-row" key={item.title} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal}>
                  <span className="research-year">{item.year}</span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="research-figure" aria-label={copy.neuronDiagramAlt} role="img">
              <div className="figure-label">{copy.neuronSignalFlow}</div>
              <motion.svg viewBox="0 0 360 230" fill="none" aria-hidden="true" animate={prefersReducedMotion ? undefined : { opacity: [0.72, 1, 0.72] }} transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut" }}>
                <motion.path d="M56 46C122 46 132 115 196 115M56 115C120 115 135 46 196 46M56 184C122 184 132 115 196 115M196 46C247 46 255 84 304 84M196 115C245 115 258 115 304 115M196 184C247 184 255 146 304 146" stroke="currentColor" strokeWidth="1" animate={prefersReducedMotion ? undefined : { pathLength: [0.82, 1, 0.82] }} transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut" }} />
                {[ [56, 46, 7, 0], [56, 115, 7, 0.3], [56, 184, 7, 0.6], [196, 46, 9, 0.4], [196, 115, 9, 0.8], [196, 184, 9, 1.1], [304, 84, 7, 0.7], [304, 115, 7, 1], [304, 146, 7, 1.3] ].map(([cx, cy, radius, delay]) => (
                  <motion.circle key={`${cx}-${cy}`} cx={cx} cy={cy} r={radius} fill="currentColor" animate={prefersReducedMotion ? undefined : { scale: [0.88, 1.14, 0.88], opacity: [0.55, 1, 0.55] }} transition={{ duration: 2.6, repeat: Infinity, delay, ease: "easeInOut" }} />
                ))}
              </motion.svg>
              <div className="figure-caption"><span>{copy.signalIn}</span><span>{copy.signalOut}</span></div>
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
                    <Image src={project.imageUrl} alt={project.title + " " + copy.projectImageAlt} fill sizes="(max-width: 700px) 100vw, 50vw" />
                  </div>
                  <div className="project-copy">
                    <div className="project-index">{project.number}</div>
                    <h3>{project.title}</h3>
                    <p className="project-introduction">{project.introduction}</p>
                    {project.note && (
                      <FilmfolioNote note={project.note} isZh={isZh} />
                    )}
                    <p className="project-description">{project.description}</p>
                    <div className="project-footer">
                      <div className="project-tags">{project.techStack.join(" · ")}</div>
                      <div className="project-links">
                        {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noreferrer">{copy.linkLive} <FiArrowUpRight /></a>}
                        {project.repoUrl && <a href={project.repoUrl} target="_blank" rel="noreferrer">{copy.linkCode} <FiArrowUpRight /></a>}
                        {project.videoUrl && <a href={project.videoUrl} target="_blank" rel="noreferrer">{copy.linkDemo} <FiArrowUpRight /></a>}
                        {project.blogUrl && <Link href={project.blogUrl}>{copy.linkBlog} <FiArrowUpRight /></Link>}
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
            <p className="more-work-note">
              {isZh ? (
                <>{copy.moreWorkPrefix} <a href="https://github.com/mendresvon" target="_blank" rel="noopener noreferrer">GitHub</a>{copy.moreWorkSuffix}</>
              ) : (
                <>{copy.moreWorkPrefix} <a href="https://github.com/mendresvon" target="_blank" rel="noopener noreferrer">GitHub</a> {copy.moreWorkSuffix}</>
              )}
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
              {awards.map((item) => <div className="plain-list-row" key={item.title}><span>{isZh ? item.periodZh : item.period}</span><div><h3>{isZh ? item.titleZh : item.title}</h3><p>{isZh ? item.detailZh : item.detail}</p></div></div>)}
            </div>
          </div>
          <div className="split-column">
            <motion.div className="section-intro section-intro-compact" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={reveal}>
              <h2>{copy.leadership}</h2>
            </motion.div>
            <div className="plain-list">
              {leadership.map((item) => <div className="plain-list-row" key={item.title}><span>{isZh ? item.periodZh : item.period}</span><div><h3>{isZh ? item.titleZh : item.title}</h3><p>{isZh ? item.detailZh : item.detail}</p></div></div>)}
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
                  <span className="experience-period">{isZh ? job.period.replace("Oct", "10月").replace("Jan", "1月").replace("Present", "至今") : job.period}</span>
                  <span className="experience-marker" aria-hidden="true"><span>{String(index + 1).padStart(2, "0")}</span></span>
                  <span className="experience-summary-copy">
                    <span className="experience-role">{job.role}</span>
                    <span className="experience-company">{job.company}</span>
                  </span>
                </summary>
                <div className="experience-detail-row">
                  <div className="experience-popover">
                    <ul>{job.description.map((item) => <li key={item}>{item}</li>)}</ul>
                  </div>
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
              <p className="row-label">{copy.education}</p>
              <h3>{isZh ? "南臺科技大學" : "Southern Taiwan University of Science and Technology"}</h3>
              <p>{copy.degree}</p>
              <p className="qualification-note">{copy.departmentRank}</p>
            </div>
            <div>
              <p className="row-label">{copy.externalCoursework}</p>
              <p className="qualification-provider">{copy.courseProvider}</p>
              <div className="link-stack">
                <a href="https://certificates.cs50.io/ca725574-9d0f-48d9-bd78-19fa78241779.pdf?size=letter" target="_blank" rel="noreferrer">CS50x · {copy.courseComputerScience} <FiArrowUpRight /></a>
                <a href="https://certificates.cs50.io/af766a85-6434-42d1-b271-e04b39ccb6a1.pdf?size=letter" target="_blank" rel="noreferrer">CS50T · {copy.courseUnderstandingTechnology} <FiArrowUpRight /></a>
                <a href="https://certificates.cs50.io/e58bc053-4269-4012-8be6-41dd1d92af68.pdf?size=letter" target="_blank" rel="noreferrer">CS50P · {copy.courseProgrammingPython} <FiArrowUpRight /></a>
              </div>
            </div>
            <div>
              <p className="row-label">{copy.certifications}</p>
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
              <label className="contact-field">
                <input name="name" type="text" autoComplete="name" placeholder=" " required />
                <span>{copy.contactName}</span>
              </label>
              <label className="contact-field">
                <input name="email" type="email" autoComplete="email" placeholder=" " required />
                <span>{copy.contactEmail}</span>
              </label>
              <label className="contact-field contact-message-field">
                <textarea name="message" placeholder=" " rows={4} required />
                <span>{copy.contactMessage}</span>
              </label>
            </div>
            <div className="contact-submit-row">
              <button className="send-button" type="submit" disabled={formState === "sending"}>
                {formState === "sending" ? copy.sending : formState === "sent" ? <><FaCheck /> {copy.sent}</> : formState === "error" ? copy.error : copy.send}
              </button>
              <span className="enter-hint">{copy.enterHint}</span>
            </div>
          </form>

          <div className="contact-links-list">
            <button type="button" className="contact-link-row" onClick={() => void copyEmail()}>
              <span className="contact-link-name"><FiMail aria-hidden="true" /> {copy.contactEmail}</span>
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
              <span className="contact-link-name"><FiDownload aria-hidden="true" /> {copy.resume}</span>
              <span className="contact-link-value">FlowCV</span>
              <FiArrowUpRight aria-hidden="true" />
            </a>
          </div>
        </section>

        <footer className="portfolio-footer">
          <span>© {new Date().getFullYear()} Von Breznev A. Mendres</span>
          <span>{copy.basedIn}</span>
          <a href="#top">{copy.backToTop}</a>
        </footer>
      </div>
    </main>
  );
}
