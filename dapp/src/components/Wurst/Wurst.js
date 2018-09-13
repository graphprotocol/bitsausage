import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'

import styles from './Wurst.styles'
import Pill from '../Pill/Pill'

const Wurst = ({ classes, name }) => (
  <Grid className={classes.wurst}>
    <Typography className={classes.name}>{name}</Typography>
    <div className={classes.divider} />
    <Pill text="common" />
    <Grid>
      <Link to={`/sausages/${name}`}>
        <img src={`/images/sausages/${name}.png`} alt={name} />
      </Link>
    </Grid>
  </Grid>
)
export default withStyles(styles)(Wurst)
