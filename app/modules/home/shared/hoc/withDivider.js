import React, { Fragment } from "react";
import Divider from "@material-ui/core/es/Divider/Divider";

const styles = {
  divider: {
    // marginTop: 16
  }
};

export default Component => {
  return props => (
    <Fragment>
      <Component {...props} />
      <Divider style={styles.divider} />
    </Fragment>
  );
};
