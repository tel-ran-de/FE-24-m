import { 
  CHANGE_FIRST_NAME,
  CHANGE_LAST_NAME
} from './actions.js';



function changeFirstName(value) {
    return { 
        type: CHANGE_FIRST_NAME,
        firstName: value
    };
}



function changeLastName(value) {
    return { 
        type: CHANGE_LAST_NAME,
        lastName: value
    };
}


export { changeFirstName, changeLastName };