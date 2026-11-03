/* ============================================================================
   SITE DATA — every word on the site lives here.
   ========================================================================== */

export const profile = {
  name: "Alif Rahman",
  fullName: "Alif Rahman Maulana",
  handle: "alip_rahman",
  role: "Backend Developer",
  tagline: "Professional Backend Developer",
  location: "Semarang, Indonesia",
  timezone: "GMT+7",
  bio: "I am a backend developer based in Semarang, Indonesia. I specialize in REST APIs, database architecture, and RAG pipelines, working across Python/FastAPI, Node.js/NestJS, and Laravel with PostgreSQL, Redis, and Qdrant vector databases. I care about software that is fast, secure, and clean.",
  shortBio:
    "Backend developer building REST APIs, database systems, and RAG pipelines with Python/FastAPI, PostgreSQL, Redis, and Qdrant.",
  available: true,
  email: "alifrahman.workwithme@gmail.com",
  altEmail: "rahmanalifm21@gmail.com",
  resume: "/Alif Rahman - Full Stack Dev.pdf",
  avatar: "/avatar.png",
  links: {
    github: "https://github.com/al1prahman",
    linkedin: "https://www.linkedin.com/in/alifrahman21/",
    email: "mailto:alifrahman.workwithme@gmail.com",
    whatsapp: "https://wa.me/",
  },
};

export const stats = [
  { value: "3+", label: "Years shipping" },
  { value: "5+", label: "Projects delivered" },
  { value: "A.Md.Kom", label: "Informatics Engineering" },
  { value: "GMT+7", label: "Semarang, Indonesia" },
];

export type Project = {
  slug: string;
  title: string;
  category: string;
  year: string;
  summary: string;
  description: string;
  features: string[];
  stack: string[];
  role: string;
  status: string;
  image?: string;
  github?: string;
  gallery?: { src: string; caption: string }[];
};

