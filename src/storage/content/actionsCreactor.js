import { 
	TODO_COMPLETE,
	TODO_IMPORTANT,
} from './actions.js';


function todoComplete(listId, todoId) {
	return {
		type: TODO_COMPLETE,
		payload: {
			listId,
			todoId,
		}
	}
}

function todoImportant(listId, todoId) {
	return {
		type: TODO_IMPORTANT,
		payload: {
			listId,
			todoId,
		}
	}
}



export { 
	todoComplete,
	todoImportant,
};

