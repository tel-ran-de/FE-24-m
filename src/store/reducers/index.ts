import { combineReducers } from 'redux';
import { userReducer } from './userReducer';

const rootReducer = combineReducers({
	user: userReducer,
})
// нам необходимо так же получить тип редьюсера
export type RootState = ReturnType<typeof rootReducer>


export { rootReducer };