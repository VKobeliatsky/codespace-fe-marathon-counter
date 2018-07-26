import { Action } from "redux";

export interface Counter {
    id: string;
    value: number;
}

export interface AppState {
    counters: {[id: string]: Counter};
}

export type AppAction<T, P = null>
    = Action<T>
    & (P extends NonNullable<P>
        ? {payload: P}
        : {}
    );
