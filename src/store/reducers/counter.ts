import { AppReducer } from "./reducer";

import { AppState } from "../state";

export const counter: AppReducer<
    AppState['counter']
> = (
    state = {value: 0},
    action
) => {
    switch(action.type) {
        case 'INCREMENT': {
            return {value: state.value + 1};
        }
        case 'DECREMENT': {
            return {value: state.value - 1};
        }
        default:
            return state;
    }
}