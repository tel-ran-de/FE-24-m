import style from './style.module.css'

function ListItem(props){

  const todo = props.todo;
  const completeToggle = props.completedToggle;
  const deleteTodo = props.deleteTodo;
  
  return (
    <li className={`${style.todoItem} ${todo.completed ? style.checked : ''}`}>
      <span 
        onClick={() => completeToggle(todo.id)} 
        className={style.completed}
      ></span>
      <p className={style.title}> {todo.title} </p>
      <span
        onClick={() => deleteTodo(todo.id)}
        className={style.deleteTodo}
      ></span>
    </li>
  )
}

function TodoList(props){

  const todosList = props.todosList;
  const setTodosList = props.setTodosList;
  const activeTab = props.activeTab;
  const todosActive = props.todosActive;
  const todosCompleted = props.todosCompleted;

  function completeToggle(id){
    todosList.forEach(todo => {
      if(todo.id === id){
        todo.completed = !todo.completed;
      }
    });
    setTodosList([...todosList]);
  }

  function deleteTodo(id){
    const newTodoList = todosList.filter(todo => todo.id !== id);
    setTodosList(newTodoList);
  }

  let renderTodoList = [];

  if(activeTab === 'All') {
    renderTodoList = todosList;
  } else if(activeTab === 'Active'){
    renderTodoList = todosActive;
  } else if(activeTab === 'Completed'){
    renderTodoList = todosCompleted;
  }

  return (
    <ul className={style.todoList}>
    {
      renderTodoList.map((todo) => {
        return <ListItem 
                  todo = {todo}
                  key = {todo.id}
                  todosList = {todosList}
                  setTodosList = {setTodosList}
                  completedToggle={completeToggle}
                  deleteTodo={deleteTodo}
                />
      })
    }
    </ul>
  )
}

export default TodoList;