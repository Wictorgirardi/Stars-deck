import React from "react";
import "./App.css";
import { Container, Row, Col } from "reactstrap";
import LoginCard from "../components/LoginCard/LoginCard";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Dashboard from "../components/Dashboard/Dashboard";
import Events from "../components/Events/Events";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  }
}));

function Login() {
  const classes = useStyles();
  return (
      <header className="App-header">
        <div className={classes.root}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={12} align="center">
              <LoginCard></LoginCard>
            </Grid>
          </Grid>
        </div>
      </header>
  );
}

export default Login;
// TELA DE LOGIN

// DASHBOARD PRINCIPAL
{
  /* <div className="App">
<Dashboard></Dashboard>
</div> */
}

// TELA DE CADASTRO DE EVENTO

{
  /* <div className="App">
<Events></Events>
</div> */
}
