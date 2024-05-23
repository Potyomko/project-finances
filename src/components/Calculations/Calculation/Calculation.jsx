import { useSelector } from 'react-redux';
import { getIncomes, getSpendings } from '../../../redux/incomes/selectors';
import { Box, SpendingsNum, IncomesNum, SpendingsP, IncomesP, Stick, Wrapper, BalanceWrapper, BackButton, BackButtonText, FilterWrapper, FilterContent, FilterText, FilterButton, FilterDate } from './Calculation.styled';
import CalculationList from '../CalculationList/CalculationList';
import Balance from '../../Balance/Balance';
import backbtn from "../../../images/backbtn.png"
import { useNavigate } from 'react-router-dom';
import leftbtn from "../../../images/leftbtn.png"
import rightbtn from "../../../images/rightbtn.png"
import { useState } from 'react';

export const Calculation = () => {

    const incomes = useSelector(getIncomes);
    const spendings = useSelector(getSpendings);
    const navigate = useNavigate()
    const [date, setDate] = useState(new Date())

    const spendingAmount = spendings.reduce((total, current) => { return total += current.amount }, 0);
    const incomesAmount = incomes.reduce((total, current) => { return total += current.amount }, 0);

    const handleButtonClick = () => {
        navigate('/incomes')
    }

    const formatDate = (date) => {
        return date.toLocaleDateString('uk-UA', { year: 'numeric', month: 'long' }).replace(' р.', '');
    };

    const handlePrevMonth = () => {
        setDate(prevDate => {
            const newDate = new Date(prevDate);
            newDate.setMonth(prevDate.getMonth() - 1);
            return newDate;
        });
    };

    const handleNextMonth = () => {
        setDate(prevDate => {
            const newDate = new Date(prevDate);
            newDate.setMonth(prevDate.getMonth() + 1);
            return newDate;
        });
    };

    const filterByMonth = (items, date) => {
        const year = date.getFullYear();
        const month = date.getMonth();
        return items.filter(item => {
            const itemDate = new Date(item.date);
            return itemDate.getFullYear() === year && itemDate.getMonth() === month;
        });
    };

    const sortedSpendings = filterByMonth(spendings, date);
    const sortedIncomes = filterByMonth(incomes, date);

    return (
        <Wrapper>
            <BalanceWrapper>
                <BackButton onClick={handleButtonClick}>
                    <img src={backbtn} />
                    <BackButtonText>Повернутись на головну</BackButtonText>
                </BackButton>
                <Balance />
                <FilterWrapper>
                    <FilterText>
                        Поточний період:
                    </FilterText>
                    <FilterContent>
                        <FilterButton onClick={handlePrevMonth}>
                            <img src={leftbtn} alt="arrow" />
                        </FilterButton>
                        <FilterDate>
                            {formatDate(date)}
                        </FilterDate>
                        <FilterButton onClick={handleNextMonth}>
                            <img src={rightbtn} alt="arrow" />
                        </FilterButton>
                    </FilterContent>
                </FilterWrapper>
            </BalanceWrapper>
            <Box>
                <SpendingsP>Витрати:  <SpendingsNum> - {spendingAmount} грн.</SpendingsNum></SpendingsP>
                <Stick></Stick>
                <IncomesP>Доходи:  <IncomesNum> + {incomesAmount} грн.</IncomesNum></IncomesP>
            </Box>
            <CalculationList spendings={sortedSpendings} incomes={sortedIncomes} />
        </Wrapper>
    )
}