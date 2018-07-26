import { AppAction } from "./action";

export type Increment = AppAction<
    'INCREMENT',
    {id: string, value: number}
>;

export const increment = (
    id: string, 
    value: number
): Increment => ({
    type: 'INCREMENT',
    payload: {id, value}
});
