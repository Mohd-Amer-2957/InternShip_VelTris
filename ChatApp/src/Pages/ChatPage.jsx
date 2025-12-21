import { useEffect, useState } from "react";
import { Input, Button } from "antd";
import UserList from "../components/UserList";
import ChatWindow from "../components/ChatWindow";
import MessageInput from "../components/MessageInput";
import { connectSocket, sendMessage } from "../api/websocket";
import { fetchChatHistory } from "../api/messages";
import { fetchUsers } from "../api/users";

export default function ChatPage() {
  const [myName, setMyName] = useState("Amer"); // default
  const [nameInput, setNameInput] = useState("");
  const [isConnected, setIsConnected] = useState(false);

  const [messages, setMessages] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [users, setUsers] = useState([]); // array of strings

  // const users = [
  //   { id: 1, name: "Amer" },
  //   { id: 2, name: "Pardha" },
  //   { id: 3, name: "Leela" },
  //   { id: 4, name: "Khaja" },
  // ];

  useEffect(() => {
    if (!isConnected || !myName) return;

    const loadUsers = () => {
      fetchUsers()
        .then((list) => {
          // remove self
          setUsers(list.filter((u) => u !== myName));
        })
        .catch(console.error);
    };

    // initial load
    loadUsers();

    // 🔴 poll every 3 seconds
    const interval = setInterval(loadUsers, 3000);

    return () => clearInterval(interval);
  }, [isConnected, myName]);










  const connect = () => {
    const finalName = nameInput.trim() || "Amer";
    setMyName(finalName);

    connectSocket((rawMsg) => {
      const msg = parseIncomingMessage(rawMsg);
      if (msg) {
        setMessages((prev) => [...prev, msg]);
      }
    }, finalName);

    setIsConnected(true);
  };

  const handleSend = (text) => {
    if (!selectedUser) return;

    const msgObj = {
      from: myName,
      to: selectedUser,
      text,
    };

    setMessages((prev) => [...prev, msgObj]);
    sendMessage(`TO:${selectedUser} ${text}`);
  };

  const filteredMessages = messages.filter(
    (m) =>
      selectedUser &&
      ((m.from === myName && m.to === selectedUser) ||
        (m.from === selectedUser && m.to === myName))
  );






  useEffect(() => {
  if (!selectedUser || !myName) return;

  setMessages([]);

  fetchChatHistory(myName, selectedUser)
    .then(setMessages)
    .catch(console.error);
}, [selectedUser, myName,filteredMessages]);









  // 🔴 BEFORE LOGIN SCREEN
  if (!isConnected) {
    return (
      <div
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: "10px",
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

  // 🟢 AFTER LOGIN SCREEN
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <UserList
        users={users.filter((u) => u.name !== myName)}
        selectedUser={selectedUser}
        onSelect={setSelectedUser}
      />

      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <div style={{ padding: "10px", fontWeight: "bold" }}>
          Logged in as: {myName}
        </div>

        {selectedUser ? (
          <>
            <ChatWindow messages={filteredMessages} myName={myName} />
            <MessageInput onSend={handleSend} />
          </>
        ) : (
          <div style={{ padding: "20px" }}>Select a user to start chatting</div>
        )}
      </div>
    </div>
  );
}

function parseIncomingMessage(raw) {
  // Expected: FROM:Pardha TO:Amer hello
  if (!raw.startsWith("FROM:")) return null;

  const from = raw.match(/FROM:(\w+)/)?.[1];
  const to = raw.match(/TO:(\w+)/)?.[1];
  const text = raw.replace(/FROM:.*?TO:.*?\s/, "");

  return { from, to, text };
}












// import { useEffect, useState } from "react";
// import { Button, Input, Select } from "antd";
// import UserList from "../components/UserList";
// import ChatWindow from "../components/ChatWindow";
// import MessageInput from "../components/MessageInput";
// import { connectSocket, sendMessage } from "../api/websocket";

// const { Option } = Select;

// export default function ChatPage() {
//   const [messages, setMessages] = useState("");
//   const [value, setValue] = useState("");
//   const [input, setInput] = useState("");

//   const [users, setUsers] = useState([
//     { id: 1, name: "Amer" },
//     { id: 2, name: "Pardha" },
//     { id: 3, name: "Leela" },
//     { id: 4, name: "Khaja bhai" },
//   ]);

//   const [selectedUser, setSelectedUser] = useState(null);

//   useEffect(() => {
//     if (value !== "") {
//       connectSocket((msg) => {
//         console.log(msg);
//         setMessages((prev) => [...prev, msg]);
//       }, value);
//     }
//   }, [value]);

//   const handleSend = (text) => {
//     // const msgObj = {
//     //   text,
//     //   sender: "me",
//     //   receiver: selectedUser?.name,
//     // };

//     setMessages((prev) => [...prev, text]);
//     sendMessage(text);

//     // setMessages((prev) => [...prev, msgObj]);
//     // sendMessage(msgObj);
//   };

//   // const handleSubmit = () => {
//   //   setValue(() => input);
//   // };

//   const handleSubmit = () => {
//     if (!selectedUser || !input.trim()) return;

//     const payload = {
//       to: selectedUser.name, // or selectedUser.id
//       message: input,
//     };

//     console.log("Sending:", payload);

//     setInput("");
//   };

//   return (
//     <div style={{ display: "flex", height: "100vh" }}>
//       <UserList
//         users={users}
//         selectedUser={selectedUser}
//         onSelect={setSelectedUser}
//       />
//       <div style={{ display: "flex", gap: "10px" }}>
//         <Select
//           placeholder="Select user"
//           style={{ width: 180 }}
//           onChange={(id) => setSelectedUser(users.find((u) => u.id === id))}
//         >
//           {users.map((user) => (
//             <Option key={user.id} value={user.id}>
//               {user.name}
//             </Option>
//           ))}
//         </Select>

//       </div>

//       <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
//         {/* <ChatWindow messages={messages.filter(m =>
//           selectedUser ? m.receiver === selectedUser.name || m.sender === selectedUser.name : true
//         )} /> */}

//         <ChatWindow messages={messages} />
//         <MessageInput onSend={handleSend} />
//       </div>
//     </div>
//   );
// }
