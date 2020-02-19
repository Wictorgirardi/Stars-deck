import React from "react";
import ReactDOM from "react-dom";
import { Form, Field } from "react-final-form";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Checkbox, Radio, Select } from "final-form-material-ui";
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
import {
  MuiPickersUtilsProvider,
  TimePicker,
  DatePicker
} from "@material-ui/pickers";

function DatePickerWrapper(props) {
  const {
    input: { name, onChange, value, ...restInput },
    meta,
    ...rest
  } = props;
  const showError =
    ((meta.submitError && !meta.dirtySinceLastSubmit) || meta.error) &&
    meta.touched;

  return (
    <DatePicker
      {...rest}
      name={name}
      helperText={showError ? meta.error || meta.submitError : undefined}
      error={showError}
      inputProps={restInput}
      onChange={onChange}
      value={value === "" ? null : value}
    />
  );
}

const onSubmit = async values => {
  const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
  await sleep(300);
  window.alert(JSON.stringify(values, 0, 2));
};
const validate = values => {
  const errors = {};
  if (!values.firstName) {
    errors.firstName = "Required";
  }
  if (!values.lastName) {
    errors.lastName = "Required";
  }
  if (!values.email) {
    errors.email = "Required";
  }
  return errors;
};

export default function FormEvent() {
  return (
    <div style={{ padding: 16, margin: "auto", maxWidth: 600 }}>
      <CssBaseline />
      <Form
        onSubmit={onSubmit}
        validate={validate}
        render={({ handleSubmit, reset, submitting, pristine, values }) => (
          <form onSubmit={handleSubmit} noValidate>
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
                  />
                </Grid>

                <Grid item xs={12}>
                  <Field
                    fullWidth
                    name="pontos"
                    component={Select}
                    label="Tipo de evento"
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
                    disabled={submitting}
                  >
                    Cadastrar
                  </Button>
                </Grid>
                <Grid item xs={12}> 
           
            </Grid>
              </Grid>
            </Paper>
            <pre>{JSON.stringify(values, 0, 2)}</pre>
          </form>
        )}
      />
    </div>
  );
}
