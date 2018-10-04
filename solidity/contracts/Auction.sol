pragma solidity ^0.4.24;

import "./SausageTokens.sol";

// Steps
  // THIS CONTRACT:    create the auction contract for the specific token (constructor id value)
  // SAUSAGE CONTRACT: do the transfer of the sausage to this contract i.e mintUniqueTokenTo()
  // THIS CONTRACT:    call startAuction()
  // then start bidding


//TODO: Who actually withdraws the ether ? The manager of the Auction contract has no way to withdraw their ether! Its stuck in the auction contract

contract Auction {
    address public manager;
    uint256 public latestBid;
    address public latestBidder;
    uint public auctionSecondsLeft;
    address public erc721TokenAddr;
    uint256 public uniqueID;
    bool public auctionLive;
    string public sausageName;
  
    constructor(address _manager, uint256 id, string name, address _erc721TokenAddr) public 
    {
        manager = _manager;
        erc721TokenAddr = _erc721TokenAddr;
        uniqueID = id;
        sausageName = name;
    }

    event LogNewBid(
        address _latestBidder,
        uint256 _amount,
        uint256 _timeLeft,
        string  _name
    );

    event LogAuctionOpen(
        string _name, //CURRY = currywurst , GOLD = goldwurst , etc. 
        address _tokenAddress,
        uint256 _EndTime,
        uint256 _uniqueID

    );

    event LogAuctionClosed(
        string _name, //CURRY = currywurst , GOLD = goldwurst , etc. 
        address _tokenAddress,
        uint256 _timeFinished,
        uint256 _uniqueID,  
        address _winner,
        uint256 _finalBid
    );
 
    function startAuction(uint auctionSeconds) public restricted {
        auctionSecondsLeft = auctionSeconds + now;
        auctionLive = true;

        emit LogAuctionOpen(sausageName, erc721TokenAddr, auctionSecondsLeft, uniqueID);
    }

    function bid() public payable {
        require(auctionSecondsLeft > now, "Auction must be live");
        require(msg.value > latestBid, "Bid must be larger than current bid");

        if (latestBidder != 0x0) {
            latestBidder.transfer(latestBid);
        }

        latestBidder = msg.sender;
        latestBid = msg.value;

        //TODO: Would be nice if we could make a more dynamic bidding app, that actually lets users interact with in. This just adds 10sec. very basic 
        auctionSecondsLeft = auctionSecondsLeft + 10;
        emit LogNewBid(latestBidder, latestBid, auctionSecondsLeft, sausageName);

    }

    // Can only be called when the auction has ended 
    function winnerWithdraw() public {
        require(auctionSecondsLeft < now, "Auction is not over");
        require(auctionLive == true, "You must start auction before you can withdraw");
        SausageTokens st = SausageTokens(erc721TokenAddr);

        //TODO: Conifrm this works
        st.transferFrom(this, latestBidder, uniqueID);

        emit LogAuctionClosed(sausageName, erc721TokenAddr, auctionSecondsLeft, uniqueID, latestBidder, latestBid);

    }
 
    modifier restricted() {
        require(msg.sender == manager, "Must be auction owner to call");
        _;
    }
}