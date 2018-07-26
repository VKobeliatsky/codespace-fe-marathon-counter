import { Selector, ParametricSelector } from "reselect";
import { AppState } from "../types";

export type AppSelector<R> = Selector<AppState, R>;
export type AppParametricSelector<P, R> = ParametricSelector<AppState, P, R>;
