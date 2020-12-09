import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { AppBarB } from "package";
import { AccountInfoContainer } from "package";
import { LobbyContainer } from "package";

function App() {
  return (
    <div className="App">
      <Router>
        <AppBarB />
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/lobby" />} />
          <Route path="/lobby" component={LobbyContainer} />
          <Route path="/account" component={AccountInfoContainer} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
