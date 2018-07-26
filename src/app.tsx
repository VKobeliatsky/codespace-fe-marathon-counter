import * as React from 'react';
import { Grid, Row, Col, Navbar } from "react-bootstrap";
import { Provider } from "react-redux";
import { HashRouter as Router, Link, Switch, Route } from "react-router-dom";
import store from "./store";

import { Home } from "./handlers/home";

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
                            </Navbar>
                        </Col>
                    </Row>
                    <Switch>
                        <Route exact={true} path="/" component={Home} />
                    </Switch>
                </Grid>
            </Router>
        </Provider>
    );
  }
}

export default App;
