

import SideBar from "./components/SideBar";
import TodosContainer from "./components/TodosContainer";
import { useState } from 'react'

function UnoTodo() {
  const [todos,setTodos] = useState([]);
  return (
    <>
      <SideBar
        todos={todos}
        setTodos={setTodos}
      />
      <TodosContainer
        todos={todos}
        setTodos={setTodos}
      />
    </>
  );
}

export default UnoTodo;
