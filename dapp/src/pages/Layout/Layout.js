import React from 'react'
import { Grid } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import { Switch, Route } from 'react-router-dom'

import styles from './Layout.styles'
import Nav from '../../components/Nav/Nav'
import About from '../../pages/About/About'
import Landing from '../../pages/Landing/Landing'
import Dashboard from '../../pages/Dashboard/Dashboard'

class Layout extends React.Component {
  render() {
    const { classes } = this.props

    return (
      <Grid className={classes.root}>
        <Nav />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/about" component={About} />
          <Route path="/profile" component={Dashboard} />
        </Switch>
      </Grid>
    )
  }
}

export default withStyles(styles)(Layout)
