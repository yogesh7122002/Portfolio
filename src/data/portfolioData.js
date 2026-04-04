import resumeFile from "../../Yogesh_Resume.pdf";

export const navigation = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

export const personalInfo = {
  name: "Yogesh Deshmane",
  title: "Backend Developer",
  location: "Maharashtra, India",
  email: "yogeshdeshmane220@gmail.com",
  phone: "+91 7666092709",
  phoneHref: "tel:+917666092709",
  emailHref: "mailto:yogeshdeshmane220@gmail.com",
  resumeFile,
};

export const socials = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/yogeshbaludeshmane",
  },
  {
    label: "GitHub",
    href: "https://github.com/yogesh7122002",
  },
  {
    label: "LeetCode",
    href: "https://leetcode.com/u/Yogesh_Deshmane/",
  },
];

export const heroData = {
  availability: "Available for backend and AI-focused roles",
  kicker: "Backend Developer · AI/LLM Builder · Cloud-Focused Engineer",
  heading:
    "Building thoughtful software with clean systems, reliable APIs, and modern AI workflows.",
  summary:
    "Backend developer with 1+ years of hands-on experience building production-grade applications using Python, Flask, FastAPI, and AWS. Currently focused on LLM-powered features and RAG pipelines with LangChain and Hugging Face.",
  primaryStack: "Python, Flask, FastAPI, AWS, OpenAI APIs",
};

export const metrics = [
  { value: "1+", label: "Years building production software" },
  { value: "10k+", label: "Daily API requests handled in production" },
  { value: "400+", label: "Problems solved across coding platforms" },
  {
    value: "Top 16%",
    label: "LeetCode worldwide ranking",
    detail: "Built through consistent problem-solving practice",
  },
];

export const focusAreas = [
  "Production-grade backend systems",
  "LLM features and RAG pipelines",
  "Cloud infrastructure on AWS",
  "Clean APIs and automation tooling",
];

export const aboutSection = {
  eyebrow: "About",
  title: "A backend engineer who cares about clarity, reliability, and product impact.",
  description:
    "The site content below is refreshed directly from the attached resume, with the goal of presenting your work in a cleaner and more professional way.",
  paragraphs: [
    "I enjoy building systems that stay dependable as they grow, whether that means designing APIs, improving deployment workflows, or turning AI ideas into product features that users can actually rely on. My recent work blends backend engineering with cloud infrastructure and LLM integrations.",
    "Alongside professional work, I keep sharpening fundamentals through problem solving and hands-on experimentation, including 400+ problems solved across LeetCode and GeeksforGeeks and a top 16% worldwide ranking on LeetCode.",
  ],
  strengths: [
    "Builds scalable REST APIs with Flask and FastAPI.",
    "Ships AI-assisted workflows using OpenAI APIs, LangChain, LangGraph, Hugging Face, and vector stores.",
    "Improves delivery speed with CI/CD, cloud deployments, and operational automation.",
  ],
};

export const experienceSection = {
  eyebrow: "Experience",
  title: "Professional work across backend, infrastructure, trading systems, and applied ML.",
  description: "A concise snapshot of the roles and impact points captured in your resume.",
};

export const experience = [
  {
    role: "Software Developer",
    company: "Datadios Inc",
    period: "Dec 2024 - Present",
    location: "Remote",
    summary:
      "Building backend systems, analytics workflows, and AI-powered product features for production use.",
    highlights: [
      "Architected and maintained scalable Flask APIs across 5+ modules, reliably serving 10k+ daily requests.",
      "Built a MySQL workload extraction engine that surfaced schema-level insights and increased analytics engagement by 20%.",
      "Engineered a unified cost dashboard for AWS, OpenAI, GCP, and Azure, reducing cost-review time by 35%.",
      "Shipped SQL AI with Hugging Face integrations and a RAG pipeline for natural-language querying over SQL metadata.",
      "Developed async bulk-deletion APIs processing 1M+ rows, improving throughput and cutting wait times by 30-40%.",
      "Owned CI/CD pipelines with GitHub Actions for EC2, Lambda, and Hetzner deployments.",
    ],
  },
  {
    role: "Python Developer Intern",
    company: "Console Coder",
    period: "Sept 2024 - Dec 2024",
    location: "Pune",
    summary:
      "Worked on low-latency trading and risk-management tools where reliability and execution speed mattered.",
    highlights: [
      "Contributed to high-frequency trading and order management systems with sub-millisecond latency requirements.",
      "Built an Auto Stop-Loss Console for Kotak Neo Broker to automate P&L booking and reduce manual overhead.",
      "Designed auto-hedging strategies and one-click trade actions to accelerate execution and protect capital.",
    ],
  },
  {
    role: "System Engineer Intern",
    company: "Evertz Microsystems",
    period: "Jan 2024 - Jun 2024",
    location: "Remote",
    summary:
      "Supported broadcast infrastructure and Linux-based environments with automation and operations work.",
    highlights: [
      "Collaborated on Mediator-X and core broadcast infrastructure features.",
      "Automated repetitive workflows with Python and Bash, reducing manual effort by 60%.",
      "Provisioned and managed VM clusters for scalable, high-availability deployments.",
    ],
  },
  {
    role: "ML Intern",
    company: "IIT Bombay",
    period: "May 2023 - Oct 2023",
    location: "Remote",
    summary:
      "Researched NLP and abstractive summarization approaches with a focus on measurable model quality.",
    highlights: [
      "Benchmarked ML algorithms and NLP models for abstractive text summarization.",
      "Built a deep-learning text summarizer using Keras NLP with a 12% improvement in ROUGE accuracy scores.",
    ],
  },
];

