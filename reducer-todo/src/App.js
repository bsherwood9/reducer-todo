import React, { useReducer } from "react";
import "./App.css";

//imports
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import { TodoContext } from "./context/TodoContext";
import { myReducer, initialState } from "./reducers/reducer";

function App() {
  const [state, dispatch] = useReducer(myReducer, initialState);

  const toggleTodo = arg => {
    dispatch({ type: "TOGGLE_TODO", payload: arg });
  };
  return (
    <TodoContext.Provider value={{ state, dispatch, toggleTodo }}>
      <div>
        <Form />
        <TodoList />
      </div>
    </TodoContext.Provider>
  );
}

export default App;
