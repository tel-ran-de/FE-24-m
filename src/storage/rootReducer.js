import contentReducer from './content/contentReducer.js';
import { combineReducers } from 'redux';

const reducer = combineReducers({
	lists: contentReducer,
})

export default reducer;

