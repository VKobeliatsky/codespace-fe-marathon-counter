import { AppCommand } from "./command";
import { setCounter } from "../actions";

export const decrease = (
    id: string,
    value: number
): AppCommand => async (
    dispatch, getState, services
) => {
    const result = await services.counters.decrease(id, value);

    dispatch(setCounter(result.id, result.value));
}