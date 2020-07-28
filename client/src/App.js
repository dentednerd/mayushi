import React from 'react';
import styled from 'styled-components';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';

const StyledApp = styled.div`
  width: 1024px;
  margin: 0 auto;
`;

function App() {
  return (
    <StyledApp>
      <Switch>
        <Route exact path='/' component={Home} />
      </Switch>
    </StyledApp>
  );
}

export default App;