export const projectsSection = {
  eyebrow: "Projects",
  title: "Selected work that reflects both product thinking and implementation depth.",
  description:
    "These project descriptions come from the attached resume and have been rewritten for clearer presentation.",
};

export const projects = [
  {
    title: "Blog Website",
    stack: ["Django", "MySQL", "Tailwind CSS"],
    description:
      "A full-stack blogging platform with secure authentication, CRUD workflows, optimized ORM queries, and a responsive interface.",
    note: "GitHub project",
  },
  {
    title: "JEEPrep Web App",
    stack: ["React", ".NET", "MySQL"],
    description:
      "An exam preparation platform with JWT authentication, real-time progress tracking, and session management for learners.",
    note: "GitHub project",
  },
  {
    title: "SharpTrixAi",
    stack: ["React", "Tailwind CSS"],
    description:
      "An SEO-focused corporate website built with reusable components and responsive layouts for a polished business presence.",
    note: "Live and GitHub project",
  },
  {
    title: "AI Text Summarizer",
    stack: ["Python", "Keras NLP", "LangChain"],
    description:
      "A summarization project exploring LLM experimentation, prompt-based workflows, and retrieval-augmented interactions.",
    note: "AI/NLP project",
  },
];

export const skillsSection = {
  eyebrow: "Skills",
  title: "A practical toolkit across backend engineering, AI, cloud, testing, and delivery.",
  description:
    "Grouped to make the portfolio easier to scan for recruiters, collaborators, and hiring teams.",
};

export const skillGroups = [
  {
    title: "Languages",
    items: ["Python", "JavaScript", "C++", "YAML", "Bash"],
  },
  {
    title: "Backend",
    items: ["Flask", "FastAPI", "REST APIs", "MySQL"],
  },
  {
    title: "Cloud",
    items: ["AWS EC2", "AWS Lambda", "AWS RDS", "AWS S3", "Boto3", "Azure VM", "Azure DB Management"],
  },
  {
    title: "AI / LLM",
    items: ["OpenAI APIs", "LangChain", "LangGraph", "Hugging Face", "RAG", "Vector Stores"],
  },
  {
    title: "Testing",
    items: ["Pytest", "Playwright"],
  },
  {
    title: "DevOps & Tools",
    items: ["Git", "GitHub Actions", "Jenkins", "Docker", "Linux", "JIRA", "Confluence"],
  },
];

export const education = {
  eyebrow: "Education",
  title: "B.Tech in Computer Science Engineering",
  institute: "KIT's College of Engineering, Kolhapur",
  period: "2020 - 2024",
  cgpa: "CGPA: 8.5 / 10",
};

export const highlightsCard = {
  eyebrow: "Highlights",
  title: "What stands out from the resume",
  items: [
    "Experience spanning backend systems, cloud operations, trading automation, and ML research.",
    "Hands-on work with OpenAI APIs, LangChain, LangGraph, Hugging Face, and vector-backed RAG flows.",
    "Strong problem-solving discipline supported by consistent algorithm practice.",
  ],
};

export const contactSection = {
  eyebrow: "Contact",
  title: "Let's build something clean, useful, and thoughtfully engineered.",
  description:
    "Reach out for backend roles, freelance work, collaborations, or product conversations.",
};
