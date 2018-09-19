import React, { Component } from 'react'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'

import Layout from './pages/Layout/Layout'

// const GET_BIDS = gql`
//   {
//     bids {
//       id
//       amount
//       timestamp
//       bidder {
//         id
//       }
//       auction {
//         id
//       }
//     }
//   }
// `

const GET_BIDS = gql`
  {
    users {
      id
      name
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

          return <Layout data={data} />
        }}
      </Query>
    )
  }
}

export default App
