import { connect } from "react-redux";

import { increment, decrement } from "../store/actions";
import { AppState } from "../store/state";
import { CounterControl, CounterControlProps } from "../components/counter-control";

export default connect<
    Pick<CounterControlProps, 'value'>,
    Pick<CounterControlProps, 'onIncrement' | 'onDecrement'>,
    {id: string},
    AppState
>(
    (state, {id})=> ({
        value: state.counters[id].value
    }),
    (dispatch, {id}) => ({
        onIncrement(value) { dispatch(increment(id, value))},
        onDecrement(value) { dispatch(decrement(id, value))}
    })
)(CounterControl);
