import React, { useContext, useState } from "react";
import { TodoContext } from "../context/TodoContext";

const Form = () => {
  const { dispatch, state } = useContext(TodoContext);
  const [newTodo, setNewTodo] = useState("");

  const handleChange = e => {
    setNewTodo(e.target.value);
  };

  const handleUpdateTodo = () => {
    dispatch({ type: "UPDATE_TODO", payload: newTodo });
  };
  const handleCompleted = () => {
    dispatch({ type: "CLEAR_COMPLETED" });
  };

  return (
    <div>
      <label htmlFor="todo">Add To Do</label>
      <input name="todo" type="text" onChange={handleChange} />
      <button onClick={handleUpdateTodo}>Add</button>
      <button onClick={handleCompleted}>Clear Completed</button>
    </div>
  );
};

export default Form;
