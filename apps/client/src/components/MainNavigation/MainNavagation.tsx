import { BrowserRouter as Router, Link } from 'react-router-dom';

import { MenuList, MenuListItem } from './styles';

function MainNavigation() {
    return (
        <nav>
            <MenuList>
                <MenuListItem>
                    <Link to="/">Dashboard</Link>
                </MenuListItem>
                <MenuListItem>
                    <Link to="/flows-map">Flowsmap</Link>
                </MenuListItem>
                <MenuListItem>
                    <Link to="/route-calculator">Route Calculator</Link>
                </MenuListItem>
                <MenuListItem>
                    <Link to="/availability">Availability</Link>
                </MenuListItem>
                <MenuListItem>
                    <Link to="/download">Download</Link>
                </MenuListItem>
            </MenuList>
        </nav>
    );
}

export default MainNavigation;