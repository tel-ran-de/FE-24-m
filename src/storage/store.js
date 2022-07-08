import { createStore } from 'redux';
import reducer from './rootReducer.js'

const store = createStore(reducer);

export default store;