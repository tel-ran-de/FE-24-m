import { CHANGE_HEADER } from "./actions";

const initialState = 'Default Header';

const headerReducer = (state = initialState, { type, value }) => {
    switch (type) {

        case CHANGE_HEADER:
            return value

        default:
            return state
    }
}

export default headerReducer;