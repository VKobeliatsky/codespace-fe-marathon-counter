import { connect } from "react-redux";

import { increment, decrement } from "../store/actions";
import { AppState } from "../store/state";
import { CounterControl, CounterControlProps } from "../components/counter-control";

export default connect<
    Pick<CounterControlProps, 'value'>,
    Pick<CounterControlProps, 'onIncrement' | 'onDecrement'>,
    {},
    AppState
>(
    state => ({
        value: state.counter.value
    }),
    dispatch => ({
        onIncrement() { dispatch(increment())},
        onDecrement() { dispatch(decrement())}
    })
)(CounterControl);
