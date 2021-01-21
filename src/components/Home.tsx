import { Typography } from "@material-ui/core";
import React from "react";
import { useStyles } from "../styles";

export default function Home() {
  const classes = useStyles();
  return (
    <div className={classes.centered}>
      <Typography variant="h1" component="h2">
        👋 Welcome to Homepage
      </Typography>
    </div>
  );
}
