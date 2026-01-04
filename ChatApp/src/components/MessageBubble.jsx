import { Card } from "antd";

export default function MessageBubble({ text, sender }) {
  const isMe = sender === "me";

  return (
    <div
      style={{
        display: "flex",
        justifyContent: isMe ? "flex-end" : "flex-start",
        margin: "6px 0",
      }}
    >
      <Card
        style={{
          maxWidth: "70%",
          minWidth: "fit-content",   //  prevents letter stacking
          padding: "0px 3px 0px 3px",
          background: isMe ? "#d6f5d6" : "#f1f1f1",

          whiteSpace: "normal",       //  reset
          wordBreak: "break-word",    //  break only long words
          overflowWrap: "break-word" //  NOT anywhere
        }}
        styles={{ padding: "0px 0px" }}
      >
        {text}
      </Card>
    </div>
  );
}
