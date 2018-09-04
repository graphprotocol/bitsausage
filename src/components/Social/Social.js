import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Grid } from '@material-ui/core'

import styles from './Social.styles'
import twitter from './twitter.svg'
import discord from './discord.svg'
import github from './github.svg'
import telegram from './telegram.svg'

const Social = ({ className }) => (
  <Grid container justify="center" spacing={24} className={className}>
    <Grid item>
      <a href="https://twitter.com/graphprotocol" target="_blank">
        <img src={twitter} />
      </a>
    </Grid>
    <Grid item>
      <a href="https://discordapp.com/invite/vtvv7FP" target="_blank">
        <img src={discord} />
      </a>
    </Grid>
    <Grid item>
      <a href="https://github.com/graphprotocol" target="_blank">
        <img src={github} />
      </a>
    </Grid>
    <Grid item>
      <a href="http://t.me/graphprotocol" target="_blank">
        <img src={telegram} />
      </a>
    </Grid>
  </Grid>
)

export default withStyles(styles)(Social)
