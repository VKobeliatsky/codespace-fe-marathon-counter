import { AppAction } from "../types";
import { Counter } from "../types";

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
