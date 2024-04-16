import { Calculation } from "../Calculations/Calcultion/Calculation";
import { Balance } from "../Balance/Balance/Balance";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";

const BalanceWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #F2F5FC;
    border-bottom-left-radius: 200px;
    padding-top: 40px;
`;

const Finances = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
`;

const ButtonsWrapper= styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

const StyledLink = styled(Link)`
    width: 138px;
    height: 40px;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Roboto, sans-serif;
    font-size: 12px;
    font-weight: 700;
    line-height: 14px;
    color: #000;
    text-decoration: none;
    background-color: #FAFBFD;

    &.active{
        color: #FF751D;
    }
`;

const Container = styled.div`
    width: 1060px;
    height: 580px;
    background-color: #fff;
    box-shadow: 0px 10px 60px 0px #AAB2C533;
    border-radius: 0 30px 30px 30px;
`;

export default function HomePage(){

    const { pathname } = useLocation()

    return(
        <Wrapper>
            <BalanceWrapper>
                <Calculation/>
                <Balance/>
            </BalanceWrapper>
            <Finances>
                <ButtonsWrapper>
                    <StyledLink className={pathname == '/spendings' ? 'active' : ''} to={'/spendings'}>Витрати</StyledLink>
                    <StyledLink className={pathname == '/incomes' ? 'active' : ''} to={'/incomes'}>Дохід</StyledLink>
                </ButtonsWrapper>
                <Container></Container>
            </Finances>
        </Wrapper>
    )
}