export const projects: Project[] = [
  {
    slug: "preschool-admin",
    title: "Integrated Preschool Administration System",
    category: "Web Application",
    year: "2026",
    summary:
      "Administration and student-monitoring platform for a preschool, covering enrollment, attendance, payments, and developmental reporting in one system.",
    description:
      "A complete back-office for early-childhood education. The system replaces paper-based administration with a single web platform: student enrollment and records, daily attendance monitoring, tuition billing with payment tracking, and developmental progress reports that teachers can generate per child. Built around role-based access for administrators, teachers, and parents, with a dashboard that surfaces the numbers that matter: enrollment trends, outstanding payments, and attendance anomalies.",
    features: [
      "Student enrollment, records & classroom assignment",
      "Daily attendance monitoring with anomaly flags",
      "Tuition billing, invoicing & payment tracking",
      "Developmental progress reports per child",
      "Role-based dashboards: admin, teacher, parent",
    ],
    stack: ["Laravel", "MySQL", "Tailwind CSS", "JavaScript"],
    role: "Backend Developer",
    status: "Production",
    image: "/projects/preschool.jpg",
  },
  {
    slug: "scrapedesk",
    title: "ScrapeDesk: Multi-Source Scraping Platform",
    category: "Web Application",
    year: "2026",
    summary:
      "Scraping-as-a-service platform that turns any web page, JSON API, RSS feed, or sitemap into structured data through a dashboard or REST API, with scheduling, webhooks, and change detection built in.",
    description:
      "A multi-source data pipeline that turns the web into structured data without writing scraper code. Users define a job once — target URL, source type, and extraction rules — then run it on demand or on a cron schedule and consume results through the dashboard, CSV export, or a public REST API. The engine dispatches across four source types behind one interface: web pages rendered in a real browser with CSS selector, container-scoped, or LLM-powered extraction; JSON APIs mapped through dot-path field selectors with page, cursor, and link pagination; RSS/Atom feeds parsed into standard columns; and sitemap crawls that discover URLs through sitemap indexes and scrape each page. Everything around the engine is production plumbing: a pg-boss job queue living inside Postgres, automatic retry with exponential backoff, per-domain politeness delays, cookie injection and proxy rotation for login-walled and rate-limited targets, HMAC-signed webhooks, per-user daily quotas with Row Level Security isolation, and set-based change detection that diffs every run against the previous one.",
    features: [
      "Four source types in one pipeline: web pages, JSON APIs, RSS/Atom feeds, and sitemap crawls",
      "Three extraction modes: CSS selectors, container-scoped fields, and LLM extraction via any OpenAI-compatible endpoint",
      "API pagination by page number, cursor, or next link, with dot-path field mapping including array indexes",
      "Cron scheduling with a self-terminating chain, plus HMAC-SHA256 signed webhooks on run completion",
      "Automatic retry with exponential backoff and per-domain politeness delays",
      "Cookie injection, round-robin proxy rotation, and headless stealth for protected targets",
      "Set-based change detection diffing each run against the previous completed run",
      "Post-extraction data transforms: regex, number coercion, replace, case, and template columns",
      "Public REST API with hashed keys, per-user daily quota, and Row Level Security data isolation",
      "Realtime run status, CSV/JSON export, OpenAPI spec, Docker Compose, and 78 unit tests in CI",
    ],
    stack: ["Next.js 15", "TypeScript", "Supabase", "PostgreSQL", "pg-boss", "Playwright", "Tailwind CSS"],
    role: "Backend Developer",
    status: "Production",
    image: "/projects/scrapedesk-dash.png",
    github: "https://github.com/al1prahman/scrape-desk",
    gallery: [
      {
        src: "/projects/scrape-overview.png",
        caption:
          "Landing page stating the product promise, with entry points to the docs and signup.",
      },
      {
        src: "/projects/scrape-job1.png",
        caption:
          "Job detail with run history, live status, and row counts, plus the source-type and extraction-mode selectors.",
      },
      {
        src: "/projects/scrape-job2.png",
        caption:
          "Job configuration: pagination modes, infinite scroll, cookie injection, proxy rotation, cron schedule, and webhook URL.",
      },
      {
        src: "/projects/scrape-api.png",
        caption:
          "API key management: plaintext shown once at creation, stored as SHA-256 hashes, revocable per key.",
      },
    ],
  },
  {
    slug: "internship-app",
    title: "SITAMA: Internship Management Platform",
    category: "Web + Mobile",
    year: "2025",
    summary:
      "Internship (PKL) management platform with a companion mobile app covering applications, placements, logbooks, and supervisor evaluations, end to end.",
    description:
      "SITAMA digitizes the entire internship lifecycle for a campus program. Students apply and get placed through the web platform, then log daily activities from the mobile app. Supervisors evaluate logbooks, lecturers monitor placements across partner institutions, and administrators manage partners, quotas, and reporting. The system replaced a spreadsheet-and-WhatsApp workflow with auditable state from application to final assessment.",
    features: [
      "Online application & placement workflow",
      "Daily digital logbook with supervisor sign-off",
      "Evaluation & final assessment scoring",
      "Partner institution & quota management",
      "Cross-platform mobile app (Flutter) for students",
    ],
    stack: ["Laravel", "Flutter", "Dart", "Firebase", "MySQL"],
    role: "Backend Developer",
    status: "Production",
    image: "/projects/sitama.jpg",
  },
  {
    slug: "curio-ai",
    title: "CurioAI: Enterprise RAG Knowledge Platform",
    category: "AI / Web Application",
    year: "2026",
    summary:
      "Knowledge management platform where teams upload documents and ask questions in natural language. Retrieval-augmented generation grounds every answer in the uploaded files, with source citations.",
    description:
      "CurioAI turns a company's document library into a searchable knowledge base. Users upload PDF, DOCX, or TXT files, which the system extracts, chunks, embeds, and indexes into a vector database. When someone asks a question in the chat interface, the platform retrieves the most relevant passages and sends them as context to a large language model, so the answer comes from the company's own documents rather than the model's training data. Every response includes citations showing which document and page the information came from. The backend handles the full pipeline: file validation and checksumming, text extraction with page tracking, recursive chunking with overlap, local embedding generation with sentence-transformers, vector indexing in Qdrant, and prompt construction with conversation history. Access control runs at the document level, so employees only see and query documents they are authorized to access. The system also includes JWT authentication with refresh tokens, role-based permissions across three roles, Redis-backed rate limiting and caching, audit logging, and analytics. Built with FastAPI and Next.js, deployed with Docker Compose across PostgreSQL, Qdrant, Redis, and MinIO.",
    features: [
      "RAG pipeline: extraction, chunking, embedding, vector indexing, and grounded generation",
      "Document-level permissions with role-based access control (admin, manager, employee)",
      "JWT authentication with refresh tokens and Argon2 password hashing",
      "Multi-format upload: PDF, DOCX, TXT with SHA-256 checksums and deduplication",
      "Source citations with document name, page number, and relevance score",
      "Conversation memory across sessions with message history",
      "Redis-backed rate limiting (login, upload, chat) and analytics caching",
      "Provider-agnostic LLM layer: Gemini, OpenAI, Groq, OpenRouter, or custom endpoint",
      "31 pytest tests, ruff lint, mypy strict mode, and Alembic migrations",
    ],
    stack: [
      "FastAPI",
      "Python",
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Qdrant",
      "Redis",
      "MinIO",
      "SQLAlchemy",
      "Alembic",
      "Docker",
      "Tailwind CSS",
      "Gemini",
      "sentence-transformers",
    ],
    role: "Backend Developer",
    status: "Open Source",
    image: "/projects/curio-dashboard.png",
    github: "https://github.com/al1prahman/curio-ai",
    gallery: [
      {
        src: "/projects/curio-aichat.png",
        caption:
          "AI chat with source citations. Each answer links back to the document and page it came from, with a relevance score.",
      },
      {
        src: "/projects/curio-documents.png",
        caption:
          "Document management with processing status, search, and filters. Upload supports PDF, DOCX, and TXT up to 20 MB.",
      },
    ],
  },
  {
    slug: "smart-counter",
    title: "Smart Counter: ML People Counting",
    category: "Machine Learning",
    year: "2025",
    summary:
      "Computer-vision people counter with dwell-time analytics with YOLO-based detection, tracking, and per-zone occupancy reporting.",
    description:
      "A smart counting system that turns any camera feed into occupancy analytics. A YOLO-based detector counts people crossing defined zones while a tracker maintains identity across frames, enabling dwell-time measurement, or how long visitors stay in each area. Results stream to a live dashboard with historical heatmaps, built for retail footfall and event-space monitoring use cases.",
    features: [
      "YOLO object detection for person counting",
      "Multi-object tracking across video frames",
      "Dwell-time measurement per defined zone",
      "Live occupancy dashboard & historical heatmaps",
      "Works with recorded video or camera streams",
    ],
    stack: ["Python", "YOLO", "OpenCV", "TensorFlow", "PyTorch"],
    role: "ML Developer",
    status: "Prototype",
    image: "/projects/smartcounter.png",
  },
  {
    slug: "fiber-optic-management",
    title: "Fiber Optic Network Management",
    category: "Web Application",
    year: "2025",
    summary:
      "Network inventory and fault-management system for fiber optic infrastructure, covering cable routes, splice points, ports, and outage tracking.",
    description:
      "An operations system for fiber-to-the-home infrastructure. It maps physical network assets (ODP cabinets, splice points, cable routes, and port assignments) into a queryable inventory, then tracks faults from report to resolution with customer impact attached. Field teams get a work queue; operations get a map-first view of the network with status per segment.",
    features: [
      "Fiber asset inventory: routes, ODPs, splices, ports",
      "Port-to-customer assignment records",
      "Fault ticketing from report to resolution",
      "Network segment status & outage history",
      "Searchable asset database with export",
    ],
    stack: ["Laravel", "PostgreSQL", "JavaScript", "Tailwind CSS"],
    role: "Backend Developer",
    status: "Production",
    image: "/projects/fiber.jpg",
  },
  {
    slug: "ai-expense-tracker",
    title: "AI Expense Tracker",
    category: "Machine Learning",
    year: "2024",
    summary:
      "Expense tracker that reads receipts and auto-categorizes spending with OCR extraction plus an ML classifier that learns your categories.",
    description:
      "An expense tracker where logging a purchase is a photo, not a form. OCR extracts merchant, date, and total from receipt images; a machine-learning classifier assigns categories and improves with user corrections. Spending analytics break down by category and period, with budget thresholds that warn before you overspend.",
    features: [
      "Receipt OCR for merchant, date & total extraction",
      "ML-powered automatic categorization",
      "Category learning from user corrections",
      "Spending analytics by period & category",
      "Budget thresholds with overspend alerts",
    ],
    stack: ["Python", "TensorFlow", "Scikit-Learn", "Flutter", "Firebase"],
    role: "ML Developer",
    status: "Prototype",
  },
];

