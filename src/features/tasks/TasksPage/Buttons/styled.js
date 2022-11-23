import styled, { css } from "styled-components";

export const ButtonJs = styled.button`
    background-color: inherit;
    margin: 0px;
    padding: 10px;
    border: none;
    transition: 1s;
    color: teal;
    cursor: pointer;
   

    @media (max-width: 767px) {
        width: 100%;
        margin-bottom: 5px;
        cursor: pointer;
    };

    &:hover{
        color: hsl(180, 100%, 35%);
        cursor: pointer;
    };

    &:active{
        color: hsl(180, 100%, 45%); 
        cursor: pointer;
    };

    &:disabled{
        color: dimgrey;
        opacity: 1s;
    };

    ${({ hide }) => hide && css`
        display:none;
    `}
`;
