import { useEffect, useRef } from "react";
import MessageBubble from "./MessageBubble";

export default function ChatWindow({ messages, myName }) {
  const bottomRef = useRef(null);
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div
      style={{
        flex: 1,
        padding: 10,
        overflowY: "auto",
        background: "#cbd9edff",
      }}
    >
      {messages.map((msg, i) => (
        <div
          key={i}
          style={{
            display: "flex",
            justifyContent: msg.from === myName ? "flex-end" : "flex-start",
            margin: "8px 0",
          }}
        >
          <MessageBubble  
            text={msg.text}
            sender={msg.from === myName ? "me" : "other"}
          />
        </div>
      ))}
      <div ref={bottomRef} />
    </div>
  );
}
