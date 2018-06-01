import React from "react";
import PropTypes from "prop-types";
import Tooltip from "@material-ui/core/es/Tooltip/Tooltip";
import IconButton from "@material-ui/core/es/IconButton/IconButton";

const IconButtonWithTooltip = ({ tooltip, renderIcon, handleClick }) => {
  return (
    <Tooltip title={tooltip}>
      <IconButton onClick={handleClick} aria-label={tooltip}>
        {renderIcon()}
      </IconButton>
    </Tooltip>
  );
};

IconButtonWithTooltip.propTypes = {
  tooltip: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  renderIcon: PropTypes.func.isRequired // Function should return icon
};

export default IconButtonWithTooltip;
