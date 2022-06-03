import style from './index.module.css'

function Colors(props) {
  return (
    <div className={style.colors}>
    	{
				props.colors.map((item) => {
					return <div 
										className={style.color} 
										key={item} 
										style={{background:item}}
									></div>
				})
    	}
    </div>
  );
}


export default Colors;