import { combineReducers } from "redux";
import ReducerUser from "./Reducer-User";

const allReducers = combineReducers({
  users: ReducerUser
});

export default allReducers;
