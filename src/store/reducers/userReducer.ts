import { UserActionTypes, UserState, UserAction } from '../../types/user'

const initialState: UserState = { // инициализируем дефолтный state
	users: [], // список юзеров
	loading: false, // процесс загрузки данных
	error: null, // наличие ошибки
}

const userReducer = (state = initialState, action: UserAction): UserState => {
	switch (action.type) {

		case UserActionTypes.FETCH_USERS:
			return {
				loading: true, 
				error: null,
				users: [], 	
			}
		
		case UserActionTypes.FETCH_USERS_SUCCESS:
			return {
				loading: false, // данные загрузились
				error: null,
				users: action.payload, // передаем данные с сервера
			}

		case UserActionTypes.FETCH_USERS_ERROR:
			return {
				loading: false, // произошла ошибка
				error: action.payload, // поместили данные из action при ошибке
				users: [], 	
			}

		default: return state
	}
}

export { userReducer }