import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { makeCountersSelector } from "../store/selectors";
import { AppState } from '../store/types';
import { createCounter } from "../store/commands";
import {
    CountersControl,
    CountersControlProps
} from "../components/counters-control";

export default connect<
    Pick<CountersControlProps, 'counters'>,
    Pick<CountersControlProps, 'onAddCounter'>,
    {},
    AppState
>(
    createStructuredSelector({
        counters: makeCountersSelector()
    }),
    dispatch => ({
        onAddCounter() {
            dispatch(createCounter());
        }
    })
)(CountersControl);
