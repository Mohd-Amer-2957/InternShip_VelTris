import { useState } from "react";
import { Input, Button } from "antd";

export default function MessageInput({ onSend }) {
  const [text, setText] = useState("");

  const send = () => {
    if (!text.trim()) return;
    onSend(text);
    setText("");
  };

  return (
    <div style={{ display: "flex", padding: "10px", gap: "10px" }}>
      <Input
        value={text}
        onChange={(e) => setText(e.target.value)}
        onPressEnter={send}
        placeholder="Type a message..."
      />
      <Button type="primary" onClick={send}>
        Send
      </Button>
    </div>
  );
}














// import { Input, Button } from "antd";
// import { useState } from "react";

// export default function MessageInput({ onSend }) {
//   const [text, setText] = useState("");

//   const send = () => {
//     if (!text.trim()) return;
//     onSend(text);
//     setText("");
//   };

//   return (
//     <div style={{ display: "flex", padding: "10px" }}>
//       <Input
//         value={text}
//         onChange={(e) => setText(e.target.value)}
//         onPressEnter={send}
//         placeholder="Type a message..."
//       />
//       <Button type="primary" onClick={send} style={{ marginLeft: "10px" }}>
//         Send
//       </Button>
//     </div>
//   );
// }
