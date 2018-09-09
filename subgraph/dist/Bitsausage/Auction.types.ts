class LogNewBid extends EthereumEvent {
  get params(): LogNewBidParams {
    return new LogNewBidParams(this);
  }
}

class LogNewBidParams {
  _event: LogNewBid;

  constructor(event: LogNewBid) {
    this._event = event;
  }

  get _latestBidder(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get _amount(): U256 {
    return this._event.parameters[1].value.toU256();
  }

  get _timeLeft(): U256 {
    return this._event.parameters[2].value.toU256();
  }

  get _name(): string {
    return this._event.parameters[3].value.toString();
  }
}

class LogAuctionOpen extends EthereumEvent {
  get params(): LogAuctionOpenParams {
    return new LogAuctionOpenParams(this);
  }
}

class LogAuctionOpenParams {
  _event: LogAuctionOpen;

  constructor(event: LogAuctionOpen) {
    this._event = event;
  }

  get _name(): string {
    return this._event.parameters[0].value.toString();
  }

  get _tokenAddress(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get _EndTime(): U256 {
    return this._event.parameters[2].value.toU256();
  }

  get _uniqueID(): U256 {
    return this._event.parameters[3].value.toU256();
  }
}

class LogAuctionClosed extends EthereumEvent {
  get params(): LogAuctionClosedParams {
    return new LogAuctionClosedParams(this);
  }
}

class LogAuctionClosedParams {
  _event: LogAuctionClosed;

  constructor(event: LogAuctionClosed) {
    this._event = event;
  }

  get _name(): string {
    return this._event.parameters[0].value.toString();
  }

  get _tokenAddress(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get _timeFinished(): U256 {
    return this._event.parameters[2].value.toU256();
  }

  get _uniqueID(): U256 {
    return this._event.parameters[3].value.toU256();
  }

  get _winner(): Address {
    return this._event.parameters[4].value.toAddress();
  }

  get _finalBid(): U256 {
    return this._event.parameters[5].value.toU256();
  }
}

class Auction extends SmartContract {
  static bind(address: Address, blockHash: H256): Auction {
    return new Auction("Auction", address, blockHash);
  }

  sausageName(): string {
    let result = super.call("sausageName", []);
    return result[0].toString();
  }

  auctionSecondsLeft(): U256 {
    let result = super.call("auctionSecondsLeft", []);
    return result[0].toU256();
  }

  manager(): Address {
    let result = super.call("manager", []);
    return result[0].toAddress();
  }

  latestBid(): U256 {
    let result = super.call("latestBid", []);
    return result[0].toU256();
  }

  latestBidder(): Address {
    let result = super.call("latestBidder", []);
    return result[0].toAddress();
  }

  uniqueID(): U256 {
    let result = super.call("uniqueID", []);
    return result[0].toU256();
  }

  auctionLive(): boolean {
    let result = super.call("auctionLive", []);
    return result[0].toBoolean();
  }

  erc721TokenAddr(): Address {
    let result = super.call("erc721TokenAddr", []);
    return result[0].toAddress();
  }
}
