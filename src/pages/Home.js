import React from "react";
import "./App.css";
import { makeStyles } from "@material-ui/core/styles";
import Dashboard from "../components/Dashboard/Dashboard";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  }
}));

function Home() {
  return (
    <div className="App">
      <Dashboard></Dashboard>
    </div>
  );
}

export default Home;
