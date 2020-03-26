import { useOktaAuth } from '@okta/okta-react';
import React, { useState, useEffect } from 'react';
//import { Button, Header } from 'semantic-ui-react';

const Home = () => {
  const { authState, authService } = useOktaAuth();
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    if (!authState.isAuthenticated) {
      // When user isn't authenticated, forget any user info
      setUserInfo(null);
    } else {
      authService.getUser().then((info) => {
        setUserInfo(info);
      });
    }
  }, [authState, authService]); // Update if authState changes

  const login = async () => {
    authService.login('/');
  };
  const logout = async () => {
    authService.logout('/');
}

  if (authState.isPending) {
    return (
      <div>Loading...</div>
    );
  }

  return (
    <div>
      <div>
        <h2>PKCE Flow w/ Okta Hosted Login Page</h2>

        { authState.isAuthenticated && !userInfo
        && <div>Loading user information...</div>}

        {authState.isAuthenticated && userInfo
        && (
        <div>
          <p>
            Welcome back,
            {userInfo.name}
            !
          </p>
          <p>
            You have successfully authenticated against your Okta org, and have been redirected back to this application.  You now have an ID token and access token in local storage.
          </p>
          <h3>Next Steps</h3>
          <p>Currently this application is a stand-alone front end application.  At this point you can use the access token to authenticate yourself against resource servers that you control.</p>
          <button id="login-button" onClick={logout}>Logout</button>
        </div>
        )}

        {!authState.isAuthenticated
        && (
        <div>
          <p>If you&lsquo;re viewing this page then you have successfully started this React application.</p>
          <p>
            When you click the login button below, you will be redirected to the login page on your Okta org.
            After you authenticate, you will be returned to this application with an ID token and access token.  These tokens will be stored in local storage and can be retrieved at a later time.
          </p>
          <button id="login-button" onClick={login}>Login</button>
        </div>
        )}

      </div>
    </div>
  );
};
export default Home;