import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from '../store/counter/actionsCreator.js';

function Counter() {
  const dispatch = useDispatch();
	const number = useSelector(state => state.counter);

	return (
		<section>
			<h1>Counter</h1>
			<button onClick={() => dispatch(increment()) }>+</button>
			<span>{number}</span>
			<button onClick={ () => dispatch(decrement()) }>-</button>
		</section>
	)
}

export default Counter;




