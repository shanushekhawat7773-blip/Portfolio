export interface PersonalData {
  name: string;
  headline: string;
  location: string;
  tagline: string;
  bio: string[];
  roles: string[];
  badges: {
    title: string;
    organization: string;
    description: string;
    icon: string;
    category: string;
  }[];
  links: {
    linkedin: string;
    github: string;
    email: string;
    resume: string;
  };
  stats: {
    label: string;
    value: string;
    sublabel: string;
  }[];
}

export const PERSONAL_DATA: PersonalData = {
  name: "Arun Singh",
  headline: "BS in Applied AI and Data Science @ IIT Jodhpur",
  location: "Jaipur, India",
  tagline: "I build AI systems that watch, predict and protect.",
  bio: [
    "BS in Applied AI and Data Science student at IIT Jodhpur engineering full-stack intelligent systems across computer vision, fraud prevention, recommendation engines, and cognitive wellness.",
    "Driven by solving real-world ambiguity through deep learning, I build across the entire lifecycle — from data curation and model fine-tuning to low-latency inference pipelines, responsive dashboards, and cloud deployment.",
    "Active in global developer ecosystems, constantly experimenting with cutting-edge vision backbones, multimodal architectures, and robust production tooling."
  ],
  roles: [
    "AI/ML Engineer",
    "Computer Vision Specialist",
    "Full-Stack Developer",
    "Deep Learning Researcher"
  ],
  badges: [
    {
      title: "Google Cloud Innovator",
      organization: "Google Cloud",
      description: "Recognized for modern cloud architecture and cloud-native machine learning deployment practices.",
      icon: "cloud",
      category: "Cloud & Infrastructure"
    },
    {
      title: "NVIDIA Community Member",
      organization: "NVIDIA Developer",
      description: "Active community member leveraging GPU acceleration, CUDA, and deep learning neural architectures.",
      icon: "cpu",
      category: "Accelerated Computing"
    },
    {
      title: "Google Developer",
      organization: "Google Developers",
      description: "Member of Google's worldwide engineering network building with modern Web, AI, and developer tools.",
      icon: "code",
      category: "Developer Ecosystem"
    },
    {
      title: "Google Maps Platform Innovator",
      organization: "Google Maps Platform",
      description: "Recognized for engineering geospatial applications, map visual layers, and real-time location intelligence.",
      icon: "map-pin",
      category: "Geospatial Intelligence"
    },
    {
      title: "MyGov Student Ambassador",
      organization: "MyGov India · MeitY",
      description: "Selected youth ambassador driving citizen engagement, digital governance awareness, and government innovation initiatives.",
      icon: "award",
      category: "National Governance & Leadership"
    },
    {
      title: "ISP · Internshala Student Partner",
      organization: "Internshala",
      description: "Appointed student partner facilitating skill-building initiatives, industry opportunities, and student engagements.",
      icon: "users",
      category: "Leadership & Community"
    }
  ],
  links: {
    linkedin: "https://www.linkedin.com/in/arun-singh-352b40281/",
    github: "https://github.com/shanushekhawat7773-blip",
    email: "arunsinghshekhawat7773@gmail.com",
    resume: "/resume.pdf"
  },
  stats: [
    {
      label: "Production Projects",
      value: "5+",
      sublabel: "Computer vision, finance & wellness AI"
    },
    {
      label: "Programs & Badges",
      value: "6",
      sublabel: "Google Cloud, NVIDIA, MyGov, ISP, Maps"
    },
    {
      label: "Core Stack Disciplines",
      value: "3",
      sublabel: "AI/ML · Full-Stack · Cloud Systems"
    }
  ]
};

export interface SkillCategory {
  category: string;
  description: string;
  skills: {
    name: string;
    level: string;
    featured?: boolean;
  }[];
}

export const SKILLS_DATA: SkillCategory[] = [
  {
    category: "Languages",
    description: "Core languages for systems, algorithms, and web applications",
    skills: [
      { name: "Python", level: "Primary", featured: true },
      { name: "TypeScript", level: "Primary", featured: true },
      { name: "JavaScript", level: "Advanced", featured: true },
      { name: "Java", level: "Proficient" },
      { name: "HTML5", level: "Advanced" },
      { name: "SASS", level: "Proficient" }
    ]
  },
  {
    category: "AI & Machine Learning",
    description: "Deep learning frameworks, computer vision, and scientific computing",
    skills: [
      { name: "PyTorch", level: "Primary", featured: true },
      { name: "TensorFlow", level: "Advanced", featured: true },
      { name: "scikit-learn", level: "Advanced", featured: true },
      { name: "NumPy", level: "Advanced" },
      { name: "Pandas", level: "Advanced" },
      { name: "SciPy", level: "Proficient" },
      { name: "MLflow", level: "Proficient" },
      { name: "Matplotlib", level: "Advanced" },
      { name: "Plotly", level: "Advanced" },
      { name: "NVIDIA", level: "Ecosystem", featured: true }
    ]
  },
  {
    category: "Web & App Engineering",
    description: "Modern component-driven frontends and resilient backend services",
    skills: [
      { name: "React", level: "Primary", featured: true },
      { name: "Next.js", level: "Primary", featured: true },
      { name: "NestJS", level: "Proficient", featured: true },
      { name: "React Native", level: "Proficient" },
      { name: "Flutter", level: "Familiar" },
      { name: "React Query", level: "Advanced" },
      { name: "React Router", level: "Advanced" },
      { name: "Webpack", level: "Proficient" }
    ]
  },
  {
    category: "Cloud, Data & DevOps",
    description: "Scalable cloud infrastructure, distributed databases, and CI/CD pipelines",
    skills: [
      { name: "Google Cloud", level: "Innovator", featured: true },
      { name: "AWS", level: "Proficient" },
      { name: "Azure", level: "Proficient" },
      { name: "Firebase", level: "Advanced", featured: true },
      { name: "Supabase", level: "Advanced" },
      { name: "MongoDB", level: "Proficient" },
      { name: "MySQL", level: "Proficient" },
      { name: "SQL Server", level: "Proficient" },
      { name: "Apache Airflow", level: "Familiar" },
      { name: "Vercel", level: "Advanced" },
      { name: "Cloudflare", level: "Proficient" }
    ]
  },
  {
    category: "Tools & Testing",
    description: "Version control, design tools, and telemetry suites",
    skills: [
      { name: "Git", level: "Primary", featured: true },
      { name: "GitHub", level: "Primary", featured: true },
      { name: "GitLab", level: "Proficient" },
      { name: "Figma", level: "Advanced", featured: true },
      { name: "Framer", level: "Proficient" },
      { name: "Adobe After Effects", level: "Creative" },
      { name: "Premiere Pro", level: "Creative" },
      { name: "Lightroom", level: "Creative" },
      { name: "Vitest", level: "Proficient" },
      { name: "Jest", level: "Proficient" },
      { name: "Sentry", level: "Observability" }
    ]
  }
];
