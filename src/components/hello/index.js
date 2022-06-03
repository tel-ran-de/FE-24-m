import style from './index.module.css'

function Hello(props) {
  return (
    <p className={style.hello}>Привет, {props.nameHello}</p>
  );
}


export default Hello;