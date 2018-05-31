import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { AppBar, Button, IconButton, Toolbar, Typography } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import { withStyles } from '@material-ui/core/styles'

const styles = {
  title: {
    flex: '1 auto'
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  }
}

class Header extends Component {
  render () {
    const {
      classes,
      onRequestRouteChange
    } = this.props

    return (
      <AppBar position="static">
        <Toolbar>
          <Typography variant="title" color="inherit" className={classes.title}>
            Kalkulator kosztów zużycia energii elektrycznej
          </Typography>
        </Toolbar>
      </AppBar>
    )
  }
}

Header.propTypes = {
  onRequestRouteChange: PropTypes.func.isRequired
}

export default withStyles(styles)(Header)
