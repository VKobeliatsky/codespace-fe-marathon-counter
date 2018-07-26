import {
    createStore,
    combineReducers,
    applyMiddleware
} from "redux";
import thunk, {ThunkDispatch} from "redux-thunk";

import { Services } from "../services";
import { counters as countersService } from "../services/counters.mock";

import { AppState } from "./types";
import { Action } from "./actions";
import { counters } from "./reducers";

const store = createStore(
    combineReducers<AppState>({
        counters
    }),
    applyMiddleware<
        ThunkDispatch<AppState, Services, Action>
    >(
        thunk.withExtraArgument({counters: countersService})
    )
);

export default store;

export type Store = typeof store;
