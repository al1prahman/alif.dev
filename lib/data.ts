/* ============================================================================
   SITE DATA — every word on the site lives here.
   ========================================================================== */

export const profile = {
  name: "Alif Rahman",
  fullName: "Alif Rahman Maulana",
  handle: "alip_rahman",
  role: "Software Developer",
  tagline: "Professional Fullstack & Mobile Developer",
  location: "Semarang, Indonesia",
  timezone: "GMT+7",
  bio: "I am a Professional Full-Stack & Mobile Developer specializing in building high-performance web applications and cross-platform mobile experiences with React, Laravel and Flutter. I build fast, reliable products, from scalable backend architectures and RESTful APIs to the final pixel.",
  shortBio:
    "Fullstack & mobile developer building high-performance web apps and cross-platform experiences with React, Laravel, and Flutter, from scalable backend architecture to the final pixel.",
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
    role: "Fullstack Developer",
    status: "Production",
    image: "/projects/preschool.jpg",
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
    role: "Fullstack & Mobile Developer",
    status: "Production",
    image: "/projects/sitama.jpg",
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
    role: "Fullstack Developer",
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
    role: "Fullstack & ML Developer",
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
    period: "May 2023 to Sept 2026",
    role: "Fullstack & Mobile Developer",
    company: "KB - TK Permata Ceria Bangsa",
    location: "Semarang",
    type: "On-site",
    points: [
      "Built and maintained an integrated preschool administration system covering enrollment, attendance, billing, and student monitoring.",
      "Delivered cross-platform mobile features and internal tools used daily by teaching staff.",
      "Owned the full stack, from database design and REST APIs to web frontend and mobile releases.",
    ],
  },
  {
    period: "Mar 2026 to Sept 2026",
    role: "Fullstack Developer",
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
      "Supabase",
      "PostgreSQL",
      "MySQL",
    ],
  },
  {
    label: "ML & Data",
    items: [
      "Python",
      "TensorFlow",
      "PyTorch",
      "Scikit-Learn",
      "YOLO",
      "OpenCV",
      "Prompt Engineering",
    ],
  },
  {
    label: "Tools",
    items: ["PowerBI", "Git", "GitHub", "Figma", "Canva", "Framer"],
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
