import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
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
            <Route exact path="/login" component={LoginPage} />
            <PrivateRoute path="/home" component={HomePage} />
            <Route path="/register" component={RegisterPage} />
            <Route path="/passwordforgot" component={PasswordForgot} />
            <Route component={Error} />
          </Switch>
        </AuthContext.Provider>
      )}
    </>
  );
}

export default App;
