import './index.css'
import App from './App'
import ReactDOM from 'react-dom/client'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'

const root = ReactDOM.createRoot(document.getElementById('root'))

const client = new ApolloClient({
  uri: 'https://countries.trevorblades.com/',
  cache: new InMemoryCache
})

root.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
)