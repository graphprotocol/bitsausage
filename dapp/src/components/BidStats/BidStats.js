import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

import RowItem from '../RowItem/RowItem'
import Pill from '../Pill/Pill'
import Button from '../Button/Button'
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
    <Pill text={pillText} />
    <Grid className={classes.bidWrapper}>
      {rows.map((el, index) => (
        <RowItem key={index} />
      ))}
    </Grid>
    <Button text="SELL ALL" onClick={handleSellClick} classname="sell" />
  </Grid>
)

export default withStyles(styles)(BidStats)
