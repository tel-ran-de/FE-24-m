import style from './index.module.css'


function TodoList(props) {
	const todoList = props.todoList;
  const setTodoList = props.setTodoList;

  function completedToggle(id) {
    todoList.forEach((todo, index) => {
      if (todo.id === id) {
        todoList[index].completed = !todoList[index].completed;
      }
    })
    setTodoList([...todoList]);
  }

  function deleteTodo(id) {
    const newTodoList = [];
    todoList.forEach((todo) => {
      if (todo.id !== id) {
        newTodoList.push(todo);
      }
    })
    setTodoList(newTodoList);
  }

	return(
    <ul className={style.list}>
      {
        todoList.map((todo, index) => (
          <TodoItem 
            key={todo.id} 
            todoList={todoList} 
            todo={todo} 
            index={index}
            completedToggle={completedToggle}
            deleteTodo={deleteTodo}
            />
        )) 
      }
    </ul>
	)
}


function TodoItem(props) {
  const todoList = props.todoList;
  const todo = props.todo;
  const index = props.index;
  const completedToggle = props.completedToggle;
  const deleteTodo = props.deleteTodo;



  return(
    <li className={`${style.listItem} ${todoList[index].completed ? style.checked : '' }`}>
      <span 
        onClick={() => completedToggle(todo.id)} 
        className={style.completed}>
      </span>
     {todo.title} 
      <span 
        onClick={() => deleteTodo(todo.id)} 
        className={style.deleteTodo}>
      </span>
    </li>
  )
}


export default TodoList;