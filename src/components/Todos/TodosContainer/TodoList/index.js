import TodoBox from './TodoBox'
import style from './index.module.css'

function TodoList({
  lists, 
  setLists, 
  activeTab, 
  selectedList, 
  setShowPanelTodo, 
  showPanelTodo, 
  setSelectedTodo,
  selectedTodo,
}) {
  const todos = lists[selectedList].todos;

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
                  showPanelTodo = {showPanelTodo}
                  setShowPanelTodo = {setShowPanelTodo}
                  setSelectedTodo={setSelectedTodo}
                  selectedTodo={selectedTodo}
                />
      })}
    </ul>
  )
}

export default TodoList;