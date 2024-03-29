import styled from "styled-components";


export const FormJs = styled.form`
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

export const ButtonJs = styled.button`
    background-color: teal;

    border: none;
    transition: 1s;
    cursor: pointer;

    @media (max-width: 767px) {
        width: 100%;
        padding: 10px 0;
    };

    &:hover{
        background-color: hsl(180, 100%, 30%);
        transform: scale(1.1);
        cursor: pointer;
    };

    &:active{
        background-color: hsl(180, 100%, 40%);
        cursor: pointer;
    }

`;
