import styled from 'styled-components';
import { Link } from 'react-router-dom';

// Hex colors

// #5B8266
// #2F2504
// #EAB464
// #A7754D Original background color of NavContainer and ContentContainer
// #403233

export const NavLink = styled(Link)`
    font-size: 35px;
    text-decoration: none;
    color: black;
    margin-left: 25px;
    padding-right: 20px;
`;

export const NavContainer = styled.nav`
    background-color: #ffe4c4;
    display: flex;
    color: black;
    justify-content: space-between;
`;

export const ContentContainer = styled.div`
    display: flex;
    background-color: #ffe4c4;
    justify-content: space-evenly;
`;

export const DiceImage = styled.img`
    padding-top: 30px;
    max-width: 400px;
    margin-bottom: 50px;
`;

export const ElementDiv = styled.div`
    max-width: 400px;
    /* margin-top: 40px; */
    /* color: #08415c; */
    color: black;
`;

export const PurchaseButton = styled.button`
    height: 50px;
    width: 120px;
    background-color: #eab464;
    border: 1px solid #2f2504;
    color: black;
    margin-right: 30px;
    cursor: pointer;
`;

// #5B8266
// #2F2504
// #EAB464
// #A7754D
// #403233
