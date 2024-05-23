import styled from "styled-components"

export const Wrapper = styled.div`
    width: 248px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-bottom: 20px;

    @media(min-width: 768px){
        width: 320px;
        flex-direction: row;
        justify-content: space-between;
        margin-bottom: 0;
    }
`

export const Title = styled.p`
    font-family: Roboto;
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
    letter-spacing: 0.5px;
    color: #52555F;
    opacity: 0.8;
`

export const BalanceForm = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;

    @media(min-width: 768px){
        gap: 15px;
    }
`

export const BalanceInput = styled.input`
    
    width: 125px;
    outline: none;
    border: 2px solid #FFFFFF;
    padding: 12px 20px;
    background: transparent;
    text-align: center;
    font-family: Roboto;
    font-weight: 700;
    font-size: 12px;
    line-height: 14px;
    letter-spacing: 0.5px;
    border-top-left-radius: 22px;
    border-bottom-left-radius: 22px;
    color: #000;

    @media(min-width: 768px){
        border-radius: 16px;
    }
`

export const BalanceSubmitButton = styled.button`
    width: 125px;
    outline: none;
    border: 2px solid #FFFFFF;
    padding: 12px 20px;
    font-family: Roboto;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    letter-spacing: 0.5px;
    color: #52555F;
    opacity: 0.8;
    background: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border-top-right-radius: 22px;
    border-bottom-right-radius: 22px;

    &:hover{
        background: #FF751D;
        color: #fff;
        opacity: 1;
    }

    @media(min-width: 768px){
        border-radius: 16px;
    }
`
