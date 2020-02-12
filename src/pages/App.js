import React from "react";
import "./App.css";
import { Container, Row, Col } from "reactstrap";
import LoginCard from "../components/LoginCard";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Dashboard from "../components/Dashboard";
import Events from "../components/Events";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  }
}));

function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <Events></Events>
    </div>
  );
}

export default App;
// TELA DE LOGIN
{
  /* <header className="App-header">
<div className={classes.root}>
<Grid container spacing={3}>
  <Grid item xs={12} sm={12} align="center">
   <Dashboard></Dashboard>
  </Grid>
</Grid>
</div>
</header> */
}

// DASHBOARD PRINCIPAL
{/* <div className="App">
<Dashboard></Dashboard>
</div> */}
