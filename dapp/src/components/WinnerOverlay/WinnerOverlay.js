import React from 'react'
import { Grid } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import classnames from 'classnames'

import styles from './WinnerOverlay.styles'
import Button from '../Button/Button'

const WinnerOverlay = ({ classes, handleCloseClick }) => (
  <div className={classnames(classes.overlay, 'overlay')}>
    <Grid className={classes.congrats}>
      <Grid>congrats, The</Grid>
      <Grid className={classes.big}>Bratwurst</Grid>
      <Grid>is yours</Grid>
    </Grid>
    <img src="/images/Bratwurst.png" alt="Bratwurst" />
    <Button
      className={classes.bidMore}
      wrapper="big"
      variant="bigInner"
      text="BID MORE"
      onClick={handleCloseClick}
    />
  </div>
)

export default withStyles(styles)(WinnerOverlay)
