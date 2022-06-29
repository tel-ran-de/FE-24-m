import style from './index.module.css'

function TodoPanelNote(){
  return (
    <div className={style.todoPanelNote}>
      <textarea  
        className={style.todoPanelTextarea}
        placeholder='Add Note'
      ></textarea>
    </div>
  )
}

export default TodoPanelNote;