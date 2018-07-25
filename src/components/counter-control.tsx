import * as React from "react";
import {
    InputGroup,
    Button
} from "react-bootstrap";

export interface CounterControlProps {
    value: number;
    onIncrement(): void;
    onDecrement(): void;
}

export class CounterControl extends React.PureComponent<
    CounterControlProps
> {
    public render() {
        const {value} = this.props;
        return (
            <InputGroup bsSize="large">
                <InputGroup.Button>
                    <Button onClick={this.handleDecrement}>Decrement</Button>
                </InputGroup.Button>
                <input
                    type="number"
                    className="form-control"
                    readOnly={true}
                    value={value}
                />
                <InputGroup.Button>
                    <Button onClick={this.handleIncrement}>Increment</Button>
                </InputGroup.Button>
            </InputGroup>  
        );
    }

    private handleDecrement = () => this.props.onDecrement();
    private handleIncrement = () => this.props.onIncrement();
}