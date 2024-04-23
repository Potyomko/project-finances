import styled from "styled-components";

export const Box = styled.div`

display: flex;

position: absolute;
width: 1060px;
height: 50px;
left: 110px;
top: 170px;

background: #FFFFFF;
/* shadow 1 */
box-shadow: 0px 10px 60px rgba(170, 178, 197, 0.2);
border-radius: 30px;

`

export const IncomesNum = styled.span`

/* + 45 000.00 грн. */

width: 120px;
height: 20px;
left: 732px;
top: 185px;

font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 14px;
display: flex;
align-items: center;
letter-spacing: 0.04em;

color: #407946;

`

export const SpendingsNum = styled.span`

/* - 18 000.00 грн. */

width: 112px;
height: 20px;
left: 507px;
top: 185px;

font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 14px;
line-height: 16px;
display: flex;
align-items: center;
letter-spacing: 0.04em;

color: #E53935;


`