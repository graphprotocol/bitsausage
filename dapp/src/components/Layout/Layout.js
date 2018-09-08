import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import classnames from 'classnames'

import styles from './Layout.styles'
import Button from '../Button/Button'
import RowItem from '../RowItem/RowItem'

const Layout = ({ name, classes }) => (
  <Grid className={classes.root}>
    <span className={classes.banner} />
    <div className={classes.space} />
    <div className={classes.circle}>
      <Typography className={classes.name}>BRATWURST</Typography>
      <img src="/images/sausage-pill.svg" />
      <span className={classes.pillCopy}>Rare</span>
    </div>
    <Typography className={classes.description}>
      Bratwurst is a type of German sausage made from veal, beef, or most
      commonly pork. The name is derived from the Old High German Brätwurst,
      from brät-, finely chopped meat, and Wurst, sausage, although in modern
      German it is often associated with the verb braten, to pan fry or roast.
    </Typography>
    <img src="/images/big-sausage.svg" />
    <Grid container justify="center" className={classes.bids}>
      <Grid item xs={6}>
        <Typography className={classes.text}>Leading bid</Typography>
        <div className={classes.divider} />
        <Typography className={classes.number}>
          45 <span>eth</span>
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <Typography className={classes.text}>Ends in</Typography>
        <div className={classes.divider} />
        <Typography className={classnames(classes.number, classes.seconds)}>
          63 <span>sec</span>
        </Typography>
      </Grid>
    </Grid>
    <Grid
      container
      justify="center"
      spacing={16}
      className={classes.bidButtons}
    >
      <Grid item>
        <label className={classes.label}>
          <input type="text" placeholder="0" />
          <span>ETH</span>
        </label>
      </Grid>
      <Grid item>
        <Button text="BID" />
      </Grid>
    </Grid>
    <img src="/images/divider-big.svg" />
    <Grid className={classes.history}>
      <Typography className={classes.title}>BID HISTORY</Typography>
      <div className={classes.count}>110 bids</div>
      <Grid className={classes.bidWrapper}>
        {[1, 2, 3, 4, 5].map((el, index) => (
          <RowItem key={index} />
        ))}
      </Grid>
    </Grid>
  </Grid>
)

export default withStyles(styles)(Layout)
