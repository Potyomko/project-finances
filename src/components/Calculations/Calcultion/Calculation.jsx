import { useSelector } from 'react-redux';
import { getIncomes } from '../../../redux/incomes/selectors';

export const Calculation = () => {

    const incomes = useSelector(getIncomes)

    return (
        <>
            <h1>{incomes}</h1>
        </>
    )
}