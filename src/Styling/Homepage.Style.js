import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavLink = styled(Link)`
    font-size: 35px;
    text-decoration: none;
    color: black;
    margin-left: 25px;
    padding-right: 20px;
`;

export const NavContainer = styled.nav`
    background-color: yellow;
    display: flex;
    justify-content: space-between;
`;

export const ContentContainer = styled.div`
    display: flex;
    justify-content: space-around;
`;
