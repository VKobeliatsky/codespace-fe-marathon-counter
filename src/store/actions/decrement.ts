import { AppAction } from "./action";

export type Decrement = AppAction<
    'DECREMENT'
>;

export const decrement = (): Decrement => ({
    type: 'DECREMENT'
});
