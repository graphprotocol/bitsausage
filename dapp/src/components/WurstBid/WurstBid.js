import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import classnames from 'classnames'

import styles from './WurstBid.styles'
import Button from '../../components/Button/Button'

const Wurst = ({
  classes,
  name,
  description,
  bid,
  leadingBid,
  auctionSecLeft,
  onBidChange,
  handleBidClick
}) => (
  <Grid className={classes.root}>
    <div className={classes.circle}>
      <Typography className={classes.name}>{name}</Typography>
      <img src="/images/sausage-pill.svg" alt="sausage pill" />
      <span className={classes.pillCopy}>RARE</span>
    </div>
    <Typography className={classes.description}>{description}</Typography>
    <img src={`/images/sausages/${name}.png`} alt={name} />
    <Grid container justify="center" className={classes.bids}>
      <Grid item xs={6}>
        <Typography className={classes.text}>Leading bid</Typography>
        <div className={classes.divider} />
        <Typography className={classes.number}>
          {leadingBid} <span>eth</span>
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <Typography className={classes.text}>Ends in</Typography>
        <div className={classes.divider} />
        <Typography className={classnames(classes.number, classes.seconds)}>
          {auctionSecLeft} <span>sec</span>
        </Typography>
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
