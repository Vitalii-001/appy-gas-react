import styled from 'styled-components';

import { Container } from '../../../styles/GlobalStyles';

export const HeaderWrapper = styled.div`
box-shadow: 0 0 12px rgba(0,0,0,0.1);
`;

export const HeaderContainer = styled(Container)`
display: flex;
justify-content: space-between;
padding: 0 20px;
height: 72px;
`;

export const HeaderLogo = styled.div`
display: flex;
align-items: center;
`;

export const HeaderMenu = styled.div`
display: flex;
align-items: center;
`;

export const HeaderUser = styled.div`
display: flex;
align-items: center;
`;