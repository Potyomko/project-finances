import Balance from "../../Balance/Balance";
import styled from "styled-components";
import { Link, Outlet, useLocation } from "react-router-dom";
import financebg from "../../../images/financebg.png"
import bgcolor from "../../../images/bgcolor.png"
import calendar from '../../../images/calendar.png'
import { useSelector } from "react-redux";
import { getSpendings } from "../../../redux/incomes/selectors";
import { getIncomes } from "../../../redux/incomes/selectors";
import { GoBackButton } from "components/navigation/GoBackButton/GoBackButton";

const Wrapper = styled.div`

    height: calc(100vh - 56px);

    @media(min-width: 768px){
        background-color: #fff;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        background-image: url(${bgcolor});
        background-repeat: no-repeat;
        background-position-y: 0;
        padding-top: 10px;
        width: 768px;
        min-height: 850px;
        margin-left: auto;
        margin-right: auto;
    }

    @media(min-width: 1200px){
        width: 1280px;
        background-image: url(${bgcolor}), url(${financebg});
        background-position-y: 0, 90%;
    }
`;

const BalanceWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 30px 0;
    background: #F5F6FB;
    border-bottom-left-radius: 120px;

    @media(min-width: 768px){
        margin-bottom: 30px;
        margin-top: 0;
        gap: 0;
        flex-direction: row;
    }

    @media(min-width: 1200px){
        margin-bottom: 10px;
    }
`;

const Finances = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: calc(100vh - 376px);

    @media(min-width: 768px){
        align-items: flex-start;
        justify-content: center;
        height: auto;
    }
`;

const ButtonsWrapper= styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    @media(min-width: 768px){
        width: auto;
    }
`;

const StyledLink = styled(Link)`

    width: 49.8%;
    height: 53px;
    color: #000;

    display: flex;
    justify-content: center;
    align-items: center;

    font-family: Roboto, sans-serif;
    font-size: 12px;
    font-weight: 700;
    line-height: 14px;
    text-decoration: none;
    background-color: #FAFBFD;

    &.active{
        color: #fff;
        background-color: #FF751D;
    }

    @media(min-width: 768px){
        width: 138px;
        height: 40px;
        border-top-left-radius: 15px;
        border-top-right-radius: 15px;

        &.active{
            color: #FF751D;
            background-color: #FAFBFD;
        }
    }
`;

const Container = styled.div`
    
    display: none;

    @media(min-width: 768px){
        display: block;
        width: 665px;
        height: 626px;
        background-color: #fff;
        box-shadow: 0px 10px 60px 0px #AAB2C533;
        border-radius: 0 30px 30px 30px;
        padding: 30px 20px;
    }

    @media(min-width: 1200px){
        width: 1060px;
        height: 580px;
    }
`;

const MobileContainer = styled.div`

    width: 100%;
    padding-top: 40px;
    margin-bottom: 10px;

    @media(min-width: 768px){
        display: none;
    }
`

const DateWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    color: #52555F;
    font-family: Roboto, sans-serif;
    font-weight: 900;
    font-size: 12px;
    line-height: 14px;
    letter-spacing: 0.5px;
    width: 100px;
    height: 44px;
    margin-top: 30px;

    @media(min-width: 768px){
        display: none;
    }
`;

const FinanceItem = styled.div`
    width: 100%;
    height: 40px;
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
`

const Category = styled.p`
    font-family: Roboto, sans-serif;
    font-weight: 400;
    font-size: 8px;
    line-height: 9.5px;
    letter-spacing: 1px;
    color: #52555F;
    margin: 0;
`

const DateItem = styled.p`
    font-family: Roboto, sans-serif;
    font-weight: 400;
    font-size: 8px;
    line-height: 9.5px;
    letter-spacing: 1px;
    color: #52555F;
    margin: 0;
`

const Description = styled.p`
    font-family: Roboto, sans-serif;
    font-weight: 700;
    font-size: 12px;
    line-height: 14px;
    letter-spacing: 1px;
    color: #52555F;
    margin: 0;
`

const IncomeAmount = styled.p`
    font-family: Roboto, sans-serif;
    font-weight: 700;
    font-size: 12px;
    line-height: 14px;
    letter-spacing: 1px;
    color: #407946;
`

const SpendingAmount = styled.p`
    font-family: Roboto, sans-serif;
    font-weight: 700;
    font-size: 12px;
    line-height: 14px;
    letter-spacing: 1px;
    color: #E7192E;
`

const DescriptionWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
`

const CategoryWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 3px;
`

export default function FinancePage(){

    const { pathname } = useLocation()

    const currentDate = new Date()
    const date = currentDate.getDate()
    const month = currentDate.getMonth() + 1 
    const year = currentDate.getFullYear()

    const spendings = useSelector(getSpendings)
    const incomes = useSelector(getIncomes)

    return(
        <Wrapper>
            <BalanceWrapper>
                <Balance/>
                <GoBackButton/>
                <DateWrapper>
                    <img src={calendar} alt="date" />
                    <p>{`${date}.${month}.${year}`}</p>
                </DateWrapper>
            </BalanceWrapper>
            <Finances>
                <MobileContainer>
                    {pathname.includes('/spendings') && spendings.map(spending => {
                        const incomeDate = new Date(spending.date)
                        const date = incomeDate.getDate()
                        const month = incomeDate.getMonth()
                        const year = incomeDate.getFullYear()
                        return(
                            <FinanceItem key={spending._id}>
                                <CategoryWrapper>
                                    <Description>{spending.description}</Description>
                                    <DescriptionWrapper>
                                        <DateItem>{`${date}.${month}.${year}`}</DateItem>
                                        <Category>{spending.category}</Category>
                                    </DescriptionWrapper>
                                </CategoryWrapper>
                                <SpendingAmount>- {spending.amount} грн.</SpendingAmount>
                            </FinanceItem>
                        )
                    })}
                    {pathname.includes('/incomes') && incomes.map(income => {
                        const incomeDate = new Date(income.date)
                        const date = incomeDate.getDate()
                        const month = incomeDate.getMonth()
                        const year = incomeDate.getFullYear()
                        return(
                            <FinanceItem key={income._id}>
                                <CategoryWrapper>
                                    <Description>{income.description}</Description>
                                    <DescriptionWrapper>
                                        <DateItem>{`${date}.${month}.${year}`}</DateItem>
                                        <Category>{income.category}</Category>
                                    </DescriptionWrapper>
                                </CategoryWrapper>
                                <IncomeAmount>{income.amount} грн.</IncomeAmount>
                            </FinanceItem>
                        )
                    })}
                </MobileContainer>
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