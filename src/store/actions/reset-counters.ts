import { AppAction } from "./action";
import { Counter } from "../state";

export type ResetCounters = AppAction<
    'RESET_COUNTERS',
    {counters: Counter[]}
>;

export const resetCounters = (
    counters: Counter[]
): ResetCounters => ({
    type: 'RESET_COUNTERS',
    payload: {counters}
});
