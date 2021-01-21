import React from "react";
import fb from "../firebase";

export default function Home() {
  return (
    <>
      <h1>Home</h1>
      <button onClick={() => fb.auth().signOut()}>Sign Out</button>
    </>
  );
}
