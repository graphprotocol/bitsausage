
pragma solidity ^0.4.24;

import "../node_modules/zeppelin-solidity/contracts/token/ERC721/ERC721Token.sol";
import "./Auction.sol";


contract SausageTokens is ERC721Token {
    // AuctionContractCode acc;
    
    constructor (string _name, string _symbol) public
        ERC721Token(_name, _symbol)
    {
    }

    /**
    * Custom accessor to create a unique token
    */
    function mintUniqueTokenTo(
        address _to,
        uint256 _tokenId,
        string  _tokenURI
    ) public
    {
        super._mint(_to, _tokenId);
        super._setTokenURI(_tokenId, _tokenURI);
    }

    //TODO: Create all Auctions through here. Right now we do it manually. This will be smoother. It will give us control over id's too (see next line
    //TODO: make Token IDS to be unique. By sha3 hash. so they can be stored in the graph. right now we just hardcode 1234 as the ID in migrations 
    function newAuction(uint256 id, string name) public{
        // address newContract = 
        new Auction(msg.sender, id, name, this);
        // acc = newContract;
    }

}