import { Decrement } from "./decrement";
import { Increment } from "./increment";
import { ResetCounters } from "./reset-counters";
import { SetCounter } from "./set-counter";

export type Action
    = Decrement
    | Increment
    | ResetCounters
    | SetCounter
    ;

export * from './decrement';
export * from './increment';
export * from './reset-counters';
export * from './set-counter';
