import * as React from "react";
import { RouteComponentProps } from "react-router-dom";
import { Row, Col, Jumbotron } from "react-bootstrap";

import CounterContainer from "../containers/counter";

export const Counter: React.StatelessComponent<
    RouteComponentProps<{id: string}>
> = ({match: {params: {id}}}) => (
    <Row>
        <Col>
            <Jumbotron>
                <h1>Counter</h1>
                <CounterContainer id={id} />
            </Jumbotron>
        </Col>
    </Row>
);