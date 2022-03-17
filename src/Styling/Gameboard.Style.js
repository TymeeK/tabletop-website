import styled from 'styled-components';

export const GridContainer = styled.div.attrs(props => ({
    col: props.gridCol,
    row: props.gridRow,
}))`
    display: grid;
    height: 100vh;
    width: 100vw;

    grid-template-columns: repeat(${props => props.col}, 250px);
    grid-template-rows: repeat(${props => props.row}, 250px);
    color: ${props => props.color};
`;
