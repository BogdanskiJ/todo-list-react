import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export const StyledUlList = styled.ul`
    padding: 10px;
    list-style-type: none;
    display:flex;
    margin: auto;
    align-content: center;
    justify-content: center;
    align-items: center;
    background-color:teal;

`;

export const StyledLiList = styled.li`
width: max-content;
padding: 10px;
margin: 0 5px;
transition: 0.5s;
    &:hover {
        transform: scale(1.1);
    };
`;

export const StyledNav = styled.nav`
 
`;
export const StyledLink = styled(Link)`
 text-decoration:none;
 color:white;
 transition: 0.5s;
    &:focus {
        font-weight:bold;
    };
`;
