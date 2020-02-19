import React, { Component } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import GitHubIcon from "@material-ui/icons/GitHub";
import axios from "axios";

function Copyright() {
  return (
    <Typography
      variant="body2"
      color="textSecondary"
      align="center"
      style={{ marginBottom: "20px" }}
    >
      {"Star Deck © "}

      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const styles = theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: "#282c34"
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  },
  card: {
    marginTop: theme.spacing(5),
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1)
  }
});

class LoginCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      user: ""
    };
    this.handleChangeUsername = this.handleChangeUsername.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
  }
  async checkGit() {
    console.log(this.state.username);

  }

  async componentDidMount() {}

  handleChangeUsername(event) {
    this.setState({
      username: event.target.value
    });
  }

  handleChangePassword(event) {
    this.setState({
      password: event.target.value
    });
  }

  render() {
    const { classes } = this.props;

    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />

        <Paper elevation={3} className={classes.card}>
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <GitHubIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Cadastre-se
            </Typography>
            <form className={classes.form} noValidate>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="GitHub Email"
                name="email"
                autoComplete="email"
                autoFocus
                value={this.state.username}
                onChange={this.handleChangeUsername}
                onSubmit={ 
                  this.state.username = this.state.user
                }
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="Senha"
                label="Senha"
                type="password"
                id="password"
                autoComplete="current-password"
                value={this.state.senha}
                onChange= {this.handleChangePassword}
              />
              <a /* href="/home" style={{ textDecoration: "none" }} */>
                <Button
                  //type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  onClick={ 
                  
                      console.log(this.state.user)}
                  className={classes.submit}
                >
                  Entrar
                </Button>
              </a>
              <Grid container>
                <Grid item xs></Grid>
              </Grid>
            </form>
          </div>
          <Box mt={8}>
            <Copyright />
             <pre>{JSON.stringify(this.state)}</pre>
          </Box>
        </Paper>
      </Container>
    );
  }
}

export default withStyles(styles)(LoginCard);
