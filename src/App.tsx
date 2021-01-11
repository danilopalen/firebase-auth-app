import React, { useEffect } from "react";
import { useState } from "react";
import "./App.css";
import SignIn from "./SignIn";
import firebase from "firebase";

function App() {
  const [user, setUser] = useState<firebase.User | null>(null);

  console.log("user", user);
  return (
    <>
      {user ? (
        <h1>user logged in</h1>
      ) : (
        <SignIn
          setUser={(user) => {
            setUser(user);
          }}
        />
      )}
    </>
  );
}

export default App;
