import React from 'react'
import { Grid } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

import styles from './Dashboard.styles'
import BidStats from '../../components/BidStats/BidStats'

class Dashboard extends React.Component {
  render() {
    const { classes } = this.props

    return (
      <Grid container justify="center" className={classes.root}>
        <Grid item className={classes.bidstats}>
          <BidStats
            title="Bratwurst"
            pillText="rare"
            rows={[1, 2, 3]}
            coin="hotcoin.svg"
            value={5}
          />
        </Grid>
        <Grid item className={classes.bidstats}>
          <BidStats
            title="Currywurst"
            pillText="common"
            rows={[1, 2, 3]}
            coin="hotcoin.svg"
            value={8}
          />
        </Grid>
      </Grid>
    )
  }
}

export default withStyles(styles)(Dashboard)
