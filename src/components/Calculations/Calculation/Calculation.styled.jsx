import styled from "styled-components";

export const Box = styled.div`

display: flex;

// position: absolute;

width: 1060px;

// align-items: center;

margin: 24px auto 30px auto;
// margin-left: auto;
// margin-right: auto;

background: #FFFFFF;
/* shadow 1 */
box-shadow: 0px 10px 60px rgba(170, 178, 197, 0.2);
border-radius: 30px;

`

export const IncomesNum = styled.span`

/* + 45 000.00 грн. */

margin-left: 14px;

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

margin: 15px 0px 15px 319px;

font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 14px;
line-height: 16px;
align-items: center;

color: #52555F;

`

export const IncomesP = styled.p`

margin: 15px 319px 15px 0px;


font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 14px;
line-height: 16px;
align-items: center;

color: #52555F;

`

export const Stick = styled.span`

margin: 7px 20px 7px 20px;

width: 0px;
height: 36px;

border: 1px solid #E0E5EB;

`