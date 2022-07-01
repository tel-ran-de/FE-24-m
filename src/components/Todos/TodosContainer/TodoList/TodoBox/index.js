
import style from './index.module.css';

import TodoImportant from './TodoImportant';
import TodoCompleted from './TodoCompleted';
import TodoDesc from './TodoDesc';

function TodoBox({
  todo, 
  lists, 
  setLists, 
  selectedList, 
  setShowPanelTodo, 
  showPanelTodo,
  setSelectedTodo,
  selectedTodo,
}) {
  const id = todo.id;

  function editTodo(todo) {
    setSelectedTodo(todo.id);

    if (selectedTodo === todo.id) {
      setShowPanelTodo(!showPanelTodo);
    } else {
      setShowPanelTodo(true);
    }
  }

  function setIsCompleted(value){
    setLists(lists, selectedList, id,
      {
        changeTodoCompleted: value,
      },
    )
  }

  function setIsImportant(value){
    setLists(lists, selectedList, id,
      {
        changeTodoImportant: value, 
      },
    )
  }


  return (
    <li className={style.todoItem} onClick={(e) => editTodo(todo)}>
      <TodoCompleted
        isCompleted={todo.completed}
        setIsCompleted={setIsCompleted}
      />
      <TodoDesc todo={todo} />
      <TodoImportant 
        isImportant={todo.important}
        setIsImportant={setIsImportant}
      />
    </li>
  )
}

export default TodoBox;