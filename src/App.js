import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Security, LoginCallback, SecureRoute } from '@okta/okta-react';
import Home from './Home2';

// const config = {
//   issuer: 'https://dev-359461.okta.com/oauth2/default',
//   redirectUri: window.location.origin + '/implicit/callback',
//   clientId: '0oa4pollfSd5CeNVe4x6',
//   pkce: true
// };
//package.json can be added this to make it https
//    // "start": "set HTTPS=true&&react-scripts start",



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