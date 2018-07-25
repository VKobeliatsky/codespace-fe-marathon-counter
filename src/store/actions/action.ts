import { Action } from "redux";

export type AppAction<T, P = null>
    = Action<T>
    & (
        P extends Error ? {error: P} :
        P extends NonNullable<P> ? {payload: P} :
        {}
    );
