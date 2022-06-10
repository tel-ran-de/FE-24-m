import style from './index.module.css'

function Select(props) {
  const name = props.name;
  const options = props.options;
  const selectValue = props.selectValue;
  const setSelectValue = props.setSelectValue;


  return (
    <div className={style.selectContainer}>
      <select 
        onChange={(event) => setSelectValue(event.target.value)}
        value={selectValue}
        className={style.select} 
        name={name}
      >
        {
          options.map((option) => (
            <option key={option.value} value={option.value}>{option.text}</option>
          ))
        }
      </select>
    </div>
  );
}

export default Select;