import * as React from "react";
import { RouteComponentProps } from "react-router-dom";
import { Row, Col, Jumbotron } from "react-bootstrap";

import logo from '../logo.svg';

export const Home: React.StatelessComponent<
    RouteComponentProps<{}>
> = props => (
    <Row>
        <Col>
            <Jumbotron>
                <h1>
                    <img src={logo} className="App-logo" alt="logo" />
                    Hello, world!
                </h1>
                <p>
                    This is a simple counter
                </p>
            </Jumbotron>
        </Col>
    </Row>
);
