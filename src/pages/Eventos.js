import React from "react";
import "./App.css";
import { makeStyles } from "@material-ui/core/styles";
import Events from "../components/Events/Events";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  }
}));

function Eventos() {
  const classes = useStyles();
  return (
    <div className="App">
      <Events></Events>
    </div>
  );
}

export default Eventos;
