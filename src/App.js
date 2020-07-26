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
import FilterPage from "./pages/FilterPage.jsx";
import Search from "./pages/Search.jsx";
import FavorisPage from "./pages/FavorisPage";

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
  console.log(isAuthenticated);
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
                  <Route exact path="/login" component={LoginPage} />
                  <Route exact path="/register" component={RegisterPage} />
                  <PrivateRoute path="/home" component={HomePage} />
                  <Route
                    exact
                    path="/passwordforgot"
                    component={PasswordForgot}
                  />
                  <Route exact path="/profile" component={ProfilePage} />
                  <PrivateRoute
                    path="/infos"
                    component={ProfilePageInfoperso}
                  />

                  <PrivateRoute path="/filter" component={FilterPage} />
                  <PrivateRoute path="/search" component={Search} />
                  <PrivateRoute path="/favoris" component={FavorisPage} />
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
