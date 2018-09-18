import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

import styles from './About.styles'
import Wurst from '../../components/Wurst/Wurst'

const About = ({ classes }) => (
  <Grid className={classes.about}>
    <Grid container direction="column" justify="center">
      <Grid item>
        <img
          src="/images/logo-about.png"
          alt="Bitsausage Logo"
          className={classes.logo}
        />
        <div className={classes.divider} />
        <Typography className={classes.intro}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Typography>
      </Grid>
      <img
        src="/images/divider-big.svg"
        alt="divider"
        className={classes.bigDivider}
      />
      <Grid container direction="column" spacing={40}>
        {['Bratwurst', 'Currywurst', 'Veganwurst', 'Frankfurter'].map(name => (
          <Grid item key={name}>
            <Wurst name={name} pillText="common" />
          </Grid>
        ))}
      </Grid>
      <img
        src="/images/divider-big.svg"
        alt="divider"
        className={classes.bigDivider}
      />
      <Grid container direction="column" spacing={40}>
        {['Knackwurst', 'Leberwurst'].map(name => (
          <Grid item key={name}>
            <Wurst name={name} pillText="rare" />
          </Grid>
        ))}
      </Grid>
      <img
        src="/images/divider-big.svg"
        alt="divider"
        className={classes.bigDivider}
      />
      <Grid container direction="column" spacing={40}>
        {['Blutwurst', 'Weisswurst'].map(name => (
          <Grid item key={name}>
            <Wurst name={name} pillText="epic" />
          </Grid>
        ))}
      </Grid>
      <img
        src="/images/divider-big.svg"
        alt="divider"
        className={classes.bigDivider}
      />
      <Grid container direction="column" spacing={40}>
        {['Worstwurst'].map(name => (
          <Grid item key={name}>
            <Wurst name={name} pillText="legendary" />
          </Grid>
        ))}
      </Grid>
    </Grid>
  </Grid>
)

export default withStyles(styles)(About)
