import style from './index.module.css'

function TodoCompleted({isCompleted, setIsCompleted, bindCompleted}) {

  return(
    <input 
        type='checkbox'
        onClick = {(e) => e.stopPropagation()}
        {...bindCompleted}
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