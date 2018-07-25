import * as React from "react";
import { Row, Col, Jumbotron } from "react-bootstrap";

import Counter from "../containers/counter";
import logo from '../logo.svg';

export const Home: React.StatelessComponent = props => (
    <Row>
        <Col>
            <Jumbotron>
                <h1>
                    <img src={logo} className="App-logo" alt="logo" />
                    Hello, world!
                </h1>
                <Counter />
            </Jumbotron>
        </Col>
    </Row>
);
