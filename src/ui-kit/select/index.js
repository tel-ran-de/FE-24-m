import style from './index.module.css'

function Select(props) {
  const name = props.name;
  const options = props.options;

  return (
    <div className={style.selectContainer}>
      <select className={style.select} name={name}>
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