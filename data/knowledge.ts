import { projects, featuredProjects } from "./projects";
const knowledge = {
  personal: {
    name: "Rudrapratap Sarma",
    title: "Data Analytics & AI/ML Enthusiast",
    headline:
      "Python | SQL | Power BI | Data Analytics | Machine Learning Fundamentals | AI Learning",

    summary:
      "Rudrapratap Sarma is a BCA student focused on Data Analytics and AI/ML, open to internships in both fields. He brings hands-on experience in Python, SQL, data preprocessing, exploratory data analysis, and dashboard development using Power BI and Streamlit. His ML-From-Scratch project implements linear regression with closed-form solutions and batch, stochastic, and mini-batch gradient descent using Python and NumPy. He is actively learning AI, generative AI, and LLMs, building on his analytics foundation to develop intelligent, data-driven applications.",

    location: "Dharmanagar, Tripura, India",

    email: "rudrapratapsarma549@gmail.com",

    availability:
      "Open to Data Analytics, Business Intelligence, Machine Learning, and AI internships, including remote opportunities. Also interested in analytics projects and learning-focused AI/ML collaborations."
  },

  education: {
    degree: "Bachelor of Computer Applications (BCA)",
    university: "Manipal University Jaipur",
    mode: "Online & Distance",
    duration: "2025 - 2028",
    status: "Currently Pursuing"
  },

  experience: [
    {
      company: "Jobyaari",
      id: "jobyaari-intern-2026",
      type: "Internship",
      location: "Remote",
      role: "Data Operations & Analytics Intern",
      duration: "May 2026 - June 2026",

      responsibilities: [
        "Extracted structured data from 35+ government job notification PDFs.",
        "Created a structured dataset containing over 500 job opportunities.",
        "Performed data cleaning, validation and qualification mapping.",
        "Prepared backend-ready datasets for publishing pipelines.",
        "Collaborated on workflow optimization and dataset organization."
      ],

      skillsUsed: [
        "Python",
        "Excel",
        "Data Cleaning",
        "Data Validation",
        "Data Structuring"
      ]
    },

    {
      company: "YBI Foundation",
      id: "ybi-training-2025",
      type: "Project-based training",
      location: "Remote",
      role: "Data Analytics Trainee",
      duration: "Sep 2025 - Dec 2025",

      responsibilities: [
        "Completed project-based training on Python, Pandas, NumPy and Machine Learning fundamentals.",
        "Worked on multiple real-world datasets.",
        "Performed preprocessing, EDA and business insight generation.",
        "Built independent analytics projects."
      ]
    }
  ],

  skills: {
    programming: [
      "Python",
      "SQL"
    ],

    libraries: [
      "Pandas",
      "NumPy",
      "Scikit Learn",
      "Matplotlib",
      "Seaborn",
      "Plotly",
      "SQLAlchemy",
      "Streamlit"
    ],

    "machine learning foundations": [
      "Machine Learning Fundamentals",
      "Linear Regression from Scratch",
      "Batch, Stochastic & Mini-batch Gradient Descent",
      "Data Preprocessing",
      "Exploratory Data Analysis",
      "Python, Pandas, NumPy, sklearn"
    ],

    "AI — currently learning": [
      "Artificial Intelligence",
      "Machine Learning",
      "Large Language Models (LLMs)"
    ],

    databases: [
      "PostgreSQL",
      "MySQL",
      "SQL Server"
    ],

    visualization: [
      "Power BI",
      "MS Excel",
      "Interactive Dashboards",
      "Pivot Tables",
      "Charts",
      "Slicers",
      "Timelines"
    ],

    analytics: [
      "Data Cleaning",
      "Data Preprocessing",
      "Exploratory Data Analysis",
      "KPI Analysis",
      "Trend Analysis",
      "Root Cause Analysis",
      "Correlation Analysis",
      "Outlier Detection",
      "Behavioral Analysis",
      "Market Sentiment Analysis",
      "Statistical Analysis"
    ],

    tools: [
      "Git",
      "GitHub",
      "Jupyter Notebook"
    ]
  },

  featuredProjects: featuredProjects.map(project => project.name),
  projects,

  certifications: [
    {
      title: "Data Science and Machine Learning Internship Program",
      provider: "YBI Foundation",
      url: "https://www.apnaclassroom.com/credential-validation?credentialId=6NDDWYTA27QTB", // Add the public HTTPS certificate link here.
    },

    {
      title: "Python Programming",
      provider: "Kaggle",
      url: "https://www.kaggle.com/learn/certification/rudrapratapsarma/python", // Add the public HTTPS certificate link here.
    },

    {
      title: "Pandas for Data Analysis",
      provider: "Kaggle",
      url: "https://www.kaggle.com/learn/certification/rudrapratapsarma/pandas", // Add the public HTTPS certificate link here.
    },

    {
      title: "3D & 2D Data Visualization with Python",
      provider: "YBI Foundation",
      url: "https://www.apnaclassroom.com/credential-validation?credentialId=3QIIDGL01V6UK", // Add the public HTTPS certificate link here.
    }
  ],

  careerGoals: {
    shortTerm:
      "Secure an internship in Data Analytics or AI/ML, contributing Python, SQL, and data preparation skills while strengthening machine learning and AI capabilities.",

    longTerm:
      "Become an AI/ML Engineer and build intelligent analytics products used by businesses worldwide.",

    currentLearning: [
      "Machine Learning",
      "AI",
      "Advanced SQL",
      "Power BI",
      "PostgreSQL",
      "Generative AI",
      "LLMs"
    ]
  },

  services: [
    "Data Cleaning",
    "Dashboard Development",
    "Power BI Dashboards",
    "SQL Analysis",
    "Python Automation",
    "Exploratory Data Analysis",
    "Business Analytics",
    "Interactive Analytics Applications"
  ],

  faq: [
    {
      question: "Is Rudrapratap available for internships?",
      answer:
        "Yes. He is actively looking for internships in Data Analytics, Business Intelligence, Machine Learning, and AI."
    },

    {
      question: "Can he work remotely?",
      answer:
        "Yes. He is open to remote internships and freelance opportunities."
    },

    {
      question: "Does he build AI applications?",
      answer:
        "His portfolio includes a Groq-powered AI assistant. He is learning AI, generative AI, and LLMs, alongside his analytics projects and machine learning fundamentals. He has not listed professional AI/ML engineering experience."
    },

    {
      question: "What type of projects has he completed?",
      answer:
        "Retail analytics, market sentiment analysis, road accident analytics, full-stack analytics platforms and data operations projects. His ongoing Machine Learning from Scratch project currently includes linear regression implementations."
    }
  ],

  contact: {
    email: "rudrapratapsarma549@gmail.com",
    github: "https://github.com/rudrapratap601",
    linkedin: "https://linkedin.com/in/rudrapratap-sarma",
    portfolio: "Portfolio Website"
  }
};

export default knowledge;
