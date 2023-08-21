import Button from '@mui/material/Button';

import mainLogo from '../../assets/images/main-logo.svg';
import classes from './Header.module.scss';
import global from './Global.module.scss';

function Header({ children }) {
    return (
        <div className={`${classes.header} ${global.container}`}>
            <div className={classes['header__logo']}>
                <img src={mainLogo} alt='logo' />
            </div>
            <div className={classes['header__menu']}>
                {children}
            </div>
            <div className={classes['header__user']}>
                <Button variant="contained">Log in</Button>
            </div>
        </div>
    )
}

export default Header;