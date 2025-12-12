import { useEffect, useRef } from "react";
import MessageBubble from "./MessageBubble";

export default function ChatWindow({ messages }) {
  const bottomRef = useRef();

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div style={{ height: "70vh", overflowY: "auto", padding: "10px", background: "#f0f2f5" }}>
      {/* {messages.map((msg, index) => (
        <MessageBubble key={index} text={msg.text} sender={msg.sender} /> 
      ))} */}
       {messages}
      <div ref={bottomRef} />
    </div>
  );
}
