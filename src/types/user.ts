// константы
export enum UserActionTypes {
	FETCH_USERS = "FETCH_USERS",
	FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS",
	FETCH_USERS_ERROR = "FETCH_USERS_ERROR",
} // перечисление позволяет нам использовать константы в interface
// это удобно, потому что так же мы можем импротировать их все разом


// ТИПИЗИРУЕМ STATE
// интерфейс для state(and state return) user 
export interface UserState {
	users: any[];
	loading: boolean;
	error: null | string;
}





// ТИПИЗИРУЕМ ACTION
interface FetchUserAction { // интерфейс для первого action случая
	type: UserActionTypes.FETCH_USERS; // чтобы использовать тут константу нам нужен enum
}

interface FetchUserSuccessAction { // интерфейс для первого action случая
	type: UserActionTypes.FETCH_USERS_SUCCESS;
	payload: any[];
}

interface FetchUserErrorAction { // интерфейс для первого action случая
	type: UserActionTypes.FETCH_USERS_ERROR;
	payload: string;
}

export type UserAction = FetchUserAction 
						| FetchUserSuccessAction 
						| FetchUserErrorAction;


