"use client";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane, faRobot, faUser } from "@fortawesome/free-solid-svg-icons";
import ReactMarkdown from "react-markdown";
import TypeWriter from "@/components/TypeWriter";

export default function ChatPage() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  async function sendMessage() {
    if (input.trim() === "") return;

    setLoading(true);
    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });
      const data = await response.json();
      const assistantText = (data?.message ?? "").toString().trim() || "No response from the server. Please try again.";

      if (!response.ok) {
        setErrorMessage(assistantText);
      } else {
        setErrorMessage("");
      }

      setMessages((prevMessages) => [
        ...prevMessages,
        { role: "user", content: input },
        { role: "assistant", content: assistantText },
      ]);
    } catch (err) {
      console.error("Chat error:", err);
      setMessages((prevMessages) => [
        ...prevMessages,
        { role: "user", content: input },
        { role: "assistant", content: "Failed to get a response. Please try again." },
      ]);
    } finally {
      setInput("");
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto flex min-h-screen max-w-5xl flex-col px-4 py-8 sm:px-6 lg:px-8">
        <header className="mb-6 rounded-3xl border border-white/10 bg-slate-900/80 p-6 shadow-2xl shadow-slate-950/20 backdrop-blur">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="mb-2 text-sm uppercase tracking-[0.3em] text-sky-400/80">AI chat experience</p>
              <h1 className="text-4xl font-semibold tracking-tight text-white">SmartChat AI</h1>
              <p className="mt-2 max-w-2xl text-sm text-slate-400">
                Modern chat UI with conversational bubbles, smooth input, and clear message flow.
              </p>
            </div>
            <div className="flex items-center gap-3 rounded-full bg-slate-800/80 px-4 py-3 text-sm text-slate-300 shadow-inner shadow-slate-950/10">
              <FontAwesomeIcon icon={faRobot} className="text-sky-400" />
              Live bot ready
            </div>
          </div>
        </header>

        <main className="flex-1 overflow-hidden rounded-[32px] border border-white/10 bg-slate-900/90 shadow-2xl shadow-slate-950/25">
          <div className="flex h-full flex-col">
            <div className="flex-1 overflow-y-auto px-6 py-6 sm:px-8">
              <div className="space-y-4">
                {errorMessage && (
                  <div className="rounded-lg border border-red-500/30 bg-red-900/60 p-3 text-sm text-red-200">
                    {errorMessage}
                    <button
                      onClick={() => setErrorMessage("")}
                      className="ml-4 font-semibold text-red-100 underline"
                    >
                      Dismiss
                    </button>
                  </div>
                )}
                {messages.length === 0 ? (
                  <div className="rounded-3xl border border-dashed border-slate-700/70 bg-slate-950/60 p-10 text-center text-sm text-slate-400">
                    Start the conversation by typing a message below.
                  </div>
                ) : (
                  messages.map((message, index) => {
                    const isUser = message.role === "user";
                    return (
                      <div key={index} className={`flex items-start gap-4 ${isUser ? "justify-end" : "justify-start"}`}>
                        {!isUser && (
                          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-sky-500 text-white shadow-lg shadow-sky-500/20">
                            <FontAwesomeIcon icon={faRobot} />
                          </div>
                        )}
                        <div className={`max-w-[80%] rounded-3xl px-5 py-4 text-left shadow-md ${isUser ? "bg-slate-200 text-slate-900" : "bg-gradient-to-br from-sky-500 to-blue-600 text-white"}`}>
                          <div className="text-sm leading-6">
                            {!isUser && index === messages.length - 1 ? (
                              <TypeWriter text={message.content} />
                            ) : (
                              message.content
                            )}
                          </div>
                        </div>
                        {isUser && (
                          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-700 text-slate-100 shadow-lg shadow-slate-950/20">
                            <FontAwesomeIcon icon={faUser} />
                          </div>
                        )}
                      </div>
                    );
                  })
                )}
              </div>
            </div>

            <div className="border-t border-white/10 bg-slate-950/95 px-4 py-4 sm:px-6">
              <div className="mx-auto flex max-w-4xl gap-3">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type your message..."
                  autoComplete="off"
                  className="min-w-0 flex-1 rounded-3xl border border-slate-800 bg-slate-900 px-4 py-3 text-sm text-slate-100 outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-400/20"
                />
                <button
                  onClick={sendMessage}
                  disabled={loading || input.trim() === ""}
                  className="shrink-0 inline-flex items-center justify-center rounded-3xl bg-sky-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-sky-400 disabled:cursor-not-allowed disabled:bg-slate-700"
                >
                  <FontAwesomeIcon icon={faPaperPlane} className="mr-2" />
                  {loading ? "..." : "Send"}
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

