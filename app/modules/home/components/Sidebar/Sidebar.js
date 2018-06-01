import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import EnergyCostCalculator from "./EnergyCostCalculator/EnergyCostCalculator";
import NewDeviceForm from "./NewDeviceForm/NewDeviceForm";
import EnergyPriceForm from "./EnergyPriceForm/EnergyPriceForm";
import withDivider from "../../hoc/withDivider";

const NewDeviceFormWithDivider = withDivider(NewDeviceForm);
const EnergyPriceFormWithDivider = withDivider(EnergyPriceForm);

const styles = {
  sideBarContainer: {
    backgroundColor: "#fff",
    borderLeft: "1px solid rgba(0, 0, 0, 0.12)",
    flex: "1 1 auto",
    display: "flex",
    flexDirection: "column"
  }
};

const Sidebar = ({
  classes,
  handleDeviceSubmit,
  energyPrice,
  handleEnergyPriceChange,
  devices
}) => (
  <div className={classes.sideBarContainer}>
    <NewDeviceFormWithDivider handleDeviceSubmit={handleDeviceSubmit} />
    <EnergyPriceFormWithDivider
      handleChange={handleEnergyPriceChange}
      energyPrice={energyPrice}
    />
    <EnergyCostCalculator
      devices={devices}
      energyPrice={energyPrice}
      currency="zł"
    />
  </div>
);

Sidebar.propTypes = {
  classes: PropTypes.object.isRequired,
  handleDeviceSubmit: PropTypes.func.isRequired,
  energyPrice: PropTypes.number.isRequired,
  handleEnergyPriceChange: PropTypes.func.isRequired,
  devices: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      powerConsumption: PropTypes.string,
      timeUsed: PropTypes.string
    })
  ).isRequired
};

export default withStyles(styles)(Sidebar);
