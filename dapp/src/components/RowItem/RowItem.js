import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Grid, Typography } from '@material-ui/core'

import styles from './RowItem.styles'

const RowItem = ({ classes, bid, index }) => (
  <Grid container className={classes.bidRow}>
    <Grid item className={classes.bidder} />
    <Grid container direction="column" className={classes.bidderInfo}>
      <Grid className={classes.bidderName}>Bidder {index + 1}</Grid>
      <Grid className={classes.bidderAddress}>{bid.bidderAddress}</Grid>
    </Grid>
    <Grid item className={classes.bidAmount}>
      <Typography className={classes.number}>
        {bid.amount} <span>eth</span>
      </Typography>
    </Grid>
  </Grid>
)

export default withStyles(styles)(RowItem)
