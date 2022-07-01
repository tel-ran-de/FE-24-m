import { Link } from 'react-router-dom';

import style from './index.module.css'


function StartPage(){
  return(
    <section className={style.startPage}>
      <div className={style.startSideBar}>
        <div className={style.logo}>
          {/* <img src="../../img/uno_platform_logo.png" alt="Logo" /> */}
        </div>

        <div className={style.textBox}>
          <h1>Welcome to Uno To Do!</h1>
          <p>Start using the best to-do app, you can create and manage your To Do lists to improve your organisation.</p>
        </div>
        <Link to='/uno-todo' className={style.startedBtn}>Get started</Link>
      </div>

      <div className={style.startBack}></div>
    </section>
  )
}

export default StartPage;