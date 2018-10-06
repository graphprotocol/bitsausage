import React, { Component } from 'react'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'

import Layout from './pages/Layout/Layout'

const GET_BIDS = gql`
  {
    auctions(last: 1) {
      id
      latestBid {
        amount
      }
      latestBidder
      expirationTime
      bids {
        id
        amount
        bidderAddress
      }
    }
  }
`

class App extends Component {
  render() {
    return (
      <Query query={GET_BIDS}>
        {({ loading, error, data }) => {
          if (loading) return ''
          if (error) return `Error! ${error.message}`
          return <Layout auction={data.auctions[0]} />
        }}
      </Query>
    )
  }
}

export default App
