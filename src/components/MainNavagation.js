import { BrowserRouter as Router, Link } from 'react-router-dom';
import classes from './MainNavigation.module.scss';

function MainNavigation() {
    return (
        <nav>
            <ul className={classes['menu-list']}>
                <li>
                    <Link to="/" className={classes['menu-list__link']}>Dashboard</Link>
                </li>
                <li>
                    <Link to="/flows-map" className={classes['menu-list__link']}>Flowsmap</Link>
                </li>
            </ul>
        </nav>
    );
}

export default MainNavigation;