import { AppAction } from "./action";

export type Increment = AppAction<
    'INCREMENT'
>;

export const increment = (): Increment => ({
    type: 'INCREMENT'
});
