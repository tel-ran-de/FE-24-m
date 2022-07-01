import style from './index.module.css'

function TodoPanelNote({note, setNote}){
  
  return (
    <div className={style.todoPanelNote}>
      <textarea  
        className={style.todoPanelTextarea}
        placeholder='Add Note'
        onChange={(e)=> setNote(e.target.value)}
        value={note}
      ></textarea>
    </div>
  )
}

export default TodoPanelNote;