import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import classnames from 'classnames'
import Web3 from 'web3';


import contractJson from './Auction.json'
import styles from './Layout.styles'
import Button from '../Button/Button'
import RowItem from '../RowItem/RowItem'

class Layout extends React.Component {
  constructor(props) {
    super(props)
    this.state = { bid: 0, data: [] }


    this.handleOpenClick = this.handleOpenClick.bind(this)
    this.handleCloseClick = this.handleCloseClick.bind(this)
    this.onBidChange = this.onBidChange.bind(this)
  }

  componentDidMount() {
    const web3 = new Web3(Web3.givenProvider || "http://localhost:8545");
    web3.eth.getAccounts().then((data) => this.setState({data: data}));
  }

  handleOpenClick() {
    const web3 = new Web3(Web3.givenProvider || "http://localhost:8545");
    const account0 = this.state.data[0]

    let myContract = new web3.eth.Contract(contractJson.abi, '0xAeB9Ad0EaeE1Ea1B47f181c8C2e7b5927b25106c');
    myContract.methods.bid().send({'from': account0, value: this.state.bid}).then(()=>{
    if (this.state.bid === 14) {
      document.querySelector('.overlay').style.display = 'block'
      window.scroll({
        top: 0,
        behavior: 'smooth'
      })
    }
    })


  }

  handleCloseClick() {
    document.querySelector('.overlay').style.display = 'none'
    const bid = document.querySelector('#bid').offsetTop
    window.scroll({
      top: bid,
      behavior: 'smooth'
    })
  }

  onBidChange(e) {
    this.setState({ bid: parseInt(e.target.value) })
  }

  render() {
    const { classes } = this.props

    return (
      <Grid className={classes.root}>
        <div className={classnames(classes.overlay, 'overlay')}>
          <Grid className={classes.congrats}>
            <Grid>congrats, The</Grid>
            <Grid className={classes.big}>Bratwurst</Grid>
            <Grid>is yours</Grid>
          </Grid>
          <img src="/images/Bratwurst.png" />
          <Button
            className={classes.bidMore}
            wrapper="big"
            variant="bigInner"
            text="BID MORE"
            onClick={this.handleCloseClick}
          />
        </div>
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
          from brät-, finely chopped meat, and Wurst, sausage, although in
          modern German it is often associated with the verb braten, to pan fry
          or roast.
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
          id="bid"
        >
          <Grid item>
            <label className={classes.label}>
              <input
                name="bid"
                type="number"
                placeholder="0"
                onChange={this.onBidChange}
              />
              <span>ETH</span>
            </label>
          </Grid>
          <Grid item>
            <Button text="BID" onClick={this.handleOpenClick} />
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
  }
}

export default withStyles(styles)(Layout)
