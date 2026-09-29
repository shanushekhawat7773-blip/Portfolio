export interface Project {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  tags: string[];
  githubUrl: string;
  demoUrl?: string;
  resultsPlaceholder: string;
  highlights: string[];
  visualType: "traffic" | "security" | "finance" | "wellness" | "movie";
  accentColor: string;
}

export const PROJECTS_DATA: Project[] = [
  {
    id: "trafficguard-ai",
    number: "01",
    title: "TrafficGuard-AI",
    tagline: "AI-Powered Urban Traffic Violation Detection System",
    description:
      "AI-powered city traffic monitoring system using camera feeds, computer vision, and machine learning to detect violations such as red-light jumping, helmet violations, wrong-way driving, and unsafe driving patterns.",
    tags: ["Computer Vision", "ML", "HTML", "Python"],
    githubUrl: "https://github.com/shanushekhawat7773-blip/TrafficGuard-AI",
    demoUrl: "https://github.com/shanushekhawat7773-blip/TrafficGuard-AI#demo",
    resultsPlaceholder: "[Validation Results & Field Benchmark Metrics Pending Live Deployment]",
    highlights: [
      "Real-time violation detection (Red light, helmet absence, wrong-way flow)",
      "Multi-stream camera ingest with bounding box overlays",
      "Automated evidence snapshot capture and incident logging",
      "Configurable infraction thresholds per junction"
    ],
    visualType: "traffic",
    accentColor: "#FF9A2E"
  },
  {
    id: "societysecurity-ai",
    number: "02",
    title: "SocietySecurity-AI",
    tagline: "Intelligent Residential Safety & Perimeter Surveillance",
    description:
      "AI-powered residential society security platform with computer vision, configurable AI rules, real-time event detection, incident management, and human-in-the-loop security decisions.",
    tags: ["Computer Vision", "Real-time", "JavaScript"],
    githubUrl: "https://github.com/shanushekhawat7773-blip/SocietySecurity-AI",
    demoUrl: "https://github.com/shanushekhawat7773-blip/SocietySecurity-AI#demo",
    resultsPlaceholder: "[Society Pilot Metrics & Response Latency Benchmarks Available Upon Request]",
    highlights: [
      "Real-time perimeter monitoring and unauthorized access alerts",
      "Customizable rule builder (curfew alerts, vehicle tailgating)",
      "Human-in-the-loop verification pipeline for security guards",
      "Historical incident audit logs with tagged video timestamps"
    ],
    visualType: "security",
    accentColor: "#FF7522"
  },
  {
    id: "finguard-ai",
    number: "03",
    title: "FinGuard-AI",
    tagline: "Explainable AI Financial Risk & Fraud Intelligence",
    description:
      "AI financial intelligence platform for fraud detection, risk analysis, cash-flow forecasting, anomaly detection, and explainable AI insights designed for transparent decision-making.",
    tags: ["Fraud Detection", "Explainable AI", "Forecasting", "TypeScript"],
    githubUrl: "https://github.com/shanushekhawat7773-blip/FinGuard-AI",
    demoUrl: "https://github.com/shanushekhawat7773-blip/FinGuard-AI#demo",
    resultsPlaceholder: "[Synthetic Dataset ROC-AUC & Latency Benchmarks Documented in Repo]",
    highlights: [
      "High-throughput transactional anomaly detection engine",
      "SHAP-style explainable AI reasoning for flagged transactions",
      "Temporal cash-flow forecasting using sequence models",
      "Dynamic risk-scoring dashboard with instant triage"
    ],
    visualType: "finance",
    accentColor: "#FFA843"
  },
  {
    id: "mindcheck-ai",
    number: "04",
    title: "MindCheck-AI",
    tagline: "Empathetic Cognitive Health & Daily Reflection Companion",
    description:
      "Full-stack AI mental wellness app that analyzes user check-ins and provides personalized, non-diagnostic insights and wellness suggestions through natural language comprehension.",
    tags: ["Full-Stack", "NLP", "TypeScript"],
    githubUrl: "https://github.com/shanushekhawat7773-blip/MindCheck-AI",
    demoUrl: "https://github.com/shanushekhawat7773-blip/MindCheck-AI#demo",
    resultsPlaceholder: "[User Experience Evaluation & Wellness Impact Studies in Progress]",
    highlights: [
      "Natural language sentiment and emotional nuance extraction",
      "Strictly non-diagnostic, privacy-first wellness guidance",
      "Longitudinal mood charting with personalized reflection prompts",
      "Responsive full-stack architecture with encrypted data stores"
    ],
    visualType: "wellness",
    accentColor: "#FF5A1F"
  },
  {
    id: "cinemind-ai",
    number: "05",
    title: "CineMind-AI",
    tagline: "Adaptive Preference-Driven Neural Recommendation Engine",
    description:
      "AI movie recommendation system that learns from preferences, ratings, genres, and viewing history to surface contextually relevant film suggestions.",
    tags: ["Recommender System", "ML", "Python"],
    githubUrl: "https://github.com/shanushekhawat7773-blip/CineMind-AI",
    demoUrl: "https://github.com/shanushekhawat7773-blip/CineMind-AI#demo",
    resultsPlaceholder: "[Recommendation Precision & Recall Validation Metrics Documented in Repo]",
    highlights: [
      "Hybrid collaborative filtering and content-based embedding model",
      "Dynamic cold-start mitigation through preference onboarding",
      "Cosine similarity discovery across high-dimensional genre spaces",
      "Real-time query filters for moods, eras, and runtime preferences"
    ],
    visualType: "movie",
    accentColor: "#FFA843"
  }
];
