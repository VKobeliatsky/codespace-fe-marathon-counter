import * as React from "react";
import {
    InputGroup,
    DropdownButton,
    MenuItem,
    Panel
} from "react-bootstrap";

import { DuckCounter } from "./duck-counter";

export interface CounterProps {
    value: number | null;
    onIncrement(increment: number): void;
    onDecrement(decrement: number): void;
}

export class CounterControl extends React.PureComponent<CounterProps> {
    public render() {
        const {value} = this.props;
        return (value === null ?
            <Panel bsStyle="danger">
                <Panel.Heading>
                    Error
                </Panel.Heading>
                <Panel.Body>
                    No Counter
                </Panel.Body>
            </Panel> :
            <InputGroup bsSize="large">
                <DropdownButton 
                    id="counter-increment"
                    title="Decrement"
                    componentClass={InputGroup.Button}
                >
                    <MenuItem onClick={this.handleDecrement(1)}>
                        Small
                    </MenuItem>
                    <MenuItem onClick={this.handleDecrement(4)}>
                        Medium
                    </MenuItem>
                    <MenuItem onClick={this.handleDecrement(12)}>
                        Large
                    </MenuItem>
                </DropdownButton>
                <DuckCounter count={value} />
                <DropdownButton 
                    id="counter-increment"
                    title="Increment"
                    componentClass={InputGroup.Button}
                >
                    <MenuItem onClick={this.handleIncrement(1)}>
                        Small
                    </MenuItem>
                    <MenuItem onClick={this.handleIncrement(4)}>
                        Medium
                    </MenuItem>
                    <MenuItem onClick={this.handleIncrement(12)}>
                        Large
                    </MenuItem>
                </DropdownButton>
            </InputGroup>
        );
    }

    private handleIncrement = (
        value: number
    ) => () => this.props.onIncrement(value);
    private handleDecrement = (
        value: number
    ) => () => this.props.onDecrement(value);
}
