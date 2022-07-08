import { 
  TODO_COMPLETE,
  TODO_IMPORTANT,
} from './actions.js';

import { createDate } from '../../helpers';

const initialState = {
  content: [
    {
      id: '44444',
      selected: true,
      header: 'Task list',
      todos: [
        {
          id: '11111',
          title: 'Todo 1',
          note: 'Do something important',
          date: createDate(),
          createDate: createDate(),
          completed: true,
          important: true,
        },
        {
          id: '22222',
          title: 'Todo 2',
          note: 'Do something important',
          date: createDate(),
          createDate: createDate(),
          completed: true,
          important: true,
        },
        {
          id: '33333',
          title: 'Todo 3',
          note: 'Do something',
          date: createDate(),
          createDate: createDate(),
          completed: true,
          important: true,
        },
      ]
    },
  ]
}



function contentReducer(state = initialState, {type, payload}) {


	switch(type) {

		case TODO_COMPLETE:
      return {
        ...state,
        content: state.content.map(list => {
          if (list.id === payload.listId) {
          	list.todos.map(todo => {
          		if (todo.id === payload.todoId) {
          			todo.completed = !todo.completed
          		}
          	})
          }
          return list;
        })
    	}

    case TODO_IMPORTANT:
      return {
        ...state,
        content: state.content.map(list => {
          if (list.id === payload.listId) {
            list.todos.map(todo => {
              if (todo.id === payload.todoId) {
                todo.important = !todo.important
              }
            })
          }
          return list;
        })
      }









    default: return state 



	}
}


export default contentReducer;