import * as React from "react";
import { connect } from "react-redux";
import { RouteComponentProps } from "react-router-dom";
import { Row, Col, Jumbotron } from "react-bootstrap";

import { AppState } from "../store/types";
import { fetchAllCounters } from "../store/commands";
import CountersContainer from "../containers/counters";

export interface CountersHandlerProps extends RouteComponentProps<{}> {
    onMatch(): void
}

export const Counters = connect<
    null,
    Pick<CountersHandlerProps, 'onMatch'>,
    RouteComponentProps<{}>,
    AppState
>(
    null,
    dispatch => ({
        onMatch() { dispatch(fetchAllCounters()); }
    })
)(
    class extends React.Component<
        CountersHandlerProps
    > {
        public componentDidMount() {
            this.props.onMatch();
        }
        public render() {
            const {history} = this.props;
            return (
                <Row>
                    <Col>
                        <Jumbotron>
                            <h1>Counters</h1>
                            <CountersContainer
                                onCounterClick={id => history.push(`/${id}`)}
                            />
                        </Jumbotron>
                    </Col>
                </Row>
            );
        }
    }
)