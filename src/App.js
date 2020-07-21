import React, { useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import theme from "styled-theming";
import { Provider as ReduxProvider } from "react-redux";

import store from "./services/store";
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
import ProfilePage from "./pages/ProfilePage.jsx";
import ProfilePageInfoperso from "./pages/ProfilePageInfoperso.jsx";
import DarkThemeProvider from "./services/DarkThemeProvider";
import Themes from "./constants/Themes";

AuthAPI.setup();

export const backgroundColor = theme("theme", {
  light: "#fff",
  dark: "#2d2d2d",
});

export const textColor = theme("theme", {
  light: "#000",
  dark: "#fff",
});

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
          <ReduxProvider store={store}>
            <DarkThemeProvider>
              <Themes.Container>
                <Switch>
                  <Route path="/login" component={LoginPage} />
                  <PrivateRoute path="/home" component={HomePage} />
                  <Route exact path="/register" component={RegisterPage} />
                  <Route exact path="/profile" component={ProfilePage} />
                  <Route
                    exact
                    path="/info-perso"
                    component={ProfilePageInfoperso}
                  />
                  <Route path="/passwordforgot" component={PasswordForgot} />
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
              </Themes.Container>
            </DarkThemeProvider>
          </ReduxProvider>
        </AuthContext.Provider>
      )}
    </>
  );
}

export default App;
