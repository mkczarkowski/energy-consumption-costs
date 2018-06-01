import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "react-router-redux";
import uniqid from "uniqid";
import DeviceTable from "../components/DeviceTable/DeviceTable";
import NewDeviceForm from "../components/Sidebar/NewDeviceForm/NewDeviceForm";
import EnergyPriceForm from "../components/Sidebar/EnergyPriceForm/EnergyPriceForm";
import withDivider from "../hoc/withDivider";
import EnergyCostCalculator from "../components/Sidebar/EnergyCostCalculator/EnergyCostCalculator";
import storage from "./helpers/storage";

const styles = {
  container: {
    display: "flex"
  },
  sideBarContainer: {
    backgroundColor: "#fff",
    borderLeft: "1px solid rgba(0, 0, 0, 0.12)",
    flex: "1 1 auto",
    display: "flex",
    flexDirection: "column"
  }
};

const NewDeviceFormWithDivider = withDivider(NewDeviceForm);
const EnergyPriceFormWithDivider = withDivider(EnergyPriceForm);

class Container extends Component {
  state = {
    devices: [],
    energyPrice: 0.67
  };

  onRequestRouteChange(route) {
    this.props.dispatch(push(route));
  }

  handleDeviceSubmit = ({ name, powerConsumption, timeUsed }) => {
    const newDevice = { id: uniqid(), name, powerConsumption, timeUsed };
    this.setState({ devices: [...this.state.devices, newDevice] });
  };

  handleEnergyPriceChange = event => {
    const newPrice = Number(event.target.value);
    this.setState({ energyPrice: newPrice });
  };

  handleDeleteClick = selected => {
    this.setState(prevState => {
      const devices = [...prevState.devices];

      const devicesNotSelectedForDeletion = devices.filter(
        el => !selected.includes(el.id)
      );

      return { devices: devicesNotSelectedForDeletion };
    });
  };

  handleSaveClick = () => {
    storage.set("devices", this.state.devices, error => {
      if (error) {
        throw error;
      }
    });
  };

  handleLoadClick = () => {
    storage.get("devices", setLoadedDevicesState.bind(this));

    function setLoadedDevicesState(error, devices) {
      if (error) {
        throw error;
      }

      return this.setState({ devices });
    }
  };

  render() {
    return (
      <div style={styles.container}>
        <DeviceTable
          data={this.state.devices}
          handleDeleteClick={this.handleDeleteClick}
          handleSaveClick={this.handleSaveClick}
          handleLoadClick={this.handleLoadClick}
        />
        <div style={styles.sideBarContainer}>
          <NewDeviceFormWithDivider
            handleDeviceSubmit={this.handleDeviceSubmit}
          />
          <EnergyPriceFormWithDivider
            handleChange={this.handleEnergyPriceChange}
            energyPrice={this.state.energyPrice}
          />
          <EnergyCostCalculator
            devices={this.state.devices}
            energyPrice={this.state.energyPrice}
            currency="zł"
          />
        </div>
      </div>
    );
  }
}

export default connect(state => {
  return {};
})(Container);
