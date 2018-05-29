import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "react-router-redux";
import uniqid from "uniqid";
import DeviceTable from "../components/DeviceTable/DeviceTable";
import AddDeviceForm from "../components/NewDeviceForm/NewDeviceForm";
import Divider from "@material-ui/core/es/Divider/Divider";

const styles = {
  container: {
    display: "flex"
  },
  sideBarContainer: {
    flex: "1 1 auto"
  },
  divider: {
    marginTop: 16
  }
};

class Container extends Component {
  state = {
    devices: []
  };

  onRequestRouteChange(route) {
    this.props.dispatch(push(route));
  }

  handleDeviceSubmit = ({ name, powerConsumption, timeUsed }) => {
    const newDevice = { id: uniqid(), name, powerConsumption, timeUsed };
    this.setState({ devices: [...this.state.devices, newDevice] });
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
          <AddDeviceForm handleDeviceSubmit={this.handleDeviceSubmit} />
          <Divider style={styles.divider} />
        </div>
      </div>
    );
  }
}

export default connect(state => {
  return {};
})(Container);
