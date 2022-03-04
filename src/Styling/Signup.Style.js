import styled from 'styled-components';

export const PageContainer = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const FormContainer = styled.div`
    padding: 50px;
    box-shadow: 5px 5px 10px 2px #afc0db;
`;

export const FormLabel = styled.label`
    font-weight: bold;
    font-size: 50px;
`;

export const FormText = styled.input.attrs({
    type: 'text',
});
