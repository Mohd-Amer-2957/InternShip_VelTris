export default function UserList({ users, selectedUser, onSelect }) {
  return (
    <div style={{ width: 250, borderRight: "1px solid #ddd" }}>
      {users.map((user) => (
        <div
          key={user} // ✅ string, unique
          onClick={() => onSelect(user)}
          style={{
            padding: "12px",
            cursor: "pointer",
            background: selectedUser === user ? "#e6f7ff" : "transparent",
          }}
        >
          {user} {/* ✅ string, renderable */}
        </div>
      ))}
    </div>
  );
}
