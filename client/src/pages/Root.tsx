import { Outlet } from 'react-router-dom';

import MainNavigation from '../components/MainNavigation/MainNavagation';
import Header from '../components/layout/Header/Header';

function RootLayout() {
    return (
        <>
            <Header>
                <MainNavigation />
            </Header>
            <Outlet />
        </>
    )
}

export default RootLayout;