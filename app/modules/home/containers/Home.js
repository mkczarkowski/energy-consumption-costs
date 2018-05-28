import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "react-router-redux";
import DeviceTable from "../components/DeviceTable/DeviceTable";
import AddDeviceForm from "../components/NewDeviceForm/AddDeviceForm";
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
  onRequestRouteChange(route) {
    this.props.dispatch(push(route));
  }

  render() {
    return (
      <div style={styles.container}>
        <DeviceTable />
        <div style={styles.sideBarContainer}>
          <AddDeviceForm />
          <Divider style={styles.divider} />
        </div>
      </div>
    );
  }
}

export default connect(state => {
  return {};
})(Container);
