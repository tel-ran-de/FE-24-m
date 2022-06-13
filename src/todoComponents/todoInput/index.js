import { useState } from 'react';

import style from './index.module.css'

function TodoInput(props) {
  // PROPS
	const addTodo = props.addTodo;
	const setInputValue = props.setInputValue;
	const inputValue = props.inputValue;
  const toggleAll = props.toggleAll;
  const setToggleAll = props.setToggleAll;


	return (
    <div className={style.todoInputContainer}>
      <span 
        className={`${style.toggleAll} ${toggleAll ? style.checked : ''}`}
        onClick={() => setToggleAll(!toggleAll)}
      >
        ❯
      </span>

      <input 
        onKeyPress={addTodo}
        onChange={(e) => setInputValue(e.target.value)}
        value={inputValue}
        type="text"

        className={style.newTodo}
      />

    </div>

	)
}

export default TodoInput;