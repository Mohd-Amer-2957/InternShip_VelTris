import { useEffect, useState } from "react";
import { Button, Input } from "antd";
import UserList from "../components/UserList";
import ChatWindow from "../components/ChatWindow";
import MessageInput from "../components/MessageInput";
import { connectSocket, sendMessage } from "../api/websocket";

export default function ChatPage() {
 
  const [messages, setMessages] = useState("");
  const [value, setValue] = useState("");
  const [input, setInput] = useState("");

  const [users, setUsers] = useState([
    { id: 1, name: "Amer" },
    { id: 2, name: "Pardha" },
    { id: 3, name: "Leela" },
    { id: 4, name: "Khaja bhai" },
  ]);

  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    if (value !== "") {
      connectSocket((msg) => {
        console.log(msg);
        setMessages((prev) => [...prev, msg]);
      }, value);
    }
  }, [value]);


  const handleSend = (text) => {
    // const msgObj = {
    //   text,
    //   sender: "me",
    //   receiver: selectedUser?.name,
    // };

    setMessages((prev) => [...prev, text]);
    sendMessage(text);

    // setMessages((prev) => [...prev, msgObj]);
    // sendMessage(msgObj);
  };

  const handleSubmit = () => {
    setValue((prev) => input);
  };
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      {/* user input */}
      <div>
        <div>
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type something..."
          />
          <Button type="primary" onClick={handleSubmit}>
            Submit
          </Button>
        </div>

        <p>User: {value}</p>
      </div>

      <UserList
        users={users}
        selectedUser={selectedUser}
        onSelect={setSelectedUser}
      />

      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        {/* <ChatWindow messages={messages.filter(m =>
          selectedUser ? m.receiver === selectedUser.name || m.sender === selectedUser.name : true
        )} /> */}

        <ChatWindow messages={messages} />

        <MessageInput onSend={handleSend} />
      </div>
    </div>
  );
}
