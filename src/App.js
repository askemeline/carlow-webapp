import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useMediaQuery } from "react-responsive";

import "./App.css";
import RegisterPage from "./pages/RegisterPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import PasswordForgot from "./pages/PasswordForgot.jsx";
import DesktopPage from "./pages/DesktopPage.jsx";

function App() {
  const isMobile = useMediaQuery({ maxDeviceWidth: 760 });

  return (
    <>
      {!isMobile ? (
        <DesktopPage />
      ) : (
        <div className="App">
          <Switch>
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/register" component={RegisterPage} />
            <Route exact path="/passwordforgot" component={PasswordForgot} />
          </Switch>
          <Route exact path="/">
            <Redirect to="/login" />
          </Route>
        </div>
      )}
    </>
  );
}

export default App;
