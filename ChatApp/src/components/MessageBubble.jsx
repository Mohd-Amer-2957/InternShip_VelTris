import { Card } from "antd";

export default function MessageBubble({ text, sender }) {
  const align = sender === "me" ? "right" : "left";

  return (
    <div style={{ textAlign: align, margin: "6px 0" }}>
      <Card style={{ display: "inline-block", maxWidth: "60%" }}>
        {text}
      </Card>
    </div>
  );
}
