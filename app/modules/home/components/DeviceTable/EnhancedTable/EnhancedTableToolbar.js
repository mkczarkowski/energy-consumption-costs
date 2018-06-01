import React from "react";
import { withStyles } from "@material-ui/core/styles/index";
import classNames from "classnames";
import PropTypes from "prop-types";
import { lighten } from "@material-ui/core/styles/colorManipulator";
import Toolbar from "@material-ui/core/es/Toolbar/Toolbar";
import Typography from "@material-ui/core/es/Typography/Typography";
import Tooltip from "@material-ui/core/es/Tooltip/Tooltip";
import IconButton from "@material-ui/core/es/IconButton/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import SaveIcon from "@material-ui/icons/Save";
import LoadIcon from "@material-ui/icons/FileDownload";
import IconButtonWithTooltip from "../../../shared/ui/IconButtonWithTooltip";

const toolbarStyles = theme => ({
  root: {
    paddingRight: theme.spacing.unit
  },
  highlight:
    theme.palette.type === "light"
      ? {
          color: theme.palette.secondary.main,
          backgroundColor: lighten(theme.palette.secondary.light, 0.85)
        }
      : {
          color: theme.palette.text.primary,
          backgroundColor: theme.palette.secondary.dark
        },
  spacer: {
    flex: "1 1 100%"
  },
  actions: {
    color: theme.palette.text.secondary
  },
  title: {
    flex: "0 0 auto"
  }
});

let EnhancedTableToolbar = props => {
  const {
    numSelected,
    selected,
    handleLoadClick,
    handleDeleteClick,
    classes,
    handleSaveClick
  } = props;

  return (
    <Toolbar
      className={classNames(classes.root, {
        [classes.highlight]: numSelected > 0
      })}
    >
      <div className={classes.title}>
        {numSelected > 0 ? (
          <Typography color="inherit" variant="subheading">
            {numSelected} selected
          </Typography>
        ) : (
          <Typography variant="title" id="tableTitle">
            Lista urządzeń
          </Typography>
        )}
      </div>
      <div className={classes.spacer} />
      <div className={classes.actions}>
        {numSelected > 0 && (
          <IconButtonWithTooltip
            tooltip="Usuń"
            handleClick={() => handleDeleteClick(selected)}
            renderIcon={() => <DeleteIcon />}
          />
        )}
      </div>
      <IconButtonWithTooltip
        tooltip="Wczytaj listę"
        handleClick={handleLoadClick}
        renderIcon={() => <LoadIcon />}
      />
      <IconButtonWithTooltip
        tooltip="Zapisz listę"
        handleClick={handleSaveClick}
        renderIcon={() => <SaveIcon />}
      />
    </Toolbar>
  );
};

EnhancedTableToolbar.propTypes = {
  classes: PropTypes.object.isRequired,
  numSelected: PropTypes.number.isRequired
};

EnhancedTableToolbar = withStyles(toolbarStyles)(EnhancedTableToolbar);

export default EnhancedTableToolbar;
