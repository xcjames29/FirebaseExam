import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { rootReducer } from "./reducers/root_reducer";


export const store = createStore(rootReducer, applyMiddleware(logger,thunk));