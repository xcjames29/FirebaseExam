import { combineReducers } from "redux";
import loginReducer from "./loginReducer";
import signupReducer from "./signupReducer";


export let rootReducer = combineReducers({loginState:loginReducer, signupState:signupReducer})