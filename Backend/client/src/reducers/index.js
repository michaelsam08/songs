import { combineReducers } from "redux";
import bikeReducer from "./bikeReducer";

export default combineReducers({
  bike: bikeReducer
});
