export default function ChatWindow({ messages, myName }) {
  return (
    <div
      style={{
        flex: 1,
        overflowY: "auto",
        padding: "10px",
        background: "#f0f2f5",
      }}
    >
      {messages.map((msg, index) => (
        <div
          key={index}
          style={{
            textAlign: msg.from === myName ? "right" : "left",
            marginBottom: "8px",
          }}
        >
          <span
            style={{
              display: "inline-block",
              padding: "6px 10px",
              borderRadius: "8px",
              background: msg.from === myName ? "#4deba2ff" : "#d1d9ebff",
              color: msg.from === myName ? "#000" : "#000",
            }}
          >
            {msg.text}
          </span>
        </div>
      ))}
    </div>
  );
}















