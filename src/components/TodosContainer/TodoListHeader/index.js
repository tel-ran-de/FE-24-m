import { useState } from 'react'
import style from './index.module.css'

function TodoListHeader ({lists, setLists, selectedList}){


  const [disabled, setDisabled] = useState(true);
  const [title, setTitle] = useState(selectedList.header);

  function changeTodoListHeader(e){
    e.preventDefault();
    const listsUpdate = [];
    lists.forEach(list => {
      if(list.id === selectedList.id){
        list.header = title;
      }
      listsUpdate.push(list)
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