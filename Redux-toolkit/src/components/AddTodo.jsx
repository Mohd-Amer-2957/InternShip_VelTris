import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo, updateTodo } from "../storeAndReducer/todoSlice";
import Todos from "./Todos";
import { Button,Form,Input } from "antd";

export default function AddTodo() {
  const [text, setText] = useState("");
  const [editId, setEditId] = useState(null);

  const dispatch = useDispatch();

  const handleSubmit = () => {
    if (!text.trim()) return;

    if (editId) {
      dispatch(updateTodo({ id: editId, text }));
      setEditId(null);
    } else {
      dispatch(addTodo(text));
    }

    setText("");
  };

  const startEdit = (todo) => {
    setText(todo.text);
    setEditId(todo.id);
  };

  return (
    <div>
     <Form>
     <Input 
      type="text"
      value={text}
      onChange={(e) => setText(e.target.value)}
      placeholder="Enter todo"
      style={{width:'300px'}}
     />
    
      <Button onClick={handleSubmit} type="primary" style={{marginLeft:'10px'}}>
        {editId ? "Update Todo" : "Add Todo"}
      </Button>
      </Form>

      <Todos onEdit={startEdit} />
    </div>
  );
}
