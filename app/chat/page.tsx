"use client";

import { useState } from "react";
import PromptInput from "@/components/PromptInput";
import ChatBox from "@/components/ChatBox";

export default function ChatPage() {
  const [response, setResponse] = useState("");

  const sendPrompt = async (prompt: string) => {
    const res = await fetch("/api/chat", {
      method: "POST",
      body: JSON.stringify({ prompt }),
    });

    const data = await res.json();

    setResponse(data.response);
  };

  return (
    <main className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4">
        AI Assistant
      </h1>

      <PromptInput onSend={sendPrompt} />

      <ChatBox response={response} />
    </main>
  );
}