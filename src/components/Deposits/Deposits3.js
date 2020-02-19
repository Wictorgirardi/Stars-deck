import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import axios from "axios";
import logo from '../../assets/bronze-medal.png'; 

const styles = theme => ({
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

class Deposits3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      user: "",
      avatar: ""
    };
  }

  async componentDidMount() {
    axios.get(`https://api.github.com/users/lucasgandac`)
    .then(res => {
      const persons = res.data;
      this.state.username = persons.login 
      this.state.avatar = persons.avatar_url
      console.log(this.state.username)
      this.setState({ persons });
    })
  }

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
      <>
        <Grid container spacing={3}>
          <Grid item xs={3}>
            <Avatar className={classes.large} src={this.state.avatar}></Avatar>
          </Grid>
          <Grid item xs={6}>
          <img src={logo} alt="Logo" style={{width: 35, height: 35, marginLeft:200, marginBottom: -20}}/>
            <h3 style={{marginLeft:-10, marginBottom: -10}}>3º lugar</h3>
            <h1 style={{marginLeft:40}}>{this.state.username}</h1>
            <h3 style={{ marginTop: -10}}>16 pontos</h3>
          </Grid>
        </Grid>
      </>
    );
  }
}

export default withStyles(styles)(Deposits3);
