import { styled } from "styled-components";

export const BalanceWrapper = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media(min-width: 768px){
        flex-direction: row;
        gap: none;
        align-items: none;
    }

`

export const Container = styled.div`

    display: flex;
    flex-direction: column-reverse;
    gap: 40px;
    align-items: center;

    @media(min-width: 768px){
        flex-direction: row;
        gap: none;
        align-items: none;
    }

`

export const BalanceContainer = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;

`