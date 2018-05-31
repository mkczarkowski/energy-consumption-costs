import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/es/Button/Button";

const styles = theme => ({
  container: {
    display: "flex",
    flex: "1 1 auto",
    flexWrap: "wrap",
    flexDirection: "column",
    alignItems: "center"
  },
  textField: {
    width: '80%'
  },
  menu: {
    width: 200
  },
  button: {
    marginTop: 8
  }
});

class NewDeviceForm extends React.Component {
  state = {
    fields: {
      name: "",
      powerConsumption: "",
      timeUsed: ""
    },
    valid: false
  };

  handleChange = name => event => {
    this.setState(
      {
        fields: {
          ...this.state.fields,
          [name]: event.target.value
        }
      },
      isFormValid.bind(this)
    );

    function isFormValid() {
      const fields = { ...this.state.fields };
      const isValid = Object.keys(fields).every(field => fields[field] !== "");

      this.setState({ valid: isValid });
    }
  };

  render() {
    const { classes } = this.props;

    return (
      <form className={classes.container} noValidate autoComplete="off">
        <TextField
          id="name"
          label="Nazwa urządzenia"
          className={classes.textField}
          value={this.state.fields.name}
          onChange={this.handleChange("name")}
          margin="normal"
          type="text"
          required
        />
        <TextField
          id="power-consumption"
          label="Zużycie energii [W]"
          className={classes.textField}
          value={this.state.fields.powerConsumption}
          onChange={this.handleChange("powerConsumption")}
          type="number"
          required
        />
        <TextField
          id="time-used"
          label="Czas użycia [h/mth]"
          className={classes.textField}
          value={this.state.fields.timeUsed}
          onChange={this.handleChange("timeUsed")}
          margin="normal"
          type="number"
          required
        />
        <Button
          variant="raised"
          color="primary"
          className={classes.button}
          disabled={!this.state.valid}
          onClick={() => this.props.handleDeviceSubmit(this.state.fields)}
        >
          Dodaj urządzenie
        </Button>
      </form>
    );
  }
}

NewDeviceForm.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(NewDeviceForm);
