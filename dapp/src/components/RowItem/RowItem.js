import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Grid, Typography } from '@material-ui/core'

import styles from './RowItem.styles'

const RowItem = ({ classes }) => (
  <Grid container className={classes.bidRow}>
    <Grid item className={classes.bidder} />
    <Grid container direction="column" className={classes.bidderInfo}>
      <Grid className={classes.bidderName}>Bidder 1</Grid>
      <Grid className={classes.bidderAddress}>
        0x85cb85bf6d9be8b0342c850673628ad376d12c05
      </Grid>
    </Grid>
    <Grid item className={classes.bidAmount}>
      <Typography className={classes.number}>
        45 <span>eth</span>
      </Typography>
    </Grid>
  </Grid>
)

export default withStyles(styles)(RowItem)
