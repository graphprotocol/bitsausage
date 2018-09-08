import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

import Button from '../Button/Button'
import Social from '../Social/Social'
import styles from './Layout.styles'

const Layout = ({ name, classes }) => (
  <Grid className={classes.root}>
    <span className={classes.shape1} />
    <span className={classes.shape2} />
    <span className={classes.shape3} />
    <span className={classes.shape4} />
    <Grid container direction="column" className={classes.section}>
      <Typography className={classes.title}>Welcome {name}!</Typography>
      <span className={classes.divider} />
      <Typography className={classes.welcome}>
        This is a starter app built by our team at The Graph. It uses React,
        Apollo and Material UI. We also have an example GraphQL endpoint for
        building your frontend.
        <br />
        <br />
        Check out The Graph Bounty description to start building your cool
        project. Happy Hacking!
      </Typography>
      <Grid container justify="center" className={classes.buttons}>
        <Button
          href="http://thegraph.com"
          target="_blank"
          text="THEGRAPH.COM"
        />
        <Button
          href="https://github.com/ethberlin-hackathon/ETHBerlin-Bounties/issues?utf8=%E2%9C%93&q=is%3Aissue+is%3Aopen+%22the+graph+prize%22"
          target="_blank"
          text="THE GRAPH BOUNTY"
          variant="dark"
        />
      </Grid>
    </Grid>
    <span className={classes.ornament} />
    <Social className={classes.social} />
  </Grid>
)

export default withStyles(styles)(Layout)
