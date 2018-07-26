import { createSelector } from "reselect";
import { AppParametricSelector } from "./selector";

import { makeCounterSelector } from "./counter";

export const makeCounterValueSelector = (
): AppParametricSelector<{id: string}, number | null> => createSelector(
    makeCounterSelector(),
    counter => counter ? counter.value : null
);
