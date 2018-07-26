import { AppAction } from "./action";

export type Decrement = AppAction<
    'DECREMENT',
    {id: string, value: number}
>;

export const decrement = (
    id: string, 
    value: number
): Decrement => ({
    type: 'DECREMENT',
    payload: {id, value}
});
