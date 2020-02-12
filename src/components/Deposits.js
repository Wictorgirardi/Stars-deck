import React from "react";
import Link from "@material-ui/core/Link";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Title from "./Title";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles({
  depositContext: {
    flex: 1
  },
  large: {
    marginTop: 40,
    marginLeft: 10,
    width: 80,
    height: 80
  },
  title: { 
    //marginTop: 30,
    fontWeight: 500
  },
  position: { 
    //marginTop: 30,
    marginLeft: 10,
    width: 80,
    height: 80
  }
});

export default function Deposits() {
  const classes = useStyles();
  return (
    <>
       <Grid container spacing={3}>
        <Grid item xs={3}>
          <Avatar className={classes.large} ></Avatar>
        </Grid>
        <Grid item xs={6}>
          <h3>1º lugar</h3>
        </Grid>
      </Grid>
    </>
  );
}
