import styled from "styled-components";

export const Wrapper = styled.div`
background-color: white;
    padding: 20px;
    margin: 3px;
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 20px;
    font-size: 18px;

    @media (max-width: 767px) {
        display: flex;
        flex-wrap: wrap;
    }
`;