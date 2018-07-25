import * as React from 'react';
import { Grid } from "react-bootstrap";
import { Provider } from "react-redux";
import store from "./store";

import { Home } from "./components/home";

import './app.css';

class App extends React.Component {
  public render() {
    return (
        <Provider store={store}>
            <Grid>
                <Home />
            </Grid>
        </Provider>
    );
  }
}

export default App;
