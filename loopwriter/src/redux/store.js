import { createStore } from "redux";
import state from "./state";
import reducers from "./reducer";

const store = createStore(reducers, state);

export default store;
