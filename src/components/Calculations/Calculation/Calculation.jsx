import { useSelector } from 'react-redux';
import { getIncomes, getSpendings } from '../../../redux/incomes/selectors';
import { Box } from './Calculation.syled'; 

export const Calculation = () => {

    const incomes = useSelector(getIncomes)
    const spendings = useSelector(getSpendings)

    return (
        <>
            <Box>
                <p>{spendings}</p>
                <p>{incomes}</p>
            </Box>
        </>
    )
}