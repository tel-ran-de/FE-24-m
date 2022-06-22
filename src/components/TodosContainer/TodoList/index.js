import TodoBox from './TodoBox'
import style from './index.module.css'

function TodoList({lists, setLists, activeTab, selectedList}) {
  const todos = selectedList.todos;

  const completedTodos = todos.filter(todo => todo.completed);
  let renderTodos = [];

  if(activeTab === 'Completed'){
    renderTodos = completedTodos;
  } else {
    renderTodos = todos;
  }

  return (
    <ul className={style.todoList}>
      {renderTodos.map(todo => {
        return <TodoBox
                  key={todo.id}
                  todo = {todo}
                  lists={lists}
                  setLists={setLists}
                  selectedList={selectedList}
                />
      })}
    </ul>
  )
}

export default TodoList;