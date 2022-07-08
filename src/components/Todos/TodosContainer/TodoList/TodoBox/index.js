
import style from './index.module.css';

import TodoImportant from './TodoImportant';
import TodoCompleted from './TodoCompleted';
import TodoDesc from './TodoDesc';

function TodoBox({
  todo, // всё, что должно остаться в TodoBox
  // lists, // уже не нужно
  // setLists,  // уже не нужно
  // selectedList,  // уже не нужно
  setShowPanelTodo,  // нужно убрать (в интерфейс)
  showPanelTodo, // нужно убрать (в интерфейс)
  setSelectedTodo, // нужно убрать (контент - dispatch todoSelected(listId, todoId))
  selectedTodo, // нужно убрать (контент - todo:{...todo, selected: true})
  // selectedListId, // уже не нужно
}) {
  function editTodo(todo) {
    setSelectedTodo(todo.id);

    if (selectedTodo === todo.id) {
      setShowPanelTodo(!showPanelTodo);
    } else {
      setShowPanelTodo(true);
    }
  }


  return (
    <li className={style.todoItem} onClick={(e) => editTodo(todo)}>
      <TodoCompleted todoId={todo.id} />
      <TodoDesc todoId={todo.id} />
      <TodoImportant todoId={todo.id} />
    </li>
  )
}

export default TodoBox;