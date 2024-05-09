import { Balance } from "../../Balance/Balance/Balance";
import styled from "styled-components";
import { Link, Outlet, useLocation } from "react-router-dom";
import financebg from "../../../images/financebg.png"
import bgcolor from "../../../images/bgcolor.png"

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background-image: url(${bgcolor}), url(${financebg});
    background-repeat: no-repeat;
    background-position-y: 0, 90%;
    padding-top: 40px;
    width: 1280px;
    min-height: 850px;
    margin-left: auto;
    margin-right: auto;
`;

const BalanceWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
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
    padding: 30px 20px;
`;

export default function FinancePage(){

    return(
        <Wrapper>
            <BalanceWrapper>
                <Balance/>
            </BalanceWrapper>
            <Finances>
                <ButtonsWrapper>
                    <StyledLink className={pathname.includes('/spendings') ? 'active' : ''} to={'/user-finances/spendings'}>Витрати</StyledLink>
                    <StyledLink className={pathname.includes('/incomes') ? 'active' : ''} to={'/user-finances/incomes'}>Дохід</StyledLink>
                </ButtonsWrapper>
                <Container>
                    <Outlet />
                </Container>
            </Finances>
        </Wrapper>
    )
}