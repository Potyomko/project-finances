import { styled } from "styled-components";

export const Button = styled.button`
width: 125px;
height: 44px;
border: none;
border-radius: 16px;
background-color: #FF751D;
color: #fff;
font-family: Roboto, sans-serif;
font-weight: 700;
font-size: 12px;
line-height: 14px;
letter-spacing: 0.5px;
text-align: center;
cursor: pointer;
margin-left: 0px;

@media(min-width: 768px){
    margin-left: 80px;
}

@media(min-width: 1200px){
    margin-left: 170px;
}
`