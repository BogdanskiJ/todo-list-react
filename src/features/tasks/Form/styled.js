import styled from "styled-components";

export const FormJs = styled.form`
    background-color: white;
    padding: 20px;
    margin: 3px;
    display: grid;
    grid-template-columns: 4fr 1fr;
    grid-gap: 20px;
    font-size: 18px;

    @media (max-width: 767px) {
        display: flex;
        flex-wrap: wrap;
    }
`;

export const InputJs = styled.input`
    padding: 10px;

    @media (max-width: 767px) {
        width: 100%;
        text-align: center;
    }
`;

export const ButtonJs = styled.button`
    background-color: teal;
    color: white;
    border: none;
    transition: 1s;

    @media (max-width: 767px) {
        width: 100%;
        padding: 10px 0;
    };

    &:hover{
        background-color: hsl(180, 100%, 30%);
        transform: scale(1.1);
    };

    &:active{
        background-color: hsl(180, 100%, 40%);
    }

`;
