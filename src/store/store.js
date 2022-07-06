import { createStore } from "redux";
import RootReducer from "./rootReducer.js";

const store = createStore(RootReducer);

export default store;