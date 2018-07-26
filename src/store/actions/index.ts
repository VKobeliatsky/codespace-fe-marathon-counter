import { ResetCounters } from "./reset-counters";
import { SetCounter } from "./set-counter";

export type Action
    = SetCounter
    | ResetCounters
    ;

export * from './reset-counters';
export * from './set-counter';
