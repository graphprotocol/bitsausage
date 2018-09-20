module.exports = function(callback) {
  const sausageArtifacts = require('./build/contracts/SausageTokens.json')
  const auctionArtifacts = require('./build/contracts/Auction.json')
  const contract = require('truffle-contract')
  const SausageContract = contract(sausageArtifacts)
  SausageContract.setProvider(web3.currentProvider)

  const AuctionContract = contract(auctionArtifacts)
  AuctionContract.setProvider(web3.currentProvider)

  console.log('INITIALIZING...')
  sausageID = 1234
  sausageSymbol = 'Bratwurst'
  description = 'Bratwurst - RARE'
  auctionAddr = '0xAeB9Ad0EaeE1Ea1B47f181c8C2e7b5927b25106c'
  SausageInstance = undefined
  AuctionInstance = undefined

  SausageContract.deployed().then(inst => {
    SausageInstance = inst
    SausageInstance.mintUniqueTokenTo(auctionAddr, sausageID, description)
  })

  AuctionContract.deployed().then(inst => {
    AuctionInstance = inst
    AuctionInstance.startAuction(500)
  })

  console.log('AUCTION STARTED')
  callback()
}
