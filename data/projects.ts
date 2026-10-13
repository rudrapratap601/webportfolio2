export const projectCategories = ["Data Analytics", "Data Analysis", "Excel Analysis", "ML Projects", "Pure Python Projects", "AI & DL Projects"] as const;
export type Project = {
 id: string; name: string; category: typeof projectCategories[number]; featured?: boolean;
 description: string; technologies: string[]; features: string[];
 image?: string; imageLabel?: string; repository?: string; demo?: string; caseStudy?: string;
 status?: string; type?: string; impact?: string[];
};
// Array order controls display order. The first four featured entries appear on Home.
export const projects: Project[] = [
  {
    "id": "data-analytics-platform",
    "name": "Data Analytics Platform",
    "type": "Full Stack Analytics Platform",
    "technologies": [
      "Python",
      "Streamlit",
      "PostgreSQL",
      "Supabase",
      "Pandas",
      "Plotly",
      "SQLAlchemy"
    ],
    "description": "A full-stack analytics platform allowing users to upload, clean, connect and analyze multiple datasets.",
    "features": [
      "Multi dataset upload",
      "Automatic SQL JOIN generation",
      "Interactive dashboards",
      "Five SQL aggregations",
      "Statistical insights",
      "Automated data quality reports"
    ],
    "impact": [
      "Supports cross-dataset analysis.",
      "Simplifies analytics without manual SQL.",
      "Provides scalable decision support."
    ],
    "demo": "https://dataset-insight-platform.streamlit.app/",
    "category": "Data Analytics",
    "featured": true,
    "image": "/projects/analytics-platform.png",
    "imageLabel": "Application screenshot",
    "repository": "https://github.com/rudrapratap601/data-analytics-web-platform"
  },
  {
    "id": "blinkit-sales-performance-analysis",
    "name": "Blinkit Sales Performance Analysis",
    "technologies": [
      "Python",
      "Power BI",
      "Pandas",
      "NumPy"
    ],
    "description": "Retail sales analysis on 8,523 grocery products using Python and Power BI.",
    "category": "Data Analysis",
    "featured": true,
    "image": "/projects/blinkit-dashboard.png",
    "imageLabel": "Power BI dashboard",
    "repository": "https://github.com/rudrapratap601/blinkit-sales-performance-analysis",
    "features": [
      "Analyzed $1.20M sales.",
      "Tracked Average Order Value.",
      "Built KPI dashboard.",
      "Identified top performing product categories.",
      "Found Tier 2 and Tier 3 cities generated major sales."
    ]
  },
  {
    "id": "trader-performance-vs-market-sentiment",
    "name": "Trader Performance vs Market Sentiment",
    "technologies": [
      "Python",
      "Pandas",
      "EDA",
      "Behavioral Analytics"
    ],
    "description": "Behavioral analysis comparing trader performance with Bitcoin market sentiment.",
    "category": "Data Analysis",
    "featured": true,
    "imageLabel": "Analysis output · PnL by sentiment",
    "repository": "https://github.com/rudrapratap601/trader-sentiment-analysis",
    "features": [
      "Calculated PnL.",
      "Calculated Win Rate.",
      "Behavioral Segmentation.",
      "Fear-based market produced strongest trader performance."
    ]
  },
  {
    "id": "machine-learning-from-scratch",
    "name": "Machine Learning from Scratch",
    "status": "Ongoing · Linear regression implemented",
    "technologies": [
      "Python",
      "NumPy",
      "Pandas",
      "Matplotlib",
      "Jupyter"
    ],
    "description": "Building machine learning algorithms with Python and NumPy to understand the mathematics behind training and prediction. Current work explores linear regression with closed-form solutions and three gradient descent methods.",
    "features": [
      "Simple and multiple linear regression implemented from scratch.",
      "Closed-form solutions and batch, stochastic, and mini-batch gradient descent.",
      "Manual regression metrics, including MAE, MSE, RMSE, and R².",
      "Mathematical explanations and Jupyter notebooks accompany the implementations.",
      "Ongoing learning project; classification, clustering, and other algorithms are planned."
    ],
    "repository": "https://github.com/rudrapratap601/ML-From-Scratch",
    "category": "ML Projects",
    "featured": true,
    "imageLabel": "Machine learning foundations",
    "caseStudy": "/projects/ml-from-scratch"
  },
  {
    "id": "road-accident-casualty-analysis",
    "name": "Road Accident Casualty Analysis",
    "technologies": [
      "MS Excel",
      "Dashboard",
      "Pivot Tables"
    ],
    "description": "Interactive dashboard analysing 235,288 accident casualties.",
    "category": "Excel Analysis",
    "featured": false,
    "image": "/projects/road-accident-dashboard.png",
    "imageLabel": "Excel dashboard",
    "repository": "https://github.com/rudrapratap601/excel-analysis-projects/tree/main/Road_Accident_Analysis",
    "features": [
      "Fatal, Serious and Slight casualty analysis.",
      "Road type analysis.",
      "Vehicle analysis.",
      "Urban vs Rural comparison."
    ]
  },
  {
    "id": "e-commerce-order-insights-v2-python-project",
    "name": "E-Commerce Order Insights v2 (Python Project)",
    "technologies": [
      "Python",
      "OOP",
      "Data Cleaning",
      "Data Validation",
      "EDA"
    ],
    "description": "A pure Python order analysis system that cleans and validates e-commerce data, then summarizes revenue, customer spending, and category and monthly trends without external libraries.",
    "features": [
      "Organizes order processing with Order and OrderManager classes.",
      "Handles missing or invalid quantities, prices, discounts, payment modes, categories, and dates.",
      "Calculates total revenue and identifies top customers by spending.",
      "Breaks down revenue by category and month and identifies the most active order day."
    ],
    "repository": "https://github.com/rudrapratap601/Pure-Python-Projects/tree/main/Python_Project/ecommerce_order_insights/v2_advanced_ds",
    "category": "Pure Python Projects",
    "featured": false,
    "imageLabel": "E-commerce order analysis"
  },
  {
    "id": "student-data-management-system",
    "name": "Student Data Management System",
    "technologies": [
      "Python",
      "OOP",
      "CSV",
      "File Handling",
      "Jupyter"
    ],
    "description": "A Python academic management system for students, courses, enrollments, and grades. Uses object-oriented design and CSV files to save and load records.",
    "features": [
      "Adds undergraduate and graduate students, creates courses, and manages enrollments.",
      "Assigns marks and grades and generates student report cards.",
      "Practices inheritance, polymorphism, and encapsulation through student classes.",
      "Persists students, courses, and enrollments in CSV files with input validation and error handling."
    ],
    "repository": "https://github.com/rudrapratap601/Pure-Python-Projects/tree/main/Python_Project/OOPS_project",
    "category": "Pure Python Projects",
    "featured": false,
    "imageLabel": "Student data management"
  }
];
export const featuredProjects = projects.filter(project => project.featured).slice(0,4);
