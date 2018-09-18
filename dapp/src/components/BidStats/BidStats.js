import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

import RowItem from '../RowItem/RowItem'
import Pill from '../Pill/Pill'
import styles from './BidStats.styles'

const BidStats = ({
  classes,
  title,
  pillText,
  rows,
  coin,
  value,
  buttonText,
  handleSellClick = () => {}
}) => (
  <Grid className={classes.stats}>
    {coin && (
      <div className={classes.coin}>
        <img src={`/images/${coin}`} alt="coin" />
        <span className={classes.value}>{value}</span>
      </div>
    )}
    <Typography className={classes.title}>{title}</Typography>
    <Grid container direction="column" justify="center" spacing={24}>
      <Grid item>
        <img
          src={`/images/sausages/${title}.png`}
          alt={title}
          className={classes.sausageImg}
        />
      </Grid>
      <Grid item>
        <Pill text={pillText} />
      </Grid>
    </Grid>

    <Grid className={classes.bidWrapper}>
      {rows.map((el, index) => (
        <RowItem key={index} />
      ))}
    </Grid>
  </Grid>
)

export default withStyles(styles)(BidStats)
