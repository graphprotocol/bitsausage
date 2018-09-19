import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import classnames from 'classnames'

import styles from './WurstBid.styles'
import Button from '../../components/Button/Button'
import Pill from '../../components/Pill/Pill'

const Wurst = ({
  classes,
  name,
  description,
  type,
  bid,
  leadingBid,
  auctionSecLeft,
  onBidChange,
  handleBidClick
}) => (
  <Grid className={classes.root}>
    <Grid container direction="column" justify="center">
      <Grid item>
        <Typography className={classes.name}>{name}</Typography>
        <Pill text={type} />
      </Grid>
      <Grid item>
        <Typography className={classes.description}>{description}</Typography>
        <img
          src={`/images/sausages/${name}.png`}
          alt={name}
          className={classes.image}
        />
      </Grid>
    </Grid>
    <Grid container justify="center" className={classes.bids}>
      <Grid item xs={6}>
        <Typography className={classes.text}>Leading bid</Typography>
        <div className={classes.divider} />
        <Typography className={classes.number}>
          {leadingBid} <span className={classes.leadingBid}>eth</span>
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <Typography className={classes.text}>Ends in</Typography>
        <div className={classes.divider} />
        <Grid container justify="space-evenly">
          <Typography className={classnames(classes.number, classes.seconds)}>
            {auctionSecLeft.minutes} <span>min</span>
          </Typography>
          <Typography className={classnames(classes.number, classes.seconds)}>
            {auctionSecLeft.seconds} <span>sec</span>
          </Typography>
        </Grid>
      </Grid>
    </Grid>
    <Grid
      container
      justify="center"
      spacing={16}
      className={classes.bidButtons}
      id="bid"
    >
      <Grid item>
        <label className={classes.label}>
          <input
            name="bid"
            type="number"
            placeholder="0"
            onChange={onBidChange}
            autoFocus
          />
          <span>ETH</span>
        </label>
      </Grid>
      <Grid item>
        <Button text="BID" onClick={handleBidClick} />
      </Grid>
    </Grid>
  </Grid>
)

export default withStyles(styles)(Wurst)
