import { AppCommand } from "./command";
import { resetCounters } from "../actions";

export const fetchAllCounters = (
): AppCommand => async (
    dispatch, getState, services
) => {
    const counters = await services.counters.findAll();

    dispatch(resetCounters(counters));
};
