import React, {useState} from 'react';
import { useOktaAuth } from '@okta/okta-react';

const Home2 = () => {
    const { authState, authService } = useOktaAuth();
    const [userInfo, setUserInfo] = useState(null);

    const login = async () => {
        // Redirect to '/' after login
        authService.login('/');
    }

    const logout = async () => {
        // Redirect to '/' after logout
        authService.logout('/');
    }

    if (authState.isPending) {
        return <div>Loading...</div>;
    }

    // if (authState.isAuthenticated && userInfo == null) {
    //     console.log("inside isauth  ::: "+ userInfo);
    //     authService.getUser().then((info) => {
    //         console.log(info);
    //         setUserInfo(info);
    //     });
    // } else {
    //     setUserInfo(null);
    // }
    return authState.isAuthenticated ?
        <>
            <div>
                {
                userInfo &&
                <div><p> Welcome Back, {userInfo.name}</p></div>
                }
            </div>
            <button onClick={logout}>Logout</button>
        </>
        :
        <>
            <button onClick={login}>Login</button>
        </>
        ;
};

export default Home;