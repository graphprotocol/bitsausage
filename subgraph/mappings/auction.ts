export function logNewBid(event: LogNewBid): void {
  let auctionID = Auction.bind(event.address)
    .uniqueID()
    .toHex()
  let bidID = concatU256(event.params._timeLeft, event.params._amount).toHex()

  let auction = new Entity()

  auction.setAddress('latestBidder', event.params._latestBidder)
  auction.setString('latestBid', bidID)
  store.set('Auction', auctionID, auction)

  let bid = new Entity()
  bid.setString('id', bidID)
  bid.setU256('amount', event.params._amount)
  bid.setString('auction', auctionID)
  bid.setAddress('bidderAddress', event.params._latestBidder)
  store.set('Bid', bidID, bid)
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

function concatU256(a: U256, b: U256): U256 {
  let result = new Array<u64>()
  for (var i = 0; i < a.length; i++) {
    result[i] = a[i]
  }
  for (var j = 0; j < b.length; j++) {
    result[a.length + j] = b[j]
  }
  return result as U256
}
