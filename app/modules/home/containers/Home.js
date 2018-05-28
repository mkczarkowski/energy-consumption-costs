import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "react-router-redux";
import Home from "../components/Home";
import DeviceTable from "../components/DeviceTable/DeviceTable";

class Container extends Component {
  onRequestRouteChange(route) {
    this.props.dispatch(push(route));
  }

  render() {
    return (
      <div>
        <DeviceTable />
      </div>
    );
  }
}

export default connect(state => {
  return {};
})(Container);
