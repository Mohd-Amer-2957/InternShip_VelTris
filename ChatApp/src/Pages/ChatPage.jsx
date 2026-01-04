import { useEffect, useState } from "react";
import { Input, Button } from "antd";
import UserList from "../components/UserList";
import ChatWindow from "../components/ChatWindow";
import MessageInput from "../components/MessageInput";
import { connectSocket, sendMessage } from "../api/websocket";
import { fetchChatHistory } from "../api/messages";
import { fetchUsers } from "../api/users";

export default function ChatPage() {
  const [myName, setMyName] = useState("Amer");
  const [nameInput, setNameInput] = useState("");
  const [isConnected, setIsConnected] = useState(false);

  const [messages, setMessages] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [users, setUsers] = useState([]);



  // 🔹 CONNECT SOCKET — ONCE
  const connect = () => {
    const finalName = nameInput.trim() || "Amer";
    setMyName(finalName);

    console.log("✅ CONNECT CLICKED, name =", finalName);



  connectSocket((rawMsg) => {
  const msg = parseSocketMessage(rawMsg);
  if (!msg) return;

  const finalMsg = {
    ...msg,
    to: finalName, 
  };

  setMessages((prev) => [...prev, finalMsg]);

}, finalName);



    setIsConnected(true);
  };





  // 🔹 LOAD USERS (polling)
  useEffect(() => {
    if (!isConnected || !myName) return;

    const loadUsers = () => {
      fetchUsers()
        .then((list) => {
          setUsers(list.filter((u) => u !== myName));
        })
        .catch(console.error);
    };

    loadUsers();
    const interval = setInterval(loadUsers, 10000);
    return () => clearInterval(interval);
    
  }, [isConnected, myName]);



  const fetchHistory = () => {
    fetchChatHistory(myName, selectedUser)
      .then((history) => {
        setMessages(history);
      })
      .catch(console.error);
  };
  

  
  
  // 🔹 LOAD HISTORY WHEN USER CHANGES
 useEffect(() => {
  if (!selectedUser || !myName) return;

  if (messages.length === 0) {
    fetchChatHistory(myName, selectedUser)
      .then(setMessages)
      .catch(console.error);
  }
}, [selectedUser, myName]);



  // 🔹 SEND MESSAGE
  const handleSend = (text) => {
    if (!selectedUser) return;

    const msg = { from: myName, to: selectedUser, text };

    // 🔴 instant sender UI update
    setMessages((prev) => [...prev, msg]);  
    sendMessage(`TO:${selectedUser} ${text}`);  
  };

  

  // 🔹 FILTER FOR CURRENT CHAT
  const filteredMessages = messages.filter(
    (m) =>
      selectedUser &&
      ((m.from === myName && m.to === selectedUser) ||
        (m.from === selectedUser && m.to === myName))
  );
  











  // 🔹 LOGIN SCREEN
  if (!isConnected) {
    return (
      <div
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: 10,
        }}
      >
        <h2>Enter your name</h2>
        <Input
          value={nameInput}
          onChange={(e) => setNameInput(e.target.value)}
          placeholder="Your name"
          style={{ width: 200 }}
        />
        <Button type="primary" onClick={connect}>
          Join Chat
        </Button>
      </div>
    );
  }

  // 🔹 CHAT UI
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <UserList
        users={users}
        selectedUser={selectedUser}
        onSelect={setSelectedUser}
      />

      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <div style={{ padding: 10, fontWeight: "bold" }}>
          Logged in as: {myName}
        </div>

        {selectedUser ? (
          <>
            <ChatWindow messages={filteredMessages} myName={myName} />
            <MessageInput onSend={handleSend} />
          </>
        ) : (
          <div style={{ padding: 20 }}>Select a user to start chatting</div>
        )}
      </div>
    </div>
  );
}



// 🔹 SOCKET MESSAGE PARSER
function parseSocketMessage(raw) {
  console.log("📩 RAW SOCKET:", raw);

  if (typeof raw !== "string") return null;


  // Matches: "From Sai: hii"
  const match = raw.match(/^From\s+(\w+)\s*:\s*(.+)$/i);

  if (!match) {
    console.warn("❌ Unrecognized socket message format:", raw);
    return null;
  }

  const from = match[1];
  const text = match[2];

  return {
    from,
    to: null, // receiver is implicitly "me"
    text,
  };
}

