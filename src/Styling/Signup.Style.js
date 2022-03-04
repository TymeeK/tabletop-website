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
    min-width: 300px;
`;

export const FormLabel = styled.label`
    font-weight: bold;
    font-size: 20px;
`;

export const FormDiv = styled.div``;

export const FormText = styled.input.attrs(props => ({
    type: props.type,
}))`
    border-radius: 10px;
    border: 1px solid #b9b8b8;
    width: 200px;
    font-size: 15px;
    padding: 10px;
    box-shadow: 2px -2px 10px 2px #f3efef;
    outline: none;
`;

export const SubmitButton = styled.input.attrs({
    type: 'submit',
})`
    margin-top: 25px;
    height: 35px;
    width: 120px;
    background-color: aliceblue;
    border: 1px solid #b9b8b8;
    border-radius: 15px;
`;
