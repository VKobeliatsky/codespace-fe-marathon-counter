import { Decrement } from "./decrement";
import { Increment } from "./increment";

export type Action
    = Decrement
    | Increment
    ;

export * from './decrement';
export * from './increment';