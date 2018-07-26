import { ThunkAction } from "redux-thunk";

import { Action } from "../actions";
import { Services } from "../../services";
import { AppState } from "../types";

export type AppCommand<R = void> = ThunkAction<
    Promise<R>,
    AppState,
    Services,
    Action
>;
