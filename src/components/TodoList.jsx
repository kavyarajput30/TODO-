import { useState } from "react";
import { useTodo } from "../context";

const TodoList = ({ todo }) => {
  const [canEdit, setcanedit] = useState(false);

  const [todoMsg, setTodoMsg] = useState(todo.todo);

  const { updateTodo, deleteTodo, toggleComplete } = useTodo();

  const deleteHandler = () => {
    deleteTodo(todo.id);
  };

  const editHandler = () => {
    updateTodo(todo.id, { todo: todoMsg, ...todo });
    setcanedit(false);
  };

  const iscompleteHandler = () => {
    toggleComplete(todo.id);
  };

  return (
    <div
      style={{
        display: "flex",
        paddingLeft:"15px",
        alignItems:"center",
        justifyContent: "space-between",
        backgroundColor: todo.completed ? "lightgreen" : "lightblue",
      }}
    >
      <div>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={iscompleteHandler}
          style={{width:"18px", height:"20px" , marginRight:"20px"}}
        />

        <input
          type="text"
          value={todoMsg}
          style={{
            color: "black",
            fontSize:"23px",
            border: canEdit ? "1px solid black" : "none",
            textDecoration: todo.completed ? "line-through" : "none",
            backgroundColor: canEdit ? "white" : "transparent",
          }}
          onChange={(e) => {
            return setTodoMsg(e.target.value);
          }}
          readOnly={!canEdit}
        />
      </ div>
      <div>
        <button style={{ padding: "10px 15px" }} onClick={deleteHandler}>
          ❌
        </button>

        <button
          style={{ padding: "10px 15px" }}
          onClick={() => {
            if (todo.completed) return;
            if (canEdit) {
              editHandler();
            } else {
              setcanedit((prev) => !prev);
            }
          }}
          disabled={todo.completed}
        >
          {canEdit ? "📁" : "✏️"}
        </button>
      </div>
    </div>
  );
};

export default TodoList;
