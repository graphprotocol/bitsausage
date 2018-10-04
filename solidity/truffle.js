const HDWalletProvider = require("truffle-hdwallet-provider");

require('babel-register')
require('babel-polyfill')

module.exports = {
  networks: {
    development: {
      host: '127.0.0.1',
      port: 8545,
      network_id: '*', // Match any network id,
      gas: 6000000
    },
    parityDevChain: {
      host: '127.0.0.1',
      port: 7545, //MUST PASS THIS TO THE PARITY COMMAND
      network_id: '*', // Match any network id,
      gas: 6000000
    },
    ropsten: {
      provider: () => {
        // So this is kinda inconvienient. You have to store a 12 word seed phrase on your comupter
        // This is to avoid exposing the 12 word phrase. otherwise someone can steal all your test ether
        // don't ever share a real metamask account with real ether with your metamask that you test with 
        
        // FIXME: TRY TO FIND ANOTHER WAY TO DO THIS
        // Who would be good? aragon, status, maker, check these
        return new HDWalletProvider(require('fs').readFileSync('~/Desktop/the-graph/work-metmask-12-word/.privkey').toString(), "https://ropsten.infura.io/")
      },
      network_id: '3', // Match any network id
      gas: 4500000,
      gasPrice: 150000000000
    },
    kovan: {
      provider: () => {

        // FIXME: TRY TO FIND ANOTHER WAY TO DO THIS
        return new HDWalletProvider(require('fs').readFileSync('./privKey').toString(), "https://kovan.infura.io/")
      },
      network_id: '42',
      gas: 7900000,
      gasPrice: 10000000000
    },
    solc: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
}
}
