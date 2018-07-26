import * as React from "react";
import {
    Row, Col,
    Button,
    ListGroup,
    ListGroupItem
 } from "react-bootstrap";

import { Counter } from "../store/types";

export interface CountersControlProps {
    counters?: Counter[];
    onAddCounter(): void;
    onCounterClick(id: string): void;
}

export class CountersControl extends React.PureComponent<CountersControlProps> {
    public render() {
        const {counters, onAddCounter, onCounterClick} = this.props;
        return (
            <>
                <Row>
                    <Col>
                        <Button
                            block={true}
                            bsSize="large"
                            onClick={onAddCounter}
                        >
                            Add Counter
                        </Button>
                    </Col>
                </Row>
                {counters && counters.length ?
                    <Row>
                        <Col>
                            <ListGroup>
                                {counters.map(counter => (
                                    <ListGroupItem
                                        key={counter.id}
                                        header={`id: ${counter.id}`}
                                        onClick={() => onCounterClick(counter.id)}
                                    >
                                        Value {counter.value}
                                    </ListGroupItem>
                                ))}
                            </ListGroup>
                        </Col>
                    </Row> :
                    null
                }
            </>
        );
    }
}