import React from 'react';
import styled from 'styled-components';
import { Route, Switch } from 'react-router-dom';
import Helmet from 'react-helmet';
import Home from './pages/Home';
import Type from  './pages/Type';
import Header from './components/Header';
import Footer from './components/Footer';

const StyledApp = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
`;

function App() {
  return (
    <>
      <Helmet>
        <title>Dented Nerd</title>
        <link href="https://fonts.googleapis.com/css?family=Merriweather:300|Raleway:300|Open+Sans+Condensed:300" rel="stylesheet"/>
      </Helmet>
      <Header />
      <StyledApp>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/:type' component={Type} />
        </Switch>
      </StyledApp>
      <Footer />
    </>
  );
}

export default App;
