import { ThunkAction } from "redux-thunk";
import { Services } from "../../services";
import { Action } from "../actions";
import { AppState } from "../state";

export type AppCommand<R = void> = ThunkAction<
    Promise<R>,
    AppState,
    Services,
    Action
>;
