import { AppSelector } from "./selector";
import { Counter } from "../types";

export const makeCountersSelector = (): AppSelector<
    Counter[]
> => (
    state
) => Object.keys(state.counters).map(id => state.counters[id]);
