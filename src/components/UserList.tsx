import React, { useEffect } from 'react';
import { useTypedSelector } from '../hooks/useTypedSelector';

import { useTypedDispatch } from '../hooks/useTypedDispatch';
import { fetchUsers } from '../store/action-creators/user';


const UserList: React.FC = ( ) => {
	const dispatch = useTypedDispatch();

	// const { users, loading, error } = useSelector(state => state.user)
	// console.log(users)
	const { users, loading, error } = useTypedSelector(state => state.user)


	useEffect(() => {
		dispatch(fetchUsers())
	}, [])

	if (loading) {
		return <h1>Идет загрузка юзеров...</h1>
	}

	if (error) {
		return <h1>Произошла ошибка: {error}</h1>
	}

	return (
		<div>
			{users.map(user => 
				<div>{user.name}</div>
			)}
		</div>
	)
}


export default UserList;