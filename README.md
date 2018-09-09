# Bitsausage Cryptocurrency and Dapp

This repo consists of three parts:

- Solidity contracts for the bitsausage auction
- Subgraph for the backend of the Dapp
- Dapp for the UI

## Contents of the Dapp

- This project is set up using `react-scripts`
- We use [Prisma](https://www.prisma.io/) to mock a GraphQL server. Connection to the Prisma endpoint is achieved though Apollo Client in [`src/apollo.js`](src/apollo.js).
- Example components can be found in [`src/components/`](src/components/)
- An example GraphQL schema can be found in [`src/domain/schema.graphql`](src/domain/schema.graphql)

## Build and run the Dapp

1.  cd into the dapp folder before running the steps below
2.  Run `yarn` to install dependencies.
3.  Run `yarn start` to serve the example components on http://localhost:3000
4.  Run `yarn build` to build the code for production

## License
