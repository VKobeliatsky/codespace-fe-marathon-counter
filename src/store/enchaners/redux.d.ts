import { ThunkAction } from "redux-thunk";
import { Action, AnyAction } from "redux";

declare module "redux" {
    export interface Dispatch<A extends Action = AnyAction> {
      <R, S, E>(asyncAction: ThunkAction<R, S, E, A>): R;
    }
}
