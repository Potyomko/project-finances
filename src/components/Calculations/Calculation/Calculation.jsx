import { useSelector } from 'react-redux';
import { getIncomes, getSpendings } from '../../../redux/incomes/selectors';
import { Box, SpendingsNum, IncomesNum, SpendingsP, IncomesP, Stick, Wrapper, BalanceWrapper, BackButton, BackButtonText } from './Calculation.styled';
import CalculationList from '../CalculationList/CalculationList';
import Balance from '../../Balance/Balance';
import backbtn from "../../../images/backbtn.png"
import { useNavigate } from 'react-router-dom';

export const Calculation = () => {

    const incomes = useSelector(getIncomes);
    const spendings = useSelector(getSpendings);
    const navigate = useNavigate()

    const spendingAmount = spendings.reduce((total, current) => { return total += current.amount }, 0);
    const incomesAmount = incomes.reduce((total, current) => { return total += current.amount }, 0);

    const handleButtonClick = () => {
        navigate('/user-finances/incomes')
    }

    return (
        <Wrapper>
            <BalanceWrapper>
                <BackButton onClick={handleButtonClick}>
                    <img src={backbtn} />
                    <BackButtonText>Повернутись на головну</BackButtonText>
                </BackButton>
                <Balance />
            </BalanceWrapper>
            <Box>
                <SpendingsP>Витрати:  <SpendingsNum> - {spendingAmount} грн.</SpendingsNum></SpendingsP>
                <Stick></Stick>
                <IncomesP>Доходи:  <IncomesNum> + {incomesAmount} грн.</IncomesNum></IncomesP>
            </Box>
            <CalculationList spendings={spendings} incomes={incomes} />
        </Wrapper>
    )
}