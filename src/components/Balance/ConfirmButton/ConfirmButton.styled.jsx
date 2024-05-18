import {styled} from "styled-components";

export const Button = styled.button`

    color: #52555F;
    opacity: 0.8;
    background-color: #F2F5FC;
    width: 125px;
    height: 44px;
    border: 2px solid #FFFFFF;
    font-family: Roboto;
    border-top-right-radius: 22px;
    border-bottom-right-radius: 22px;

    &:hover{
        background: #FF751D;
        color: #fff;
        cursor: pointer;
    }

    @media(min-width: 768px){
        width: 121px;
        border-radius: 16px;
    }
    
`
