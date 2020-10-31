import React from "react";
// import { ApolloClient, InMemoryCache } from '@apollo/client';
import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
  ApolloProvider
} from '@apollo/client';
import {
  setContext
} from '@apollo/client/link/context';
import { getToken } from "./utilities/localstorage";
// const client = new ApolloClient({
//   uri: 'http://hussleserver.herokuapp.com/graphql',
//   cache: new InMemoryCache()
// });

const httpLink = createHttpLink({
  uri: 'https://hussleserver.herokuapp.com/graphql',

});
const authLink = setContext((_, {
  headers
}) => {
  // get the authentication token from local storage if it exists
  const token = "here"
  // console.log(token)
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    }
  }
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});
// ReactDOM.render( <
//   ApolloProvider client = {
//     client
//   } >
//   <
//   BrowserRouter >
//   <
//   App / >
//   </BrowserRouter> 
//   </ApolloProvider>,
//   document.getElementById("root")
// );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
export {
  client
}