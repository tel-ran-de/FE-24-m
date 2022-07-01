import style from './index.module.css'

function TodoPanelDate({date, setDate}){

  //console.log(date);

  return (
    <div className={style.todoPanelDate}>
      <input 
        type='date' 
        value={date}
        onChange={(e) => setDate(e.target.value)}
        /> 
    </div>
  )
}

export default TodoPanelDate;