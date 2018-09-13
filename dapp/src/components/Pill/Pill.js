import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

import styles from './Pill.styles'

const Pill = ({ classes, text }) => (
  <Grid className={classes.pill}>
    <Typography className={classes.text}>{text}</Typography>
  </Grid>
)
export default withStyles(styles)(Pill)
