import { AppAction } from "./action";

export type Increment = AppAction<
    'INCREMENT',
    {value: number}
>;

export const increment = (
    value: number
): Increment => ({
    type: 'INCREMENT',
    payload: {value}
});
