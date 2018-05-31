import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "react-router-redux";
import uniqid from "uniqid";
import DeviceTable from "../components/DeviceTable/DeviceTable";
import NewDeviceForm from "../components/Sidebar/NewDeviceForm/NewDeviceForm";
import Divider from "@material-ui/core/es/Divider/Divider";
import EnergyPriceForm from "../components/Sidebar/EnergyPriceForm/EnergyPriceForm";
import withDivider from "../hoc/withDivider";

const styles = {
  container: {
    display: "flex"
  },
  sideBarContainer: {
    flex: "1 1 auto"
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

  render() {
    return (
      <div style={styles.container}>
        <DeviceTable
          data={this.state.devices}
          handleDeleteClick={this.handleDeleteClick}
        />
        <div style={styles.sideBarContainer}>
          <NewDeviceFormWithDivider
            handleDeviceSubmit={this.handleDeviceSubmit}
          />
          <EnergyPriceFormWithDivider
            handleChange={this.handleEnergyPriceChange}
            energyPrice={this.state.energyPrice}
          />
        </div>
      </div>
    );
  }
}

export default connect(state => {
  return {};
})(Container);
