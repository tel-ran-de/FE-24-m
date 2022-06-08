import style from './index.module.css'

function TextInput(props) {
  const isLabel = props.isLabel;
  const textLabel = props.textLabel;
  const inputId = props.inputId;
  const inputName = props.inputName;
  const disabled = props.disabled;

  const value = props.value;
  const setValue = props.setValue;

  return (
    <div className={style.textInputContainer}>
      { isLabel && <label className={style.textLabel} htmlFor={inputId}>{textLabel}</label> }

      <input 
        className={style.textInput} 
        id={inputId} 
        name={inputName} 
        type="text" 
        disabled={disabled}

        value={value}
        onChange={(event) => setValue(event.target.value)}
      />

    </div>
  );
}

export default TextInput;