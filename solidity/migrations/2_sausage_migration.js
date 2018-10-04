const SausageTokens = artifacts.require('./SausageTokens.sol')
const Auction = artifacts.require('./Auction.sol')

const Web3 = require('web3')

module.exports = async function(deployer, network, accounts) {
  let web3;
  let sausageID = 1234
  let sausageSymbol = 'Bratwurst'
  let sausageDescription = 'Bratwurst - Rare'
  let sausageInstance
  let managerAccount;

  if( network === "development"){
    web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'))
    managerAccount = accounts[0]

  }

  else if (network === "kovan") {
    // do something similar 
  
  }
  return  deployer.deploy(SausageTokens, 'SausageTokens', 'Bratwurst', {from: managerAccount}).then(async ()  => {
    sausageInstance = await SausageTokens.deployed()
    let sausageAddress = sausageInstance.address
    await deployer.deploy(Auction, managerAccount, sausageID, sausageSymbol, sausageAddress, {from: managerAccount})
    let auctionInstance = await Auction.deployed()
    let auctionAddress = auctionInstance.address
    await sausageInstance.mintUniqueTokenTo(auctionAddress, sausageID, sausageDescription)
    await auctionInstance.startAuction(1000, {from: managerAccount}) //auction has 1000 seconds
    
    let originalBid = 10 
    await auctionInstance.bid({from: managerAccount, value: originalBid}) //note, value is 10 wei, or 10^-18 ether

    let managerAddr = await auctionInstance.manager.call()
    let erc721ContractAddr = await auctionInstance.erc721TokenAddr.call()

    let firstBid = await auctionInstance.latestBid.call()
    let firstBidder = await auctionInstance.latestBidder.call()
    let secondsAuction = await auctionInstance.auctionSecondsLeft.call()
    let uniqueID = await auctionInstance.uniqueID.call()
    let sausageType = await auctionInstance.sausageName.call()

    let secondsNow = Math.round((new Date()).getTime() / 1000);
    let secondsLeft = secondsAuction - secondsNow
    console.log(`************* MANAGER ADDRESS      : ${managerAddr} `)
    console.log(`************* ERC721 TOKEN ADDRESS : ${erc721ContractAddr} `)
    console.log("\n")
    console.log(`************* MIGRATIONS SUCCESSFULLY LAUNCHED AUCTION. SEE BELOW *************`)
    console.log("\n")
    console.log(`************* AUCTION ADDRESS      : ${auctionAddress} `)
    console.log(`************* FIRST BID            : ${firstBid} `)
    console.log(`************* FIRST BIDDER         : ${firstBidder} `)
    console.log(`************* AUCTION SECONDS LEFT : ${secondsLeft} `)
    console.log(`************* UNIQUE SAUSAGE ID    : ${uniqueID} `)
    console.log(`************* SAUSAGE TYPE         : ${sausageType} `)

    console.log(`************* BELOW WE RUN A SCRIPT TO MAKE 100 BIDS SO THE SUBGRAPH HAS SOMETHING TO TRACK! *************`)

    // note, each bid adds 10 seconds to the auction length. so 1000 seconds will be added 
    let bidderCounter = originalBid
    let bidderNum = 1;
    for (let i =1; i <51; i ++) {
      let bidder_1_value = bidderCounter + 1
      let bidder_2_value = bidder_1_value + 1
      bidderCounter = bidder_2_value

      await auctionInstance.bid({from: accounts[1], value: bidder_1_value}) //note, value is 10 wei, or 10^-18 ether
      await auctionInstance.bid({from: accounts[2], value: bidder_2_value}) //note, value is 10 wei, or 10^-18 ether

      console.log(`BID ${bidderNum}: ${bidder_1_value}`)
      console.log(`BID ${bidderNum+1}: ${bidder_2_value}`)
      bidderNum += 2
    }

    //note, we will not bid here, so the token winner ends up being 0x00000000...
    console.log(`************* NEXT WE WILL MAKE AN AUCTION THAT ENDS RIGHT AWAY, TO GET event LogAcountClosed() TO TEST THE GRAPH *************`)
    let sausageID2 = 1111
    let sausageSymbol2 = 'CurryWurst'
    let sausageDescription2 = 'CurryWurst - Gold'

    //updates the deployerr to the new Auction contract
    await deployer.deploy(Auction, managerAccount, sausageID2, sausageSymbol2, sausageAddress, {from: managerAccount})

    let auctionInstance2 = await Auction.deployed()
    let auctionAddress2 = auctionInstance2.address
    console.log(`**********************************************TEST 2***********************************`)
    console.log(`************* AUCTION ADDRESS 2      : ${auctionAddress2} `)

    await sausageInstance.mintUniqueTokenTo(auctionAddress2, sausageID2, sausageDescription2)
    let tokenOwner = await sausageInstance.ownerOf(sausageID2) 
    console.log("NEW TOKEN OWNER IS AUCTION: ", tokenOwner)
    // if (tokenOwner === auctionAddress2) console.log("TOKEN TRANSFERRED TO AUCTION")

    await auctionInstance.startAuction(1, {from: managerAccount}) //auction has 0 seconds, meaning it should be endable instantly 
    
    //need to pass some timeout function here. getting error auction not over
    // setTimeout(async () => { await auctionInstance.winnerWithdraw({from: managerAccount}), 10000, ''})
    // await auctionInstance.winnerWithdraw({from: managerAccount})
    // tokenOwner = await sausageInstance.ownerOf(sausageID2) 
    // console.log("NEW OWNER: ", tokenOwner)
    // if (tokenOwner === auctionAddress2) console.log("TOKEN TRANSFERRED TO 0x00000 addr successfully ")

  })
}