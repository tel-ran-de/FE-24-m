import { UserActionTypes, UserAction } from '../../types/user'
import { Dispatch } from 'redux' // берем тип dispatch
import axios from 'axios' // используем библиотеку для запросов

export const fetchUsers = () => {
	return async (dispatch: Dispatch<UserAction>) => { // типизируем конкретный диспатч
		try {
			dispatch({type: UserActionTypes.FETCH_USERS})
			const response = await axios.get('https://jsonplaceholder.typicode.com/users')
			dispatch({
				type: UserActionTypes.FETCH_USERS_SUCCESS,
				payload: response.data
			})
		} catch (error) {
			dispatch({
				type: UserActionTypes.FETCH_USERS_ERROR,
				payload: 'Произошла ошибка при загрузке пользователей'
			})
		}
	}
}