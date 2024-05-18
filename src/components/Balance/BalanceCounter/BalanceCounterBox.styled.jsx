import { styled } from "styled-components";

export const Box = styled.div`

    width: 125px;
    height: 44px;
    border: 2px solid #FFFFFF;
    border-top-left-radius: 22px;
    border-bottom-left-radius: 22px;
    display: flex;
    justify-content: center;
    align-items: center;

    @media(min-width: 768px){
        margin-right: 15px;
        border-radius: 16px;
        width: 121px;
        height: 40px;
        background-color: #F2F5FC;
        display: flex;
        justify-content: center;
        align-items: center;
    }

`