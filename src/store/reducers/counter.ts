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
            const {value} = action.payload;
            return {value: state.value + value};
        }
        case 'DECREMENT': {
            const {value} = action.payload;
            return {value: state.value - value};
        }
        default:
            return state;
    }
}