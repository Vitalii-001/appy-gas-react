import React, { useContext } from 'react';

import Button from '@mui/material/Button';

import mainLogo from '../../../assets/images/main-logo.svg';

import { HeaderContainer, HeaderWrapper, HeaderLogo, HeaderMenu, HeaderUser } from './styles';
import SignIn from '../../Auth/SignInForm';
import AuthContext from '../../../store/auth-context';

function Header(props: any) {
    const ctx = useContext(AuthContext);
    const [openSignIn, setOpenSignIn] = React.useState(false);
    const [selectedSignInValue, setSelectedSignInValue] = React.useState({ email: '', password: '' });

    const handleSignInOpen = () => {
        setOpenSignIn(true);
    };

    const handleClose = ({ email, password }: { email: string; password: string; }) => {
        const isUserLoggedIn = !!(email && password);
        
        setOpenSignIn(false);
        setSelectedSignInValue({ email, password });

        props.onUserLoggedIn(isUserLoggedIn);
      };

    return (
        <AuthContext.Provider value={{
            isLoggedIn: !!selectedSignInValue.email
          }}>
            <HeaderWrapper>
                    <HeaderContainer>
                    <HeaderLogo>
                        <img src={mainLogo} alt='logo' />
                    </HeaderLogo>
                    <HeaderMenu>
                        {props.children}
                    </HeaderMenu>
                    <HeaderUser>
                        {ctx.isLoggedIn ? (
                            <span>{selectedSignInValue.email}</span>
                        ) : (
                            <Button variant="contained" onClick={handleSignInOpen}>
                                Sign in
                            </Button>    
                        )}
                    
                        <SignIn
                        selectedValue={selectedSignInValue}
                        open={openSignIn}
                        onClose={handleClose}
                        >
                        </SignIn>
                    </HeaderUser>
                </HeaderContainer>
            </HeaderWrapper>    
        </AuthContext.Provider>
    )
}

export default Header;