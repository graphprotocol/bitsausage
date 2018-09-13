export function logNewBid(event: LogNewBid): void {
  let bid = new Entity()
  let auctionID = Auction.bind(event.address, event.blockHash).uniqueID()

  bid.setAddress('latestBidder', event.params._latestBidder)
  bid.setU256('amount', event.params._amount)
  bid.setU256('timeLeft', event.params._timeLeft)
  bid.setString('name', event.params._name)
  bid.setU256('auction', auctionID)

  store.set('Bid', event.params._name, bid)
}
export function logAuctionOpen(event: LogAuctionOpen): void {
  let auction = new Entity()

  auction.setString('name', event.params._name)
  auction.setAddress('tokenAddress', event.params._tokenAddress)
  auction.setU256('EndTime', event.params._EndTime)
  auction.setU256('uniqueID', event.params._uniqueID)

  store.set('Auction', event.params._uniqueID.toString(), auction)
}
export function logAuctionClosed(event: LogAuctionClosed): void {
  let auction = new Entity()

  auction.setString('name', event.params._name)
  auction.setAddress('tokenAddress', event.params._tokenAddress)
  auction.setU256('timeFinished', event.params._timeFinished)
  auction.setU256('uniqueID', event.params._uniqueID)
  auction.setAddress('winner', event.params._winner)
  auction.setU256('finalBid', event.params._finalBid)

  store.set('Auction', event.params._uniqueID.toString(), auction)
}
