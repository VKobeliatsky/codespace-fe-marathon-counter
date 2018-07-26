import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import { counters as countersService } from "../services";

import { AppState } from "./state";
import { counters } from "./reducers/counters";

export default createStore(
    combineReducers<AppState>({
        counters
    }),
    applyMiddleware(
        thunk.withExtraArgument({counters: countersService})
    )
);