export type Experience = {
  period: string;
  role: string;
  company: string;
  location: string;
  type: string;
  points: string[];
};

export const experiences: Experience[] = [
  {
    period: "May 2025 to Sept 2026",
    role: "Backend Developer",
    company: "KB - TK Permata Ceria Bangsa",
    location: "Semarang",
    type: "On-site",
    points: [
      "Built and maintained an integrated preschool administration system covering enrollment, attendance, billing, and student monitoring.",
      "Designed relational database schemas and built REST APIs consumed by the web dashboard and mobile app.",
      "Deployed to production serving 100+ daily active users, with role-based access control and real-time notifications.",
    ],
  },
  {
    period: "Mar 2026 to Sept 2026",
    role: "Backend Developer",
    company: "Koperasi Desa Merah Putih",
    location: "Ambarawa (Hybrid)",
    type: "Hybrid",
    points: [
      "Developed cooperative management modules for member records, savings, and loan workflows.",
      "Designed relational data models and reporting for financial operations.",
    ],
  },
  {
    period: "Jul 2025 to Dec 2025",
    role: "Web Developer Intern",
    company: "Diskominfo Kota Semarang",
    location: "Semarang",
    type: "Internship",
    points: [
      "Built web solutions for the city communications and informatics office.",
      "Worked in a government IT environment with requirements, review cycles, and production deployment.",
    ],
  },
  {
    period: "Jul 2025 to Aug 2025",
    role: "Head of Production, Documentary Film",
    company: "Internship Program at Diskominfo Kota Semarang",
    location: "Semarang",
    type: "Internship",
    points: [
      "Led production of a documentary film, from shoot planning and crew coordination to post-production.",
      "Brought storytelling and video editing craft alongside engineering work.",
    ],
  },
];

