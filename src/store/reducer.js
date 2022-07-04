import initialState from './initialState.js';

import {
 	CHANGE_FIRST_NAME,
	CHANGE_LAST_NAME,
} from './actions.js'

function reducer(state = initialState, action) {
    switch(action.type) {
        case CHANGE_FIRST_NAME: 
          return { ...state, firstName: action.firstName };
        case CHANGE_LAST_NAME: 
          return { ...state, lastName: action.lastName };

        default: return state;
    }
}

export default reducer;