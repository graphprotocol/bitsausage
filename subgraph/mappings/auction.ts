export function logNewBid(event: LogNewBid): void {
  let auction = new Entity()
  let auctionID = Auction.bind(event.address).uniqueID()

  auction.setAddress('latestBidder', event.params._latestBidder)
  auction.setString('id', auctionID.toHex())

  let bid = new Entity()
  bid.setU256('amount', event.params._amount)
  bid.setString('auction', auctionID.toHex())

  store.set('Bid', auctionID.toHex(), bid)
}

export function logAuctionOpen(event: LogAuctionOpen): void {
  let token = new Entity()
  let tokenID = event.params._uniqueID.toHex()
  token.setString('id', tokenID)
  token.setString('type', event.params._name)

  let auctionID = event.params._uniqueID.toHex()
  let auction = new Entity()
  auction.setString('id', auctionID)
  auction.setString('token', tokenID)
  auction.setU256('expirationTime', event.params._EndTime)

  store.set('Auction', event.params._uniqueID.toHex(), auction)
  store.set('SausageToken', event.params._uniqueID.toHex(), token)
}

export function logAuctionClosed(event: LogAuctionClosed): void {
  let auction = new Entity()
  let auctionID = event.params._uniqueID.toHex()

  auction.setU256('id', event.params._uniqueID)
  auction.setAddress('latestBidder', event.params._winner)
  auction.setU256('latestBid', event.params._finalBid)

  store.set('Auction', event.params._uniqueID.toHex(), auction)
}
