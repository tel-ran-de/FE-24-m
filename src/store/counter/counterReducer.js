import { INC, DEC } from "./actions";

const initialState = 0;

const counterReducer = (state = initialState, {type}) => {
    switch (type) {

        case INC:
            return state + 1

        case DEC:
            return state - 1

        default:
            return state
    }
}

export default counterReducer;