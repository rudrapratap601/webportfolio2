"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Send,
  Bot,
  User,
  Sparkles,
  Loader2,
  Trash2,
  MessageCircle,
} from "lucide-react";
import { Layout } from "@/components/layout";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

const suggestedQuestions = [
  "What are your technical skills?",
  "Tell me about your projects",
  "What certifications do you have?",
  "What is your career experience?",
  "How can I contact you?",
];

export default function AssistantPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    setMessages([
      {
        id: "welcome",
        role: "assistant",
        content:
          "Hello! I'm Rudrapratap's AI portfolio assistant. I can answer questions about his skills, projects, experience, certifications, and career goals. What would you like to know?",
        timestamp: new Date(),
      },
    ]);
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input.trim(),
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const history = messages
        .filter((m) => m.id !== "welcome")
        .slice(-10)
        .map((m) => ({
          role: m.role,
          content: m.content,
        }));

      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: userMessage.content,
          history,
        }),
      });

      const data = await response.json();

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: data.response,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      console.error("Error:", error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content:
          "I apologize, but I encountered an error. Please try again or use the suggested questions below.",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
      inputRef.current?.focus();
    }
  };

  const handleSuggestedQuestion = (question: string) => {
    setInput(question);
    inputRef.current?.focus();
  };

  const clearChat = () => {
    setMessages([
      {
        id: "welcome",
        role: "assistant",
        content:
          "Chat cleared! I'm ready to answer your questions about Rudrapratap. What would you like to know?",
        timestamp: new Date(),
      },
    ]);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <Layout>
      <section className="flex min-h-screen flex-col px-4 pt-32 pb-24 sm:px-6 lg:px-8">
        <div className="mx-auto flex w-full max-w-4xl flex-1 flex-col">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8 text-center"
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="relative mx-auto mb-6 h-20 w-20"
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/20 to-white/5 blur-xl" />
              <div className="relative glass-card flex h-full w-full items-center justify-center rounded-full">
                <Sparkles className="h-8 w-8" />
              </div>
            </motion.div>
            <h1 className="section-title gradient-text-primary mb-4">
              AI Assistant
            </h1>
            <p className="text-muted-foreground">
              Ask me anything about skills, projects, or experience
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bento-card mb-6 flex flex-1 flex-col overflow-hidden"
          >
            <div className="border-b border-white/5 p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="glass-card flex h-8 w-8 items-center justify-center rounded-lg">
                    <Bot className="h-4 w-4" />
                  </div>
                  <div>
                    <h2 className="text-sm font-medium">Portfolio Assistant</h2>
                    <p className="text-muted-foreground text-xs">
                      Powered by Groq AI
                    </p>
                  </div>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={clearChat}
                  className="text-muted-foreground hover:text-foreground flex items-center gap-2 text-sm transition-colors"
                >
                  <Trash2 className="h-4 w-4" />
                  Clear
                </motion.button>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-4 scrollbar-hide">
              <AnimatePresence>
                {messages.map((message) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className={`mb-4 flex ${
                      message.role === "user" ? "justify-end" : "justify-start"
                    }`}
                  >
                    <div
                      className={`flex max-w-[80%] items-start gap-3 ${
                        message.role === "user" ? "flex-row-reverse" : ""
                      }`}
                    >
                      <div
                        className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg ${
                          message.role === "user"
                            ? "bg-white/10"
                            : "glass-card"
                        }`}
                      >
                        {message.role === "user" ? (
                          <User className="h-4 w-4" />
                        ) : (
                          <Bot className="h-4 w-4" />
                        )}
                      </div>
                      <div
                        className={`rounded-2xl px-4 py-3 ${
                          message.role === "user"
                            ? "bg-white/10"
                            : "bg-white/5"
                        }`}
                      >
                        <div className="text-sm whitespace-pre-wrap">
                          {message.content.split("\n").map((line, i) => {
                            if (line.startsWith("•") || line.startsWith("-")) {
                              return (
                                <div key={i} className="flex gap-2">
                                  <span>{line}</span>
                                </div>
                              );
                            }
                            if (line.startsWith("**") && line.endsWith("**")) {
                              return (
                                <p key={i} className="font-semibold">
                                  {line.replace(/\*\*/g, "")}
                                </p>
                              );
                            }
                            return <p key={i}>{line}</p>;
                          })}
                        </div>
                        <p className="text-muted-foreground mt-1 text-xs">
                          {message.timestamp.toLocaleTimeString([], {
                            hour: "2-digit",
                            minute: "2-digit",
                          })}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>

              {isLoading && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="mb-4 flex justify-start"
                >
                  <div className="flex items-start gap-3">
                    <div className="glass-card flex h-8 w-8 items-center justify-center rounded-lg">
                      <Bot className="h-4 w-4" />
                    </div>
                    <div className="rounded-2xl bg-white/5 px-4 py-3">
                      <div className="flex items-center gap-2">
                        <Loader2 className="h-4 w-4 animate-spin" />
                        <span className="text-sm">Thinking...</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            <div className="border-t border-white/5 p-4">
              <div className="mb-4 flex flex-wrap gap-2">
                {messages.length <= 1 &&
                  suggestedQuestions.slice(0, 4).map((question) => (
                    <motion.button
                      key={question}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleSuggestedQuestion(question)}
                      className="glass-card rounded-full px-3 py-1.5 text-xs transition-colors hover:border-white/20"
                    >
                      {question}
                    </motion.button>
                  ))}
              </div>

              <form onSubmit={handleSubmit} className="flex gap-3">
                <div className="relative flex-1">
                  <textarea
                    ref={inputRef}
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Ask about skills, projects, experience..."
                    rows={1}
                    className="glass-card w-full resize-none rounded-xl border-0 bg-white/5 px-4 py-3 text-sm text-foreground outline-none ring-1 ring-white/10 transition-all placeholder:text-white/30 focus:ring-white/30"
                    disabled={isLoading}
                  />
                </div>
                <motion.button
                  type="submit"
                  disabled={!input.trim() || isLoading}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="glass-card flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl transition-colors hover:border-white/20 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <Send className="h-5 w-5" />
                </motion.button>
              </form>
              <p className="text-muted-foreground mt-2 text-center text-xs">
                Press Enter to send, Shift+Enter for new line
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
