import style from './index.module.css'

function TodoCompleted({isCompleted, setIsCompleted, }) {

  return(
    <input 
        type='checkbox'
        onClick = {(e) => e.stopPropagation()}
        onChange= {() => setIsCompleted(!isCompleted)}
        value={isCompleted}
        checked={isCompleted}
      />
  )
}

export default TodoCompleted;


    // <input 
    //     type='checkbox'
    //     onClick = {(e) => e.stopPropagation()}
    //     onChange = {() => setIsCompleted(!isCompleted)}
    //     checked={isCompleted}
    //     value={isCompleted}
    //   />