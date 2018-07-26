import { setCounter } from "../actions";
import { AppCommand } from "./command";

export const createCounter = (
    value: number = 0
): AppCommand => async (
    dispatch, getState, {counters}
) => {
    const counter = await counters.create(value);
    dispatch(setCounter(
        counter.id,
        counter.value
    ));
};
