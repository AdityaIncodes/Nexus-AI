"use client";

interface Props {
  response: string;
}

export default function ChatBox({ response }: Props) {
  return (
    <div className="mt-6 border rounded-lg p-4 min-h-[200px]">
      <h2 className="font-semibold mb-2">AI Response</h2>

      <p>{response}</p>
    </div>
  );
}