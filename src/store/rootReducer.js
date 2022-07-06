import { combineReducers } from "redux";
import headerReducer from "./header/headerReducer.js";
import counterReducer from "./counter/counterReducer.js";

const RootReducer = combineReducers({
    header: headerReducer,
    counter: counterReducer
})

export default RootReducer;