import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
// react-redux
import reducer from './reducer'

// applyMiddleware улучшает createStore переданным мидлваром:
const store = createStore(reducer, applyMiddleware(thunk));

export default store;
