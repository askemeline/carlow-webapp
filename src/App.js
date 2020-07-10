import React, { useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

import "./App.css";
import RegisterPage from "./pages/RegisterPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import PasswordForgot from "./pages/PasswordForgot.jsx";
import DesktopPage from "./pages/DesktopPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import AuthAPI from "./services/authAPI.js";
import AuthContext from "./context/AuthContext.js";
import PrivateRoute from "./components/PrivateRoute.jsx";
import Error from "./components/Error.jsx";
import ProfilePage from "./pages/ProfilePage";
import ProfilePageInfoperso from "./pages/ProfilePageInfoperso.jsx";

AuthAPI.setup();

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(
    AuthAPI.isAuthenticated()
  );
  console.log("status", isAuthenticated);

  const isMobile = useMediaQuery({ maxDeviceWidth: 760 });

  return (
    <>
      {!isMobile ? (
        <DesktopPage />
      ) : (
        <AuthContext.Provider
          value={{
            isAuthenticated,
            setIsAuthenticated,
          }}
        >
          <Switch>
            <Route path="/login" component={LoginPage} />
            <PrivateRoute path="/home" component={HomePage} />
            <Route exact path="/register" component={RegisterPage} />
            <Route exact path="/profile" component={ProfilePage} />
            <Route exact path="/info-perso" component={ProfilePageInfoperso} />
            <Route component={Error} />
          </Switch>
          {isAuthenticated ? (
            <Route exact path="/">
              <Redirect to="/home" />
            </Route>
          ) : (
            <Route exact path="/">
              <Redirect to="/login" />
            </Route>
          )}
        </AuthContext.Provider>
      )}
    </>
  );
}

export default App;
