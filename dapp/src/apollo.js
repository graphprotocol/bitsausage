import ApolloClient from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import fetch from 'unfetch'

const endpoints = {
  simple: 'https://us1.prisma.sh/nevena-djaja/hello-hacker/dev',
  ws: 'wss://us1.prisma.sh/nevena-djaja/hello-hacker/dev'
}

export const apolloClient = new ApolloClient({
  link: new HttpLink({ uri: endpoints.simple, fetch: fetch }),
  cache: new InMemoryCache()
})
