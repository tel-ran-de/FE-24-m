import style from './index.module.css'

function Button(props){
  const btnType = props.btnType;
  const btnText = props.btnText;
  const btnStyle = props.btnStyle;
  const disabled = props.disabled;
  const buttonClick = props.buttonClick;

  return (
    <>
      <button 
        className={`${style.btn} ${style[btnStyle]}`}  
        type={btnType}
        disabled={disabled}
        onClick={(event)=> buttonClick(event)}
      >
        {btnText}
      </button> 
    </>
  )
}

export default Button;