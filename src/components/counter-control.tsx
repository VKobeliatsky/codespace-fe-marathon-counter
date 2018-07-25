import * as React from "react";
import {
    Row, Col,
    InputGroup,
    Button
} from "react-bootstrap";

export interface CounterControlProps {
    value: number;
    onIncrement(increment: number): void;
    onDecrement(decrement: number): void;
}

export interface CounterControlState {
    increment: number;
    decrement: number;
}

export class CounterControl extends React.PureComponent<
    CounterControlProps,
    CounterControlState
> {

    public state = {
        increment: 1,
        decrement: 1
    }

    public render() {
        const {value} = this.props;
        const {increment, decrement} = this.state;
        return (<>
            <Row>
                <Col>
                    <InputGroup bsSize="large">
                        <InputGroup.Button>
                            <Button onClick={this.handleIncrement}>Increment</Button>
                        </InputGroup.Button>
                        <input
                            type="number"
                            className="form-control"
                            onChange={this.handleIncrementChange}
                            value={increment}
                        />
                    </InputGroup>
                </Col>
            </Row>
            <Row>
                <Col>
                    <InputGroup bsSize="large">
                        <input
                            type="number"
                            className="form-control"
                            readOnly={true}
                            value={value}
                        />
                    </InputGroup>  
                </Col>
            </Row>
            <Row>
                <Col>
                    <InputGroup bsSize="large">
                        <InputGroup.Button>
                            <Button onClick={this.handleDecrement}>Decrement</Button>
                        </InputGroup.Button>
                        <input
                            type="number"
                            className="form-control"
                            onChange={this.handleDecrementChange}
                            value={decrement}
                        />
                    </InputGroup>
                </Col>
            </Row>
        </>);
    }

    private handleIncrementChange: React.ChangeEventHandler<HTMLInputElement>
        = e => this.setState({increment: Number(e.currentTarget.value)})
    private handleDecrementChange: React.ChangeEventHandler<HTMLInputElement>
        = e => this.setState({decrement: Number(e.currentTarget.value)})
    
    private handleDecrement = () => this.props.onDecrement(this.state.decrement);
    private handleIncrement = () => this.props.onIncrement(this.state.increment);

}