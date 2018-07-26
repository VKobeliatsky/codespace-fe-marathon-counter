import * as React from "react";
import {
    Row, Col,
    ButtonGroup, Button
} from 'react-bootstrap';

import { DuckCounter } from "./duck-counter";

export type DuckSize
    = "SMALL"
    | "MEDIUM"
    | "LARGE"
    ;

export interface DuckCounterControlProps {
    count: number;
    onDuckAdd(size: DuckSize): void;
    onDuckRemove(size: DuckSize): void;
}

export class DuckCounterControl extends React.PureComponent<DuckCounterControlProps> {
    public render() {
        const {count} = this.props;
        return ([
            (<Row>
                <Col sm={6}>
                    <ButtonGroup justified={true}>
                        <ButtonGroup bsSize="large" >
                            <Button
                                onClick={this.handleDuckRemove("SMALL")}
                            >
                            Small
                            </Button>
                        </ButtonGroup>
                        <ButtonGroup bsSize="large" >
                            <Button
                                onClick={this.handleDuckRemove("MEDIUM")}
                            >
                                Medium
                            </Button>
                        </ButtonGroup>
                        <ButtonGroup bsSize="large" >
                            <Button
                                onClick={this.handleDuckRemove("LARGE")}
                            >
                                Large
                            </Button>
                        </ButtonGroup>
                    </ButtonGroup>
                </Col>
                <Col sm={6}>
                    <ButtonGroup justified={true}>
                        <ButtonGroup bsSize="large">
                            <Button
                                onClick={this.handleDuckAdd("SMALL")}
                            >
                                Small
                            </Button>
                        </ButtonGroup>
                        <ButtonGroup bsSize="large">
                            <Button
                                onClick={this.handleDuckAdd("MEDIUM")}
                            >
                                Medium
                            </Button>
                        </ButtonGroup>
                        <ButtonGroup bsSize="large">
                            <Button
                                onClick={this.handleDuckAdd("LARGE")}
                            >
                                Large
                            </Button>
                        </ButtonGroup>
                    </ButtonGroup>
                </Col>
            </Row>),
            (<Row>
                <Col>
                    <DuckCounter count={count} />
                </Col>
            </Row>)
        ]);
    }

    private handleDuckRemove = (size: DuckSize) => () => this.props.onDuckRemove(size);
    private handleDuckAdd = (size: DuckSize) => () => this.props.onDuckAdd(size);
}