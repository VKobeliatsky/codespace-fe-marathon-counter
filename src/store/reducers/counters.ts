import { AppReducer } from "./reducer";

import { AppState } from "../state";

export const counters: AppReducer<
    AppState['counters']
> = (
    state = {'foo': {id: 'foo', value: 0}},
    action
) => {
    switch(action.type) {
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
        case 'INCREMENT': {
            const {id, value} = action.payload;
            return {...state,  [id]: {id, value: state[id].value + value}};
        }
        case 'DECREMENT': {
            const {id, value} = action.payload;
            return {...state, [id]: {id, value: state[id].value - value}};
        }
        default:
            return state;
    }
}