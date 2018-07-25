import * as React from 'react';
import { Grid } from "react-bootstrap";
import { Home } from "./components/home";

import './app.css';

class App extends React.Component {
  public render() {
    return (
        <Grid>
            <Home />
        </Grid>
    );
  }
}

export default App;
