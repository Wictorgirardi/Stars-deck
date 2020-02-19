import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Form, Field } from "react-final-form";
import { TextField, Checkbox, Radio, Select } from "final-form-material-ui";
import axios from "axios";
import {
  Typography,
  Paper,
  Link,
  Grid,
  Button,
  CssBaseline,
  RadioGroup,
  FormLabel,
  MenuItem,
  FormGroup,
  FormControl,
  FormControlLabel
} from "@material-ui/core";
// Picker

class FormEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      user: "",
      route: ""
    };
    this.handleChangeUsername = this.handleChangeUsername.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
 addUser() {
    console.log(this.state);
    alert('Evento Cadastrado com sucesso');
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
  handleSubmit(event) {
    this.Checkgit();
    event.preventDefault();
  }
  render() {
    const { classes } = this.props;
    return (
      <div style={{ padding: 16, margin: "auto", maxWidth: 600 }}>
        <CssBaseline />
        <Form
          onSubmit={this.handleSubmit}
          render={() => (
            <Paper style={{ padding: 16 }}>
              <Grid item xs={12}>
                <h1>Cadastro em um novo evento</h1>
              </Grid>
              <Grid container alignItems="flex-start" spacing={2}>
                <Grid item xs={12}>
                  <Field
                    fullWidth
                    required
                    name="eventName"
                    component={TextField}
                    type="text"
                    label="Nome do evento"
                    value={this.state.username}
                    onChange={this.handleChangeUsername}
                  />
                </Grid>

                <Grid item xs={12}>
                  <Field
                    fullWidth
                    name="pontos"
                    component={Select}
                    label="Tipo de evento"
                    value={this.state.password}
                    onChange={this.handleChangePassword}
                    formControlProps={{ fullWidth: true }}
                  >
                    <MenuItem value="1">Participação em encontro</MenuItem>
                    <MenuItem value="2">Dojo Coding</MenuItem>
                    <MenuItem value="3">Apresentação de palestra</MenuItem>
                    <MenuItem value="3">PR em projeto open source</MenuItem>
                  </Field>
                </Grid>

                <Grid item style={{ marginTop: 16 }}>
                  <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    onClick={this.addUser()}
                  >
                    Cadastrar
                  </Button>
                </Grid>
                <Grid item xs={12}></Grid>
              </Grid>
            </Paper>
          )}
        />
      </div>
    );
  }
}

export default FormEvent;
