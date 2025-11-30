import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../storeAndReducer/todoSlice";
import { Button, List }from "antd";


export default function Todos({ onEdit }) {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <div style={{width:"400px" }}>
      <h2>Todos</h2>

<List
  bordered
  grid={{gutter:16,column:1}}
  dataSource={todos}
  renderItem={(todo) => (
    <List.Item
      actions={[
        <Button onClick={() => onEdit(todo)}>Edit</Button>,
        <Button danger onClick={() => dispatch(removeTodo({ id: todo.id }))}>
          Delete
        </Button>,
      ]}
    >
      {todo.text}
    </List.Item>
  )}
/>
    </div>
  );
} 