import React from 'react';
import Helmet from 'react-helmet';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyle } from './theme';
import App from './App';
import * as serviceWorker from './serviceWorker';

render(
  <BrowserRouter>
    <Helmet>
      <title>Dented Nerd</title>
      <link href="https://fonts.googleapis.com/css?family=Merriweather:300|Raleway:300|Open+Sans+Condensed:300" rel="stylesheet"/>
    </Helmet>
    <GlobalStyle />
    <h1>Dented Nerd</h1>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
