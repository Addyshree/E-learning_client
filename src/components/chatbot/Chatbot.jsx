// components/ChatBot.jsx
import { useState } from "react";

export default function ChatBot() {
  const [query, setQuery] = useState("");
  const [chat, setChat] = useState([]);

  const handleSend = async () => {
    const res = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: query }),
    });
    const data = await res.json();
    setChat([
      ...chat,
      { type: "user", text: query },
      { type: "bot", text: data.answer },
    ]);
    setQuery("");
  };

  return (
    <div>
      <div style={{ maxHeight: 300, overflowY: "auto" }}>
        {chat.map((msg, i) => (
          <div
            key={i}
            style={{ textAlign: msg.type === "user" ? "right" : "left" }}
          >
            <p>
              <strong>{msg.type}:</strong> {msg.text}
            </p>
          </div>
        ))}
      </div>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Ask your doubt..."
      />
      <button onClick={handleSend}>Send</button>
    </div>
  );
}
