import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

import styles from './Wurst.styles'
import Pill from '../Pill/Pill'

const Wurst = ({ classes, name, pillText }) => (
  <Grid className={classes.wurst}>
    <Typography className={classes.name}>{name}</Typography>
    <div className={classes.divider} />
    <Pill text={pillText} />
    <Grid>
      <img
        src={`/images/sausages/${name}.png`}
        alt={name}
        className={classes.image}
      />
    </Grid>
  </Grid>
)
export default withStyles(styles)(Wurst)
