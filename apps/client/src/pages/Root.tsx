import React from 'react';
import { Outlet } from 'react-router-dom';

import MainNavigation from '../components/MainNavigation/MainNavagation';
import Header from '../components/layout/Header/Header';
import AuthContext from '../store/auth-context';

function RootLayout() {
    const [isUserLoggedIn, setIsUserLoggedIn] = React.useState(false);
    
    const userLoggedInHandler = (isUserLoggedIn: boolean) => {
        console.log(isUserLoggedIn, 'isUserLoggedIn on the Root')
        setIsUserLoggedIn(isUserLoggedIn);
    };

    return (
        <AuthContext.Provider value={{
            isLoggedIn: isUserLoggedIn
          }}>
            <Header onUserLoggedIn={userLoggedInHandler}>
                <MainNavigation />
            </Header>
            <Outlet />
        </AuthContext.Provider>
    )
}

export default RootLayout;