import styled from "styled-components";

export const SectionJs = styled.section`
    margin: 10px 5px;
`;

export const DivJs = styled.div`
    display: grid;
    grid-template-columns: 1fr auto auto;
    gap: 20px;
    margin: 0 3px;
    align-items: center;

    @media (max-width: 767px) {
        display: flex;
        flex-wrap: wrap;
        gap:0;
    }
`;

export const HeaderJs = styled.h2`
    font-weight: 600;
    padding: 10px;
    margin: 3px;
`;

export const BackgroundColor = styled.div`
padding: 20px 10px;
    margin: 3px;
`;



