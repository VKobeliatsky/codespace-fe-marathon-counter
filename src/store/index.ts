import { createStore, combineReducers } from "redux";
import { AppState } from "./state";
import { counter } from "./reducers/counter";

export default createStore(
    combineReducers<AppState>({
        counter
    })
);
