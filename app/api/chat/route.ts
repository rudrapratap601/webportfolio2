import { NextRequest, NextResponse } from "next/server";
import knowledge from "@/data/knowledge";

const GROQ_API_URL = "https://api.groq.com/openai/v1/chat/completions";

const systemPrompt = `You are an AI assistant for Rudrapratap Sarma's portfolio. You help visitors learn about Rudrapratap's skills, experience, projects, and career.

Use the following knowledge base to answer questions accurately and professionally:

${JSON.stringify(knowledge, null, 2)}

Guidelines:
- Be helpful, friendly, and professional
- Provide accurate information from the knowledge base
- If asked about something not in the knowledge base, politely say you don't have that specific information
- Keep responses concise but informative (2-4 sentences for simple questions, longer for complex ones)
- Format important information clearly
- Always refer to Rudrapratap in the third person
- If asked about contact or opportunities, direct users to the contact page`;

export async function POST(request: NextRequest) {
  let message = "";
  try {
    const body = await request.json();
    message = body.message || "";
    const history = body.history || [];

    if (!message) {
      return NextResponse.json(
        { error: "Message is required" },
        { status: 400 }
      );
    }

    const apiKey = process.env.GROQ_API_KEY;

    if (!apiKey) {
      const response = generateLocalResponse(message);
      return NextResponse.json({ response });
    }

    const messages = [
      { role: "system", content: systemPrompt },
      ...(history || []),
      { role: "user", content: message },
    ];

    const groqResponse = await fetch(GROQ_API_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "llama-3.1-8b-instant",
        messages,
        temperature: 0.7,
        max_tokens: 500,
      }),
    });

    if (!groqResponse.ok) {
      const errorText = await groqResponse.text();
      console.error("Groq API error:", errorText);
      const response = generateLocalResponse(message);
      return NextResponse.json({ response });
    }

    const data = await groqResponse.json();
    const response =
      data.choices?.[0]?.message?.content || generateLocalResponse(message);

    return NextResponse.json({ response });
  } catch (error) {
    console.error("Chat API error:", error);
    const response = generateLocalResponse(message || "");
    return NextResponse.json({ response });
  }
}

function generateLocalResponse(message: string): string {
  const lowerMessage = message.toLowerCase();

  if (lowerMessage.includes("skill") || lowerMessage.includes("what can")) {
    return `Rudrapratap has expertise in several key areas:\n\n**Technical Skills:** SQL (Expert), Python (Advanced), Tableau (Expert), Power BI (Advanced), Excel (Expert), R (Intermediate), Looker, and BigQuery.\n\n**Tools:** PostgreSQL, MySQL, MongoDB, Docker, Git, Jupyter, Databricks, AWS, Azure, and Airflow.\n\nHe also excels at data storytelling, problem-solving, and team collaboration.`;
  }

  if (lowerMessage.includes("project")) {
    return `Rudrapratap has worked on several impactful projects:\n\n• **Sales Dashboard** - Interactive Tableau dashboard processing 2M+ records daily\n• **Customer Segmentation** - ML-based analysis improving marketing conversion by 35%\n• **Financial Analytics** - Power BI platform tracking $50M with 95% forecast accuracy\n• **Supply Chain Optimization** - Reduced stockouts by 40%, saving $2M\n\nCheck out the Projects page for more details!`;
  }

  if (lowerMessage.includes("experience") || lowerMessage.includes("work")) {
    return `Rudrapratap has ${knowledge.about.experience} of professional experience:\n\n**Current:** Senior Data Analyst at Tech Corp (2024-Present)\n- Leading BI initiatives and managing a team of 3 analysts\n\n**Previous:**\n- Data Analyst at Data Solutions Inc (2022-2023) - Fortune 500 clients\n- Junior Data Analyst at Analytics Startup (2020-2022)\n\nVisit the Experience page for a detailed timeline.`;
  }

  if (lowerMessage.includes("certif") || lowerMessage.includes("credential")) {
    return `Rudrapratap holds several prestigious certifications:\n\n• Google Data Analytics Professional Certificate (2024)\n• Tableau Desktop Specialist (2024)\n• Microsoft Power BI Data Analyst (2023)\n• AWS Data Analytics Specialty (2023)\n• Deep Learning Specialization from Coursera (2023)\n\nAnd 3+ more! Check the Certificates page for complete details.`;
  }

  if (lowerMessage.includes("contact") || lowerMessage.includes("hire") || lowerMessage.includes("available")) {
    return `You can reach Rudrapratap through:\n\n• **Email:** rudrapratap@example.com\n• **Location:** New Delhi, India\n• **Phone:** +91 98765 43210\n\nHe's open to remote opportunities and freelance projects. Visit the Contact page to send a message directly!`;
  }

  if (lowerMessage.includes("education") || lowerMessage.includes("degree")) {
    return `Rudrapratap holds a B.Sc. in Statistics with a specialization in Data Science, graduating with honors (CGPA: 8.5/10).\n\nDuring his studies, he:\n• Published research on statistical modeling\n• Won inter-college data science competition\n• Completed a research lab internship`;
  }

  if (lowerMessage.includes("goal") || lowerMessage.includes("career")) {
    return `Rudrapratap's career goals:\n\n**Short-term:** Continue growing as a data analyst, expand expertise in machine learning and AI, and take on leadership roles.\n\n**Long-term:** Transition into a Data Science Lead or Analytics Manager role, building teams that deliver impactful data solutions.\n\n**Interests:** Machine Learning, AI Applications, Cloud Analytics, and Business Strategy.`;
  }

  if (lowerMessage.includes("hello") || lowerMessage.includes("hi") || lowerMessage.includes("hey")) {
    return `Hello! I'm the AI assistant for Rudrapratap Sarma's portfolio. I can tell you about his skills, projects, experience, certifications, and career goals. What would you like to know?`;
  }

  if (lowerMessage.includes("thank")) {
    return `You're welcome! If you have any more questions about Rudrapratap's background or work, feel free to ask. You can also explore the different pages for more detailed information.`;
  }

  return `I can help you learn about Rudrapratap's skills, projects, experience, certifications, or career goals. What would you like to know?\n\nYou can also:\n• Ask about specific technical skills\n• Request details on projects and their impact\n• Learn about career history\n• Find contact information`;
}
