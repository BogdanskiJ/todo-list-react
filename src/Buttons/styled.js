import styled, { css } from "styled-components";

export const ButtonJs = styled.button`
    background-color: inherit;
    margin: 0px;
    padding: 10px;
    border: none;
    transition: 1s;
    color: teal;

    @media (max-width: 767px) {
        width: 100%;
        margin-bottom: 5px;
        }

    &:hover{
        color: hsl(180, 100%, 35%);
    }

    &:active{
        color: hsl(180, 100%, 45%); 
    }

    ${({ hide }) => hide && css`
        display:none;
    `}

`;
