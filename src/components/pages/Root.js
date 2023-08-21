import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';

import MainNavigation from '../MainNavagation';
import Header from '../layout/Header';

function RootLayout() {
    return (
        <Fragment>
            <Header>
                <MainNavigation />
            </Header>
            <Outlet />
        </Fragment>
    )
}

export default RootLayout;