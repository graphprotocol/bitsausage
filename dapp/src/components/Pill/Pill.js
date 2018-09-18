import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

import styles from './Pill.styles'

const colorsMap = {
  common: '#3C0A0C',
  rare: '#E6C7A2',
  epic: '#C7C7C7',
  legendary: '#DF8F8F'
}

const Pill = ({ classes, text }) => (
  <Grid className={classes.pill} style={{ backgroundColor: colorsMap[text] }}>
    <Typography className={classes.text}>{text}</Typography>
  </Grid>
)
export default withStyles(styles)(Pill)
