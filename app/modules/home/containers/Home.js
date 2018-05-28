import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "react-router-redux";
import DeviceTable from "../components/DeviceTable/DeviceTable";
import AddDeviceForm from "../components/NewDeviceForm/AddDeviceForm";

class Container extends Component {
  onRequestRouteChange(route) {
    this.props.dispatch(push(route));
  }

  render() {
    return (
      <div style={{display: 'flex'}}>
        <DeviceTable />
        <AddDeviceForm />
      </div>
    );
  }
}

export default connect(state => {
  return {};
})(Container);
