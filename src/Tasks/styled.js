import styled, { css } from "styled-components";

export const TaskList = styled.ul`
    padding: 0px;
    list-style-type: none;
`;

export const NewTaskList = styled.li`
    border-bottom: 3px solid #eee;
    padding: 10px;
    list-style-type: none;
    display: grid;
    grid-template-columns: auto 1fr auto;
    grid-gap: 10px;
    align-items: center;

    ${({ hidden }) => hidden && css`
    display:none;
    `}
`;

export const ButtonJs = styled.button`
    width: 35px;
    height: 35px;
    background-color: green;
    color: white;
    padding: 0;
    border: none;
    transition: 1s;

    &:hover {
        background-color: hsl(120, 100%, 30%);
    };
  
    &:active {
        background-color: hsl(120, 100%, 40%);
    };
`;

export const Content = styled.span`
    ${({done}) => done && css`
    text-decoration: line-through;
    `}
       
`;

export const ButtonDelete = styled.button`
    width: 35px;
    height: 35px;
    background-color: rgb(219, 84, 84);
    color: white;
    padding: 0;
    border: none;
    transition: 1s;

    &:hover {
        background-color: hsl(0, 65%, 65%);
    };
  
    &:active {
        background-color: hsl(0, 65%, 70%)
    };
`;
