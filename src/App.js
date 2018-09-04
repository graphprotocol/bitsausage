import React, { Component } from 'react'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'

import Layout from './components/Layout/Layout'

const GET_USERS = gql`
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
      <Query query={GET_USERS}>
        {({ loading, error, data }) => {
          if (loading) return ''
          if (error) return `Error! ${error.message}`

          return <Layout name={data.users[0].name} />
        }}
      </Query>
    )
  }
}

export default App
