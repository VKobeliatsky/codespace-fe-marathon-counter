import { AppAction } from "../types";

export type SetCounter = AppAction<
    'SET_COUNTER',
    {id: string, value: number}
>;

export const setCounter = (
    id: string, value: number
): SetCounter => ({
    type: 'SET_COUNTER',
    payload: {id, value}
});
