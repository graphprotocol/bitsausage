import React from 'react'
import { Grid } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import Web3 from 'web3'

import contractJson from '../../domain/Auction.json'
import wursts from '../../domain/wursts.json'
import styles from './Landing.styles'
import WurstBid from '../../components/WurstBid/WurstBid'
import WinnerOverlay from '../../components/WinnerOverlay/WinnerOverlay'
import BidStats from '../../components/BidStats/BidStats'

class Landing extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      bid: 0,
      data: [],
      name: props.match.params.name,
      description: wursts.filter(
        wurst => wurst.name === props.match.params.name
      )[0].description,
      leadingBid: 0,
      auctionSecLeft: 0
    }

    window.scrollTo(0, 0)

    this.handleBidClick = this.handleBidClick.bind(this)
    this.handleCloseClick = this.handleCloseClick.bind(this)
    this.onBidChange = this.onBidChange.bind(this)
  }

  componentDidMount() {
    const web3 = new Web3(Web3.givenProvider || 'http://localhost:8545')
    web3.eth.getAccounts().then(data => {
      this.setState({ data: data })
    })
  }

  handleBidClick() {
    const web3 = new Web3(Web3.givenProvider || 'http://localhost:8545')
    const account0 = this.state.data[0]
    console.log('account: ', account0)

    let auctionContract = new web3.eth.Contract(
      contractJson.abi,
      '0xAeB9Ad0EaeE1Ea1B47f181c8C2e7b5927b25106c'
    )
    // debugger
    console.log('Contract: ', auctionContract)
    auctionContract.methods
      .sausageName()
      .call()
      .then(name => this.setState({ name: name }))

    auctionContract.methods
      .auctionSecondsLeft()
      .call()
      .then(auctionSecLeft => this.setState({ auctionSecLeft: auctionSecLeft }))

    auctionContract.methods
      .latestBid()
      .call()
      .then(latestBid => this.setState({ leadingBid: parseInt(latestBid, 10) }))

    auctionContract.methods
      .bid()
      .send({ from: account0, value: this.state.bid })
      .then(
        () => {
          if (this.state.bid === 14) {
            document.querySelector('.overlay').style.display = 'block'
            window.scroll({
              top: 0,
              behavior: 'smooth'
            })
          }
        },
        error => {
          console.log('error: ', error)
        }
      )
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
    this.setState({ bid: parseInt(e.target.value, 10) })
  }

  render() {
    const { classes } = this.props

    return (
      <Grid className={classes.root}>
        <WinnerOverlay handleCloseClick={this.handleCloseClick} />
        <WurstBid
          name={this.state.name}
          description={this.state.description}
          bid={this.state.bid}
          leadingBid={this.state.leadingBid}
          auctionSecLeft={this.state.auctionSecLeft}
          onBidChange={this.onBidChange}
          handleBidClick={this.handleBidClick}
        />
        <img src="/images/divider-big.svg" alt="divider" />
        <BidStats title="Bid history" pillText="100 bids" rows={[1, 2, 3, 4]} />
      </Grid>
    )
  }
}

export default withStyles(styles)(Landing)
