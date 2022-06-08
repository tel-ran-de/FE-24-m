import style from './index.module.css'


function RadioInput(props) {
  const isLabel = props.isLabel;
  const textLabel = props.textLabel;
  const inputId = props.inputId;
  const inputName = props.inputName;
  const disabled = props.disabled;

  return (
    <div className={style.radioInputContainer}>
      { isLabel && <label className={style.radioLabel} htmlFor={inputId}>{textLabel}</label> }
      <input 
        className={style.radioInput} 
        id={inputId} 
        name={inputName} 
        type="radio" 
        disabled={disabled} 
      />
    </div>
  );
}

function GroupRadioInput(props) {
  const radioContent = props.radioContent;
  return (
    <>
      {
        radioContent.map((radioItem)=>(
          <RadioInput
            key={radioItem.inputId}
            isLabel={radioItem.isLabel}
            textLabel={radioItem.textLabel}
            inputId={radioItem.inputId}
            inputName={radioItem.inputName}
            disabled={radioItem.disabled}
          />
        ))
      }
    </>
  );
}


export default GroupRadioInput;