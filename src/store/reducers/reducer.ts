import { Reducer } from "redux";

import { Action } from "../actions";

export type AppReducer<S> = Reducer<S, Action>;
