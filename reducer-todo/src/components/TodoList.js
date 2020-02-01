import React, { useContext } from "react";
import { TodoContext } from "../context/TodoContext";

const TodoList = () => {
  const { state, toggleTodo } = useContext(TodoContext);
  console.log("This is newState", state);
  return (
    <div>
      {state.map(todo => {
        return (
          <div key={todo.id} className={todo.completed ? "toggleEnabled" : ""}>
            <h1 onClick={() => toggleTodo(todo.id)}>{todo.item}</h1>
            <h3>{todo.id}</h3>
          </div>
        );
      })}
    </div>
  );
};
export default TodoList;
