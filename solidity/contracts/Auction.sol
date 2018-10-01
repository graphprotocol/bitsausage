pragma solidity ^0.4.24;

import "./SausageTokens.sol";


// Steps
  // THIS CONTRACT:    create the auction contract for the ID token
  // SAUSAGE CONTRACT: do the transfer of the sausage to this contract
  // THIS CONTRACT:    call startAuction
  // then start bidding !

contract Auction {
    address public manager;
    uint256 public latestBid;
    address public latestBidder;
    uint public auctionSecondsLeft;
    address public erc721TokenAddr;
    uint256 public uniqueID;
    bool public auctionLive;
    string public sausageName;


    constructor(address _manager, uint256 id, string name) public
    {
        manager = _manager;
        erc721TokenAddr = address(0xBf8C02b22ae2bd5D2f3F4775ad365dd97232d305);
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

    function startAuction(uint auctionSeconds) public {
        auctionSecondsLeft = auctionSeconds + now;
        auctionLive = true;

        emit LogAuctionOpen(sausageName, erc721TokenAddr, auctionSecondsLeft, uniqueID);
    }


    // so I will create the Auction contract, and I will grab the address, and then right away send the minted token to there
    // the manager will then also call AUCTIONSTARt. then the token is locked
    // people can then vote, and then once the final winner gets in and wins, this function unlocks
    // this function has access to the SausageToken ABI, and it just does a transfer of the token to the winner addr with msg.sender

    function bid() public payable {
        require(auctionSecondsLeft > now, "Auction must be live");
        require(msg.value > latestBid, "Bid must be larger than current bid");

        if (latestBidder != 0x0) {
            latestBidder.transfer(latestBid);
        }

        latestBidder = msg.sender;
        latestBid = msg.value;
        auctionSecondsLeft = auctionSecondsLeft + 10;
        emit LogNewBid(latestBidder, latestBid, auctionSecondsLeft, sausageName);

    }

    //unlocks when function is ended
    function winnerWithdraw() public {
        require(auctionSecondsLeft < now, "Auction is not over");
        require(auctionLive == true, "You must start auction before you can withdraw");
        SausageTokens st = SausageTokens(erc721TokenAddr);
        st.transferFrom(this, latestBidder, uniqueID);

        emit LogAuctionClosed(sausageName, erc721TokenAddr, auctionSecondsLeft, uniqueID, latestBidder, latestBid);

    }

    modifier restricted() {
        require(msg.sender == manager, "Must be auction owner to call");
        _;
    }
}
