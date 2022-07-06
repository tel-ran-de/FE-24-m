import { useDispatch, useSelector } from 'react-redux';
import { changeHeader } from '../store/header/actionsCreator.js';

function Header() {
	const dispatch = useDispatch();
	const header = useSelector(state => state.header);

	return(
		<section>
			<h1>Header:</h1>
			<input 
				type="text" value={header} 
				onChange={(e) => dispatch(changeHeader(e.target.value))} 
			/>
		</section>
	)
}

export default Header;