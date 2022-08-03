import { useEffect } from 'react';
import style from './style.module.css'

function TodoInput (props){

  const value = props.value;
  const setValue = props.setValue;
  const addTodo = props.addTodo;
  const toggleAll = props.toggleAll;
  const setToggleAll = props.setToggleAll;

  return(
    <div className={style.inputWrapper}>
    <span 
        className={`${style.toggleAll} ${toggleAll ? style.checked : ''}`}
        onClick={() => setToggleAll(!toggleAll)}
      >
        ❯
      </span>
      
      <input
        type='text'
        className={style.input}
        placeholder="What needs to be done?"

        value={value}
        onChange={(event) => setValue(event.target.value)}
        onKeyPress={addTodo}
        />
    </div>    
  )
}

export default TodoInput;