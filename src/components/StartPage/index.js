import style from './index.module.css'


function StartPage() {
  return (
    <section className={style.startPage}>
    	<div className={style.startSideBar}>
    		<div className={style.logo}></div>
    		<div className={style.textBox}>
    			<h1>Welcome to Uno To Do!</h1>
    			<p>
    				Start using the best to-do app, you can
						create and manage your To Do lists to improve your organization.
					</p>
    		</div>
    		<button className={style.button}>Get started</button>
    	</div>
    	<div className={style.startBack}></div>
    </section>
  )
}

export default StartPage;