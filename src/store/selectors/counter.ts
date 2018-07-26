import { AppParametricSelector } from "./selector";
import { Counter } from "../types";

export const makeCounterSelector = (
): AppParametricSelector<{id: string}, Counter | null> => (
    state, {id}
) => state.counters[id] || null;
