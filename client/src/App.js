import React from 'react';
import styled from 'styled-components';
import { Route, Switch } from 'react-router-dom';
import Helmet from 'react-helmet';
import Home from './pages/Home';
import Type from  './pages/Type';
import Tag from './pages/Tag';
import Header from './components/Header';
import Footer from './components/Footer';

const AppContainer = styled.div`
  position: relative;
  min-height: 100vh;
  margin-bottom: 0;
  padding-bottom: 1.75rem;
`;

const SwitchContainer = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
`;

function App() {
  return (
    <AppContainer>
      <Helmet>
        <title>Dented Nerd</title>
        <link href="https://fonts.googleapis.com/css?family=Merriweather:300|Raleway:300|Open+Sans+Condensed:300" rel="stylesheet"/>
      </Helmet>
      <Header />
      <SwitchContainer>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/posts/:type' component={Type} />
          <Route path='/tag/:tag' component={Tag} />
        </Switch>
      </SwitchContainer>
      <Footer />
    </AppContainer>
  );
}

export default App;
