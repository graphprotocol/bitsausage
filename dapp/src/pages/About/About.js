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
      <Typography className={classes.title}>Available Sausages</Typography>
      <Grid className={classes.wrapper}>
        {[
          'Bratwurst',
          'Blutwurst',
          'Currywurst',
          'Veganwurst',
          'Weisswurst',
          'Frankfurter'
        ].map(name => (
          <Wurst name={name} key={name} />
        ))}
      </Grid>
    </Grid>
  </Grid>
)

export default withStyles(styles)(About)
