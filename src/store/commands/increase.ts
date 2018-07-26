import { AppCommand } from "./command";
import { setCounter } from "../actions";

export const increase = (
    id: string,
    value: number
): AppCommand => async (
    dispatch, getState, services
) => {
    const result = await services.counters.increase(id, value);

    dispatch(setCounter(result.id, result.value));
}