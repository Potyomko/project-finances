import { useSelector } from 'react-redux';
import { getIncomes, getSpendings } from '../../../redux/incomes/selectors';
import { Box, SpendingsNum, IncomesNum, SpendingsP, IncomesP, Stick } from './Calculation.styled';

export const Calculation = () => {

    const incomes = useSelector(getIncomes);
    const spendings = useSelector(getSpendings);

    const spendingAmount = spendings.reduce((total, current) => { return total += current.amount }, 0);
    const incomesAmount = incomes.reduce((total, current) => { return total += current.amount }, 0);

    return (
        <>
            <Box>
                <SpendingsP>Витрати:  <SpendingsNum> - {spendingAmount}.</SpendingsNum></SpendingsP>
                <Stick></Stick>
                <IncomesP>Доходи:  <IncomesNum> + {incomesAmount}.</IncomesNum></IncomesP>
            </Box>
        </>
    )
}