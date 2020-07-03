import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./App.css";
import RegisterPage from "./pages/RegisterPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import PasswordForgot from "./pages/PasswordForgot.jsx";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/register" component={RegisterPage} />
        <Route exact path="/passwordforgot" component={PasswordForgot} />
      </Switch>
    </div>
  );
}

export default App;
