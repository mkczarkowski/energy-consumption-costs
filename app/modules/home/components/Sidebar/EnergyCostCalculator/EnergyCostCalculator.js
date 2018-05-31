import React, { Component } from "react";
import calculateEnergyCost from "./helpers/calculateEnergyCost";
import Typography from "@material-ui/core/es/Typography/Typography";

class EnergyCostCalculator extends Component {
  state = {};

  render() {
    const montlyEnergyCost = calculateEnergyCost(
      this.props.devices,
      this.props.energyPrice
    );
    const yearlyEnergyCost = 12 * montlyEnergyCost;
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          flex: "1 1 auto"
        }}
      >
        <Typography variant="headline" paragraph align="center" color="primary">
          Koszta zużycia energii
        </Typography>
        <Typography variant="display2" align="center" color="secondary">
          {montlyEnergyCost}
          {"  "}
          {this.props.currency}
        </Typography>
        <Typography variant="subheading" paragraph align="center">
          miesięcznie
        </Typography>
        <Typography variant="display2" align="center" color="secondary">
          {yearlyEnergyCost}
          {"  "}
          {this.props.currency}
        </Typography>
        <Typography variant="subheading" paragraph align="center">
          rocznie
        </Typography>
      </div>
    );
  }
}

export default EnergyCostCalculator;
