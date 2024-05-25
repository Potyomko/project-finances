import styled from "styled-components";

export const LeftArrow = styled.button`



`
export const List = styled.ul`
display: flex;

gap: 20px;

flex-wrap: wrap;

list-style-type: none;
`
export const ListChild = styled.li`
    margin-left: 228px;
    list-style-type: none;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    &:nth-child(6n+1) {
    clear: both;
    margin-right: 0;
    }
    &:nth-child(n+7) {
    margin-top: 45px;
    }
`
export const ListDiv = styled.div`

width: 1060px;
// height: 358px;
// left: 110px;
// top: 250px;

background: #FFFFFF;

box-shadow: 0px 10px 60px rgba(170, 178, 197, 0.2);
border-radius: 30px;
`