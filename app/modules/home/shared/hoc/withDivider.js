import React, { Fragment } from "react";
import Divider from "@material-ui/core/es/Divider/Divider";


export default Component => {
  return props => (
    <Fragment>
      <Component {...props} />
      <Divider />
    </Fragment>
  );
};
