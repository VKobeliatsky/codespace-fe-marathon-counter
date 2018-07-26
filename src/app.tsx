import * as React from 'react';
import { Provider } from "react-redux";
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";
import {
    Grid, Col, Row,
    Navbar
} from "react-bootstrap";

import { Home } from "./handlers/home";
import { Counters } from "./handlers/counters";
import { Counter } from "./handlers/counter";

import store from "./store";
import './app.css';

class App extends React.Component {
  public render() {
    return (
        <Provider store={store}>
            <Router>
                <Grid>
                    <Row>
                        <Col>
                            <Navbar>
                                <Navbar.Header>
                                    <Navbar.Brand>
                                        <Link to="/">Home</Link>
                                    </Navbar.Brand>
                                </Navbar.Header>
                                <Navbar.Text>
                                    <Link to="/counters">Counters</Link>
                                </Navbar.Text>
                            </Navbar>
                        </Col>
                    </Row>
                    <Switch>
                        <Route exact={true} path="/" component={Home} />
                        <Route exact={true} path="/counters" component={Counters} />
                        <Route exact={true} path="/:id" component={Counter} />
                    </Switch>
                </Grid>
            </Router>
        </Provider>
    );
  }
}

export default App;
