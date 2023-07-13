import taskReducer from "./taskReducer";
import { combineReducers } from "redux";

// const rootReducer = combineReducers({
//   tasks: taskReducer,
// });

const rootReducer = taskReducer

export default rootReducer;
