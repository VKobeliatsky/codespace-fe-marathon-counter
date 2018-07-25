import { AppAction } from "./action";

export type Decrement = AppAction<
    'DECREMENT',
    {value: number}
>;

export const decrement = (
    value: number
): Decrement => ({
    type: 'DECREMENT',
    payload: {value}
});
