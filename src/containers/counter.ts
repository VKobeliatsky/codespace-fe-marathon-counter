import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { makeCounterValueSelector } from "../store/selectors";
import { decrease, increase } from "../store/commands";
import { AppState } from '../store/types';

import {
    CounterControl,
    CounterProps
} from "../components/counter-control";

export default connect<
    Pick<CounterProps, 'value'>,
    Pick<CounterProps, 'onIncrement' | 'onDecrement'>,
    {id: string},
    AppState
>(
    () => createStructuredSelector({
        value: makeCounterValueSelector()
    }),
    (dispatch, {id}) => ({
        onIncrement(value) { dispatch(increase(id, value)); },
        onDecrement(value) { dispatch(decrease(id, value)); }
    })
)(CounterControl);
