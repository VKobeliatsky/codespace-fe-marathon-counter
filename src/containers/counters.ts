import { connect } from "react-redux";

import { AppState } from "../store/state";
import { CountersControl, CountersControlProps } from "../components/counters-control";
import { createCounter } from "../store/commands/create-counter";

export default connect<
    Pick<CountersControlProps, 'counters'>,
    Pick<CountersControlProps, 'onAddCounter'>,
    // null,
    null,
    // Pick<CountersControlProps, 'onCounterClick'>,
    AppState
>(
    state => ({
        counters: Object.keys(state.counters).map(id => state.counters[id])
    }),
    dispatch => ({
        onAddCounter() {
            dispatch(createCounter());
        }
    })
)(CountersControl);