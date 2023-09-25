import Button from '@mui/material/Button';

import { Link } from 'react-router-dom';

import mainLogo from '../../../assets/images/main-logo.svg';

import { HeaderContainer, HeaderWrapper, HeaderLogo, HeaderMenu, HeaderUser } from './styles';

function Header(props: any) {
    return (
        <HeaderWrapper>
            <HeaderContainer>
                <HeaderLogo>
                    <img src={mainLogo} alt='logo' />
                </HeaderLogo>
                <HeaderMenu>
                    {props.children}
                </HeaderMenu>
                <HeaderUser>
                    <Button variant="contained">
                        <Link to="/sign-in">Sign in</Link>
                    </Button>
                </HeaderUser>
            </HeaderContainer>
        </HeaderWrapper>
    )
}

export default Header;