import React from 'react'
import { Grid } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import { NavLink } from 'react-router-dom'

import styles from './Nav.styles'

const Nav = ({ classes }) => (
  <Grid container justify="space-between" className={classes.root}>
    <Grid item className={classes.about}>
      <NavLink to="/about" activeClassName={classes.activeAbout}>
        <div className={classes.aboutIcon} />
      </NavLink>
    </Grid>
    <Grid item className={classes.sausageLogo}>
      <NavLink to="/" exact activeClassName={classes.activeAuction}>
        <div className={classes.auctionIcon} />
      </NavLink>
    </Grid>
    <Grid item className={classes.auctions}>
      <NavLink to="/profile" activeClassName={classes.activeProfile}>
        <div className={classes.profileIcon} />
      </NavLink>
    </Grid>
  </Grid>
)

export default withStyles(styles)(Nav)
