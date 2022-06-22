import style from './index.module.css'

function TodoDesc({todo}) {
	return (
    <div className={style.todoDescr}>
      <h2>{todo.title}</h2>
      <p>{todo.note} - {todo.date}</p>
    </div>
	)
}
export default TodoDesc;