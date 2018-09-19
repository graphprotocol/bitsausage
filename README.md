# Bitsausage Cryptocurrency and Dapp

This repo consists of three parts:

- Solidity contracts for the Bitsausage auction
- Subgraph for the backend of the Dapp
- Dapp for the UI

## Contents of the Dapp

- This project is set up using `react-scripts`
- We use [Prisma](https://www.prisma.io/) to mock a GraphQL server. Connection to the Prisma endpoint is achieved though Apollo Client in [`src/apollo.js`](src/apollo.js).
- Example components can be found in [`src/components/`](src/components/)
- An example GraphQL schema can be found in [`src/domain/schema.graphql`](src/domain/schema.graphql)

## Installation

1.  Truffle 5 beta:

    - `$ npm uninstall -g truffle` (or `$ yarn global remove truffle`)

    - `$ npm install -g truffle@beta` (or `$ yarn global add truffle@beta`)

2.  ganache-cli

    - `$ npm install -g ganache-cli` (or `$ yarn global add ganache-cli`)

## Development

Open 7 terminal tabs, and follow the steps in each tab:

1.  Run `$ ganache-cli -m hi`
2.  Make sure you are inside of the solidity folder and run `$ truffle compile` followed by `$ truffle migrate`
3.  Make sure you are inside of the solidity folder again, and run `$ truffle console --network development`.
    Once you are in the console, run the following:

```
  > sausageID = 1234
  > sausageSymbol = 'Bratwurst'
  > description = 'Bratwurst - RARE'
  > auctionAddr = '0xAeB9Ad0EaeE1Ea1B47f181c8C2e7b5927b25106c'
  > SausageTokens.deployed().then(inst => { SausageInstance = inst})
  > SausageInstance.mintUniqueTokenTo(auctionAddr, sausageID, description)
  > Auction.deployed().then(inst => { AuctionInstance = inst})
  > AuctionInstance.startAuction(1000)
```

4.  Make sure you are inside of the dapp folder and then you can run the following:

    - `yarn` to install dependencies
    - `yarn start` to serve the UI code on http://localhost:3000

5.  Run `$ ipfs daemon`

6.  Make sure you are inside of the subgraph folder, and run `yarn` followed by `yarn build-ipfs`. It should output the subgraph ID.

7.  Go to the `graph-node` repo that you cloned, and pull from the newest `master` branch. Run the following command using the subgraph ID from the previous step:

```
cargo run -p graph-node --release -- \
  --postgres-url postgresql://USERNAME@localhost:5432/bitsausage-subgraph \
  --ethereum-rpc testnet:http://127.0.0.1:8545 \
  --ipfs 127.0.0.1:5001 \
  --subgraph SUBGRAPH_ID
```

This will spin up a GraphQL interface at `http://localhost:8000` so you can run your queries against the blockchain.

## Build the Dapp

Run `yarn build` to build the code for production

## License

Copyright © 2018 Graph Protocol, Inc.

Licensed under the [MIT License](LICENSE).
