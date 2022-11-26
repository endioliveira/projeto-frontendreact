import styled from "styled-components";

export const ContainerFilters = styled.div`
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    gap: 10px;
    padding: 2rem;

    .filter-price {
        display: flex;
        gap: 10px;
        justify-content: center;
        margin-bottom: 0.5rem;
    }

    .sorting {
        display: flex;
        /* flex-direction: column; */
        gap: 10px;
    }

    label {
        color: #fff;
    }
`;