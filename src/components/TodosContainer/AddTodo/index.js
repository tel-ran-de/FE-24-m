import {useState} from 'react';
import style from './index.module.css'

function AddTodo({todos, setTodos}){

  return (  
      <button 
        type='submit'
        className={style.addButton}
        onClick={(e) => e.preventDefault()}
      >Add a task</button>
    )
}

export default AddTodo;