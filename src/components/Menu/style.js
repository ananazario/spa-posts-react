import styled from "styled-components";

export const nav = styled.nav`
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 3rem;

    @media (max-width: 744px) {
        height: 72px;
    }
`;