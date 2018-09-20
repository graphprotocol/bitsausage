import React from 'react'
import { Grid } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import Web3 from 'web3'
import classnames from 'classnames'

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
      name: '', // props.match.params.name,
      description: wursts.filter(wurst => wurst.name === 'Bratwurst')[0]
        .description,
      leadingBid: 0,
      auctionSecLeft: 0,
      type: 'common',
      latestBidder: ''
    }
    this.handleBidClick = this.handleBidClick.bind(this)
    this.handleCloseClick = this.handleCloseClick.bind(this)
    this.onBidChange = this.onBidChange.bind(this)
    this.formatTimeLeft = this.formatTimeLeft.bind(this)
  }

  componentDidMount() {
    window.scrollTo(0, 0)

    const web3 = new Web3(Web3.givenProvider || 'http://localhost:8545')
    this.setState({ web3: web3 })
    web3.eth.getAccounts().then(data => {
      this.setState({ data: data })
    })

    if (web3.currentProvider.isMetaMask !== true) {
      return this.setState({ noMetamask: true })
    }

    let auctionContract = new web3.eth.Contract(
      contractJson.abi,
      '0xAeB9Ad0EaeE1Ea1B47f181c8C2e7b5927b25106c'
    )

    this.setState({ auctionContract: auctionContract })

    auctionContract.methods
      .sausageName()
      .call()
      .then(name => this.setState({ name: name }))

    auctionContract.methods
      .auctionSecondsLeft()
      .call()
      .then(auctionSecLeft => this.setState({ auctionSecLeft: auctionSecLeft }))
  }

  handleBidClick() {
    const account0 = this.state.data[0]

    this.state.auctionContract.methods
      .latestBid()
      .call()
      .then(latestBid => this.setState({ leadingBid: parseInt(latestBid, 10) }))

    this.state.auctionContract.methods
      .latestBidder()
      .call()
      .then(latestBidder => this.setState({ latestBidder: latestBidder }))

    this.state.auctionContract.methods
      .bid()
      .send({ from: account0, value: this.state.bid })
      .then(
        data => {
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

  formatTimeLeft(time) {
    const minutes = Math.floor(time / 60)
    const seconds = time - minutes * 60
    return { minutes, seconds }
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
          auctionSecLeft={this.formatTimeLeft(this.state.auctionSecLeft)}
          onBidChange={this.onBidChange}
          handleBidClick={this.handleBidClick}
          type={this.state.type}
        />
        {this.state.noMetamask && (
          <div className={classes.message}>
            You need to install{' '}
            <a
              href="https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn"
              target="_blank"
            >
              MetaMask
            </a>{' '}
            to proceed
          </div>
        )}
        {this.state.latestBidder.length > 0 &&
          (this.state.data[0] === this.state.latestBidder ? (
            <div className={classes.message}>You have the leading bid</div>
          ) : (
            <div className={classnames(classes.message, classes.lostBid)}>
              Bidder 1 overbid you
            </div>
          ))}
        <img src="/images/divider-big.svg" alt="divider" />
        <BidStats
          title={this.state.name}
          pillText="100 bids"
          rows={[1, 2, 3, 4]}
        />
      </Grid>
    )
  }
}

export default withStyles(styles)(Landing)
