import style from './index.module.css'

import { useState,useMemo,useEffect } from 'react'

import TodoPanelHeader from './TodoPanelHeader'
import TodoPanelDate from './TodoPanelDate'
import TodoPanelNote from './TodoPanelNote'
import TodoPanelDelete from './TodoPanelDelete'

function TodoPanel({
  showPanelTodo, setShowPanelTodo, 
  selectedList,
  lists, setLists,
  selectedTodo, setSelectedTodo,
  setSelectedList
}){


  const [title, setTitle] = useState('');
  const [important, setImportant] = useState(false);
  const [completed, setCompleted] = useState(false);

  // useMemo(function() {
  //   lists[selectedList].todos.forEach((todo)=>{
  //     if (todo.id === selectedTodo) {
  //       setTitle(todo.title);
  //       setImportant(todo.important);
  //       setCompleted(todo.completed);
  //     }
  //   })
  // },[selectedTodo])


  // useEffect(function updateTodo(){
  //     setLists(lists, selectedList, selectedTodo,
  //       {
  //         changeTodoCompleted: completed,
  //         changeTodoImportant: important, 
  //         changeTodoTitle: title, 
  //       },
  //     )
  // },[completed,important,title])




  return (
    <section className={`${style.todoPanel} ${showPanelTodo ? style.isShown : ''}`}>
      <TodoPanelHeader
      	title={title}
        setTitle={setTitle}
      	important={important}
        setImportant={setImportant}
      	completed={completed}
        setCompleted={setCompleted}
      />
      <TodoPanelDate />
      <TodoPanelNote />
      <TodoPanelDelete />
    </section>  
  )
}





export default TodoPanel;