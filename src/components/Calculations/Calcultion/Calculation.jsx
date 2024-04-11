import { useSelector } from 'react-redux';

export const Calculation = () => {

    const incomes = useSelector((state)=>state.incomes)

    return (
        <>
            <h1>{incomes}</h1>
        </>
    )
}