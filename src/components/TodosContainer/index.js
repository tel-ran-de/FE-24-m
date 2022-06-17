import TodoList from "./TodoList";

function TodosContainer ({todos,setTodos}) {
    return (
        <TodoList 
            todos={todos}
            setTodos={setTodos}
        />
    )
}

export default TodosContainer;