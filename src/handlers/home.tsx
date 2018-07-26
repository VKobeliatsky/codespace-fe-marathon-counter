import * as React from "react";
import { Row, Col, Jumbotron } from "react-bootstrap";
import { connect } from "react-redux";

import { AppState } from "../store/state";

import { fetchAllCounters } from "../store/commands/fetch-all-counters";
import Counters from "../containers/counters";
import logo from '../logo.svg';

interface HomeHandlerProps {
    onMatch(): void;
}

export const Home = connect<
    null,
    Pick<HomeHandlerProps, 'onMatch'>,
    {},
    AppState
>(
    null,
    dispatch => ({
        onMatch() { dispatch(fetchAllCounters()); }
    })
)(
    class extends React.Component<HomeHandlerProps> {
        public componentDidMount() {
            this.props.onMatch();
        }
        public render() {
            return (
                <Row>
                    <Col>
                        <Jumbotron>
                            <h1>
                                <img src={logo} className="App-logo" alt="logo" />
                                Hello, world!
                            </h1>
                            <Counters />
                        </Jumbotron>
                    </Col>
                </Row>
            );
        }
    }    
)
