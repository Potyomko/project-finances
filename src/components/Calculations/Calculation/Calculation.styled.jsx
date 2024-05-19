import styled from "styled-components";

export const Box = styled.div`

width: 282px;
height: 50px;
display: flex;
justify-content: center;
align-items: center;
margin-left: auto;
margin-right: auto;
margin-bottom: 40px;
gap: 10px;


background: #FFFFFF;
/* shadow 1 */
box-shadow: 0px 10px 60px rgba(170, 178, 197, 0.2);
border-radius: 30px;

@media(min-width: 768px){
    width: 668px;
    gap: 20px;
    margin-bottom: 30px;
}

@media(min-width: 1200px){
    width: 1060px;
}

`

export const IncomesNum = styled.span`

/* + 45 000.00 грн. */

margin-left: 14px;

display: flex;
justify-content: center;
align-items: center;

font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 14px;
align-items: center;
letter-spacing: 0.04em;

color: #407946;

`

export const SpendingsNum = styled.span`

/* - 18 000.00 грн. */

margin-left: 14px;

font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 14px;
line-height: 16px;
align-items: center;
letter-spacing: 0.04em;

color: #E53935;


`

export const SpendingsP = styled.p`

margin: 15px 20px 15px 319px;

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 14px;
line-height: 16px;
align-items: center;

color: #52555F;
margin: 0;

@media(min-width: 768px){
    flex-direction: row;
}

`

export const IncomesP = styled.p`

margin: 15px 319px 15px 20px;

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 14px;
line-height: 16px;
align-items: center;

color: #52555F;
margin: 0;

@media(min-width: 768px){
    flex-direction: row;
}

`

export const Stick = styled.span`

margin: 7px auto 7px auto;

width: 0px;
height: 36px;
margin: 0;

border: 1px solid #E0E5EB;
`

export const Wrapper = styled.div`
height: 527px;
background: #F2F5FC;
border-bottom-left-radius: 150px;
padding-top: 25px;
`

export const BalanceWrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-bottom: 25px;
margin-right: auto;
margin-left: auto;

@media(min-width: 768px){
    flex-direction: row;
    justify-content: flex-start;
    width: 668px;
    gap: 35px;
}

@media(min-width: 1200px){
    width: 1060px;
    gap: 170px;
}
`

export const BackButton = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
gap: 5px;
cursor: pointer;
`

export const BackButtonText = styled.div`

display: none;

@media(min-width: 768px){
    display: block;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    letter-spacing: 1px;
    color: #52555FB2;
}
`