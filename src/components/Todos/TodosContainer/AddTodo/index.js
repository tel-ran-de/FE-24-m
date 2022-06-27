import {useState} from 'react';
import style from './index.module.css'

function AddTodo({todos, setTodos, setShowPanelTodo}){

	function showPanel(e) {
		e.preventDefault();
		setShowPanelTodo(true);
	}

  return (  
      <button 
        type='submit'
        className={style.addButton}
        onClick={showPanel}
      >Add a task</button>
    )
}

export default AddTodo;