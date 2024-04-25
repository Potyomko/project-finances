import { useSelector } from 'react-redux';
import { getIncomes, getSpendings } from '../../../redux/incomes/selectors';
import { Box, SpendingsNum, IncomesNum } from './Calculation.syled';

export const Calculation = () => {

    const incomes = useSelector(getIncomes)
    const spendings = useSelector(getSpendings)

    return (
        <>
            <Box>
                <p>Витрати: - <SpendingsNum>{spendings}</SpendingsNum></p>
                <span>|</span>
                <p>Доходи: + <IncomesNum>{incomes}</IncomesNum></p>
            </Box>
        </>
    )
}