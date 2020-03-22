import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Security, LoginCallback } from '@okta/okta-react';
import Home from './Home';

const config = {
  issuer: 'https://dev-359461.okta.com/oauth2/default',
  redirectUri: window.location.origin + '/implicit/callback',
  clientId: '0oa4pollfSd5CeNVe4x6',
  pkce: true
};

const App = () => { 
  return (
    <Router>
      <Security {...config}>
        <Route path='/' exact={true} component={Home}/>
        <Route path='/implicit/callback' component={LoginCallback}/>
      </Security>
    </Router>
  );
};

export default App;