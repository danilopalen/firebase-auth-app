import React from "react";
import { useState } from "react";
import "./App.css";
import firebase from "firebase";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { AppBar, Button, Toolbar, Typography } from "@material-ui/core";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";

function App() {
  const [user, setUser] = useState<firebase.User | null>(null);

  console.log("user", user);
  return (
    <Router>
      <div>
        <div style={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar variant="dense">
              <Typography variant="h6" style={{ flexGrow: 1 }}>
                Firebase Authentication
              </Typography>
              <Button>
                <Link
                  to="/SignUp"
                  style={{
                    textDecoration: "none",
                    color: "#fff",
                    marginRight: "10px",
                  }}
                >
                  Sign Up
                </Link>
              </Button>
              <Button>
                <Link
                  to="/SignIn"
                  style={{ textDecoration: "none", color: "#fff" }}
                >
                  Sign In
                </Link>
              </Button>
            </Toolbar>
          </AppBar>
        </div>

        <Switch>
          <Route path="/SignUp">
            <SignUp
              setUser={(user) => {
                setUser(user);
              }}
            />
          </Route>
          <Route path="/SignIn">
            <SignIn
              setUser={(user) => {
                setUser(user);
              }}
            />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