export const skillGroups = [
  {
    label: "Mobile",
    items: ["Flutter", "Dart", "Firebase"],
  },
  {
    label: "Frontend",
    items: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "Vite",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS3",
    ],
  },
  {
    label: "Backend",
    items: [
      "Laravel",
      "Golang",
      "Rust",
      "PHP",
      "Python",
      "FastAPI",
      "Supabase",
      "PostgreSQL",
      "MySQL",
      "Redis",
      "Qdrant",
      "SQLAlchemy",
      "Docker",
    ],
  },
  {
    label: "ML & Data",
    items: [
      "TensorFlow",
      "PyTorch",
      "Scikit-Learn",
      "YOLO",
      "OpenCV",
      "RAG",
      "LangGraph",
      "sentence-transformers",
      "Prompt Engineering",
    ],
  },
  {
    label: "Tools",
    items: ["PowerBI", "Git", "GitHub", "GitLab CI", "Figma", "Canva", "Framer", "uv"],
  },
];

export const education = {
  period: "2023 to 2026",
  degree: "Associate Degree (A.Md.Kom) in Informatics Engineering",
  school: "Semarang State Polytechnic (Politeknik Negeri Semarang)",
  location: "Semarang, Indonesia",
};

export const certifications = [
  {
    period: "Feb 2026 to Feb 2029",
    name: "MTCNA",
    issuer: "Mikrotik",
    credentialId: "2602NA5649",
  },
];

export const activities = [
  { label: "Gaming", note: "Unwinding after a day of shipping" },
  { label: "Hangout", note: "Good company, better conversations" },
  { label: "Movies", note: "One more episode, always" },
  { label: "Football", note: "Weekend pitch, no excuses" },
  { label: "Photography", note: "Chasing light between commits" },
  { label: "Video Editing", note: "Cutting stories, frame by frame" },
];

/* off-the-clock photo wall — captions are his own words */
export const activityPhotos: { src: string; caption: string }[] = [
  { src: "/activity/valo.jpeg", caption: "valorant nights" },
  { src: "/activity/mainpes.jpg", caption: "pes, obviously" },
  { src: "/activity/nonton1.JPG", caption: "movie nights" },
  { src: "/activity/nonton2.jpeg", caption: "one more episode" },
  { src: "/activity/nongkrong.jpeg", caption: "hangout" },
  { src: "/activity/nongkrong2.jpeg", caption: "what a view" },
  { src: "/activity/ngopi.jpeg", caption: "coffe break" },
  { src: "/activity/makan.jpeg", caption: "food is fuel" },
  { src: "/activity/jalan.jpg", caption: "vit-sea" },
  { src: "/activity/jalan2.jpg", caption: "somewhere else" },
  { src: "/activity/sutradara.jpg", caption: "behind the camera" },
  { src: "/activity/direktorfilm.jpg", caption: "director's cut" },
  { src: "/activity/meetingsitama.jpg", caption: "sitama meetings" },
  { src: "/activity/sitamafiber.jpg", caption: "fiber install" },
  { src: "/activity/event1.jpg", caption: "events" },
  { src: "/activity/event2.jpg", caption: "on site" },
  { src: "/activity/event3.jpg", caption: "the crew" },
  { src: "/activity/googledev.jpg", caption: "google dev" },
  { src: "/activity/minsoc1.jpg", caption: "minsoc" },
  { src: "/activity/minsoc2.jpg", caption: "minsoc crew" },
  { src: "/activity/folks.jpeg", caption: "folks" },
  { src: "/activity/foto1.jpg", caption: "shots" },
  { src: "/activity/foto2.jpg", caption: "more shots" },
  { src: "/activity/komik.jpeg", caption: "komik" },
];

export const navLinks = [
  { href: "/#projects", label: "projects/" },
  { href: "/#experience", label: "experience/" },
  { href: "/#activity", label: "activity/" },
  { href: "/projects", label: "all work" },
];
