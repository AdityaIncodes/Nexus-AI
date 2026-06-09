"use client";

import { useState } from "react";

interface Props {
  onSend: (prompt: string) => void;
}

export default function PromptInput({ onSend }: Props) {
  const [prompt, setPrompt] = useState("");

  return (
    <div className="flex gap-2 mt-4">
      <input
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Ask AI..."
        className="border p-3 flex-1 rounded-lg"
      />

      <button
        onClick={() => {
          onSend(prompt);
          setPrompt("");
        }}
        className="bg-black text-white px-4 rounded-lg"
      >
        Send
      </button>
    </div>
  );
}