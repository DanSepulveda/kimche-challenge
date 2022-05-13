import './index.css'
import App from './App'
import ReactDOM from 'react-dom/client'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from '@apollo/react-hooks'

const root = ReactDOM.createRoot(document.getElementById('root'))

const client = new ApolloClient({
  uri: 'https://countries.trevorblades.com/'
})

root.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
)