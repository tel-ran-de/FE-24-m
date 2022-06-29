import style from './index.module.css'

function TodoPanelDelete(){

  return (
    <div className={style.todoPanelDeleteWrapper}>
      <span className={style.todoPanelArrow}></span>
      <p>Created Mon, 28 Mar</p>
      <span className={style.todoPanelDelete}></span>
    </div>
  )
}

export default TodoPanelDelete;