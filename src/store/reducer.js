import { MAKE_SANDWICH, APOLOGIZE } from './actions' ;


const initialState = {
  sandwiches: [],
  apologize: {},
  isShopOpen: true,
}

export const reducer = (state = initialState, {type, payload}) => {
  switch (type) {

    case MAKE_SANDWICH:
      return {
      	...state,
      	sandwiches: [
        	...state.sandwiches, 
        	{ forPerson: payload.forPerson, secretSauce: payload.secretSauce }
      	] 
      }

    case APOLOGIZE:
      return {
      	...state,
      	apologize: {
			    fromPerson: payload.fromPerson,
			    toPerson: payload.toPerson,
			    error: payload.error
      	}
      }

    default: 
    	return state
  }
}

export default reducer;