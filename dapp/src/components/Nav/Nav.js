import React from 'react'
import { Grid } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'

import styles from './Nav.styles'

const Nav = ({ classes }) => (
  <Grid className={classes.root}>
    <span className={classes.banner} />
    <Link className={classes.info} to="/">
      <img src="/images/info-icon.svg" alt="" />
    </Link>
    <Link className={classes.dashboard} to="/dashboard">
      <img src="/images/smile-icon.svg" alt="" />
    </Link>
    <div className={classes.space} />
  </Grid>
)

export default withStyles(styles)(Nav)
