import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const styles = theme => ({
  container: {
    display: "flex",
    flex: "1 1 auto",
    flexWrap: "wrap",
    flexDirection: "column",
    alignItems: "center"
  },
  textField: {
    width: "80%"
  }
});

const EnergyPriceForm = ({ classes, energyPrice, handleChange }) => (
  <form className={classes.container} noValidate autoComplete="off">
    <TextField
      id="energyPrice"
      label="Cena energii [zł/kWh]"
      className={classes.textField}
      value={energyPrice}
      onChange={event => handleChange(event)}
      margin="normal"
      type="number"
      required
    />
  </form>
);

EnergyPriceForm.propTypes = {
  classes: PropTypes.object.isRequired,
  energyPrice: PropTypes.number.isRequired,
  handleChange: PropTypes.func.isRequired
};

export default withStyles(styles)(EnergyPriceForm);