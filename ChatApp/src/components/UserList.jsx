import { List, Avatar } from "antd";

export default function UserList({ users, selectedUser, onSelect }) {
  return (
    <div style={{
      width: "250px",
      height: "100vh",
      overflowY: "auto",
      borderRight: "1px solid #ddd",
      background: "#fff"
    }}>
      <List
        itemLayout="horizontal"
        dataSource={users}
        renderItem={(user) => (
          <List.Item
            onClick={() => onSelect(user)}
            style={{
              cursor: "pointer",
              background: selectedUser?.id === user.id ? "#e6f7ff" : "white",
              padding: "12px"
            }}
          >
            <List.Item.Meta
              avatar={<Avatar>{user.name[0]}</Avatar>}
              title={user.name}
            />
          </List.Item>
        )}
      />
    </div>
  );
}
