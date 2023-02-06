import styled from "styled-components";

export const div = styled.div`
    padding: 4rem 7.5rem 6.25rem;
    background-color: var(--azul-escuro);
    color: var(--branco);
    display: grid;
    grid-template-columns: 2fr 1fr;

    h1 {
        font-family: var(--fonte-secundaria);
        font-size: 4rem;
        margin-top: 4.875rem;
        margin-bottom: 2rem;
    }

    p {
        font-family: var(--fonte-secundaria);
        font-size: 1.5rem;
        line-height: 2rem;
        margin-bottom: 2rem;
    }

    img {
        height: 18rem;
    }
`;