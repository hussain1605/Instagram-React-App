import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Post from './components/Post';
import Posts from './components/Posts';

import { ApolloProvider } from "react-apollo"
import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql"
});


 const App = () => {
      return (
        <ApolloProvider client={client}>
          <div className="App">
            <Header />
            <section className="App-main">
              <Posts />

            </section>
          </div>
        </ApolloProvider>
      );
    };
    export default App;






/*import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}*/
