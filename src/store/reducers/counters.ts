import { Reducer } from "redux";

import { Action } from "../actions";
import { AppState } from "../types";

export const counters: Reducer<
    AppState['counters'],
    Action
> = (
    state = {},
    action
) => {
    switch (action.type) {
        case 'RESET_COUNTERS': {
            const {counters: data} = action.payload;
            return data.reduce<AppState['counters']>(
                (acc, counter) => {
                    acc[counter.id] = {...counter};
                    return acc;
                }, {}
            );
        }
        case 'SET_COUNTER': {
            const {id, value} = action.payload;
            return {...state, [id]: {id, value}};
        }
        default:
            return state;
    }
}
