import { z } from "zod";
import knowledge from "../data/knowledge";
export const chatSchema = z
  .object({
    message: z.string().trim().min(1).max(1500),
    history: z
      .array(
        z
          .object({
            role: z.enum(["user", "assistant"]),
            content: z.string().trim().min(1).max(6000),
          })
          .strict(),
      )
      .max(10)
      .default([]),
  })
  .strict();
export function portfolioAnswer(question: string): string {
  const q = question.toLowerCase();
  if (/top\s*(4|four)|featured\s+projects?/i.test(q))
    return "Rudrapratap’s top 4 projects are:\n" + knowledge.featuredProjects.map((name, index) => `${index + 1}. ${name}`).join("\n");
  const project = knowledge.projects.find(
    (p) =>
      q.includes(p.name.toLowerCase()) ||
      (q.includes("blinkit") && p.name.includes("Blinkit")) ||
      (q.includes("trader") && p.name.includes("Trader")) ||
      (q.includes("road") && p.name.includes("Road")) ||
      (/e-commerce|ecommerce|order insights/.test(q) && p.name.startsWith("E-Commerce")) ||
      (/student.*(system|management)|\boops_project\b/.test(q) && p.name === "Student Data Management System") ||
      (/from scratch|from-scratch|linear regression|gradient descent/.test(q) && p.name === "Machine Learning from Scratch") ||
      ((q.includes("platform") || q.includes("streamlit")) &&
        p.name.includes("Platform")),
  );
  if (project)
    return [
      project.name,
      project.description,
      "Tools: " + project.technologies.join(", "),
      ...project.features,
      project.demo || "",
      ("repository" in project && project.repository) || "",
    ]
      .filter(Boolean)
      .join("\n");
  if (/contact|email|reach|linkedin|github/.test(q))
    return (
      "Contact Rudrapratap at " +
      knowledge.contact.email +
      ". GitHub: " +
      knowledge.contact.github +
      ". LinkedIn: " +
      knowledge.contact.linkedin +
      "."
    );
  if (/\b(ai|ml|llm|llms)\b|machine learning|artificial intelligence|generative/.test(q))
    return knowledge.personal.summary + "\n\n" + knowledge.personal.availability;
  if (/project|portfolio|work sample/.test(q))
    return knowledge.projects
      .map((p) => p.name + ": " + p.description)
      .join("\n\n");
  if (/skill|technical|python|sql|tool|power bi|excel/.test(q))
    return Object.entries(knowledge.skills)
      .map(([k, v]) => k + ": " + v.join(", "))
      .join("\n\n");
  if (/certif|credential/.test(q))
    return knowledge.certifications
      .map((c) => c.title + " — " + c.provider)
      .join("\n");
  if (/experience|jobyaari|training|ybi|worked/.test(q))
    return knowledge.experience
      .map(
        (e) =>
          e.role +
          " at " +
          e.company +
          " (" +
          e.duration +
          "). " +
          e.responsibilities.join(" "),
      )
      .join("\n\n");
  if (/educat|degree|university|bca|study/.test(q))
    return (
      knowledge.education.degree +
      ", " +
      knowledge.education.university +
      " (" +
      knowledge.education.duration +
      "), currently pursuing in Online & Distance mode."
    );
  if (/hire|summary|about|who|introduc/.test(q))
    return knowledge.personal.summary;
  if (/intern|availab|opportun|remote|location/.test(q))
    return (
      knowledge.personal.availability +
      " Based in " +
      knowledge.personal.location +
      ". Contact " +
      knowledge.contact.email +
      " to discuss current availability."
    );
  if (/^(hi|hello|hey)[!. ]*$/.test(q))
    return "Hello! Ask about Rudrapratap’s projects, technical skills, experience, education, certifications, or contact details.";
  return (
    "I don’t have verified information about that in the portfolio. Try asking about projects, skills, experience, education, or contact details. For other questions, email " +
    knowledge.contact.email +
    "."
  );
}
