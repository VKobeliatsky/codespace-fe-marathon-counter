import * as React from "react";
import { Row, Col, Jumbotron } from "react-bootstrap";

import logo from '../logo.svg';

export const Home: React.StatelessComponent = props => (
    <Row>
        <Col>
            <Jumbotron>
                <h1>
                    <img src={logo} className="App-logo" alt="logo" />
                    Hello, world!
                </h1>
            </Jumbotron>
        </Col>
    </Row>
);
