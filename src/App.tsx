import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { AppBar, Button, Toolbar, Typography } from "@material-ui/core";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import { useStyles } from "./styles";
import Home from "./components/Home";
import fb from "./firebase";
import firebase from "firebase";

function App() {
  const classes = useStyles();
  const [user, setUser] = useState<firebase.User | null>(null);

  useEffect(() => {
    fb.auth().onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
  }, []);

  return (
    <Router>
      <div>
        <div style={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar variant="dense">
              <Typography variant="h6" style={{ flexGrow: 1 }}>
                <Link to="/" className={classes.navLink}>
                  Firebase Authentication
                </Link>
              </Typography>
              {user ? (
                <Button
                  className={classes.navLink}
                  onClick={() => fb.auth().signOut()}
                >
                  Sign Out
                </Button>
              ) : (
                <>
                  <Button style={{ marginRight: "10px" }}>
                    <Link to="/SignUp" className={classes.navLink}>
                      Sign Up
                    </Link>
                  </Button>
                  <Button>
                    <Link to="/SignIn" className={classes.navLink}>
                      Sign In
                    </Link>
                  </Button>
                </>
              )}
            </Toolbar>
          </AppBar>
        </div>

        <Switch>
          <Route exact path="/">
            {user ? <Home /> : <SignIn />}
          </Route>
          <Route path="/SignUp">{user ? <Home /> : <SignUp />}</Route>
          <Route path="/SignIn">{user ? <Home /> : <SignIn />}</Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
