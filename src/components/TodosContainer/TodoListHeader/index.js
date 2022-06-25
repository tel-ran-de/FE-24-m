import { useState, useRef, useEffect } from 'react'

import { useLists } from '../../../helpers';

import style from './index.module.css'

function TodoListHeader ({lists, setLists, selectedList}){
  const headerInput = useRef(null);

  const [disabled, setDisabled] = useState(true);
  const [title, setTitle] = useState(selectedList.header);

  const [listsUpdate, setListsUpdate] = useLists([]);


  useEffect(
    function onFocus() {
      if(!disabled) {
        headerInput.current.focus();
      }
    }, [disabled]
  )


  function changeTodoListHeader(e){
    e.preventDefault();

    setListsUpdate(lists, selectedList, undefined, {
      changelistHeader: title,
    })

    setLists(listsUpdate);
    setDisabled(true);
  }

  return (
    <div className={style.headingWrapper}>
      <form 
        onSubmit={(e) => changeTodoListHeader(e)}
      >
        <input 
            type='text'
            className={style.todosHeading}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            disabled={disabled}
            ref={headerInput}
        />
      </form>
      <div className={style.headingBtnWrapper}>
      <button
          className={`${style.headingBtn} ${style.headingEdit}`}
          onClick={() => setDisabled(false)}
        ></button>
        <button
          className={`${style.headingBtn} ${style.headingDelete}`}
        ></button>
      </div>
    </div>
  )  
}

export default TodoListHeader;