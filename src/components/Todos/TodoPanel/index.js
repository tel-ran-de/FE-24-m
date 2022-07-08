import style from './index.module.css'

import TodoPanelHeader from './TodoPanelHeader'
import TodoPanelDate from './TodoPanelDate'
import TodoPanelNote from './TodoPanelNote'
import TodoPanelDelete from './TodoPanelDelete'
import { useMemo } from 'react'

function TodoPanel({
  showPanelTodo, setShowPanelTodo, 
  selectedList,
  lists, setLists,
  selectedTodo, setSelectedTodo,
  setSelectedList
}){

  const todo = useMemo(
    () => {
      const todo = lists[selectedList].todos.find(item => item.id === selectedTodo);
      if(todo) {
        return todo;
      } else {
        return lists[selectedList].todos[0];
      }
    }, [selectedTodo]
  )

  //console.log(todo);

  function setTitle(value){
    setLists(
      lists,
      selectedList,
      selectedTodo,
      {
        changeTodoTitle: value,
      }
    ) 
  }

  function setImportant(value){
    setLists(
      lists,
      selectedList,
      selectedTodo,
      {
        changeTodoImportant: value,
      }
    ) 
  }

  function setCompleted(value){
    setLists(
      lists,
      selectedList,
      selectedTodo,
      {
        changeTodoCompleted: value,
      }
    ) 
  }
  
  function setNote(value){
    setLists(
      lists,
      selectedList,
      selectedTodo,
      {
        changeTodoNote: value,
      }
    ) 
  }

  function setDate(value){
    
    setLists(
      lists,
      selectedList,
      selectedTodo,
      {
        changeTodoDate: value,
      }
    ) 
  }

  return (
    <section className={`${style.todoPanel} ${showPanelTodo ? style.isShown : ''}`}>
      <TodoPanelHeader
      	title={todo.title}
        setTitle={setTitle}
      	important={todo.important}
        setImportant={setImportant}
      	completed={todo.completed}
        setCompleted={setCompleted}
      />
      <TodoPanelDate 
        date={todo.date}
        setDate={setDate}
      />
      <TodoPanelNote 
        note={todo.note}
        setNote={setNote}
      />
      <TodoPanelDelete 
        createTodoDate={todo.createDate}
        setShowPanelTodo={setShowPanelTodo}
        setLists={setLists}
        selectedList={selectedList}
        lists={lists}
        selectedTodo={selectedTodo}
      />
    </section>  
  )
}





export default TodoPanel;