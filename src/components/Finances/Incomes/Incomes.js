import styled from "styled-components"
import calculator from '../../../images/calculator.png'
import calendar from '../../../images/calendar.png'
import deleteIcon from "../../../images/delete.png"
import { useDispatch, useSelector } from "react-redux";
import { getIncomes } from "../../../redux/incomes/selectors";
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addIncome, deleteIncome } from "../../../redux/incomes/operations";
import { useEffect, useState } from "react";
import { selectUser } from "../../../redux/auth/selectors";
import heroBg2 from "../../../images/heroBg2.png"

const Wrapper = styled.div`

    display: none;
    @media(min-width: 768px){
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
`;

const AddIncome = styled.form`
    display: flex;
    
    @media(min-width: 768px){
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 30px;
        margin-bottom: 50px;
    }

    @media(min-width: 1200px){
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 25px;
        margin-bottom: 60px;
    }
`;

const StyledForm = styled.div`
    @media(min-width: 768px){
        width: 467px;
        border-radius: 16px 16px 16px 0;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    @media(min-width: 1200px){
        width: 600px;
    }
`;

const FormWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 28px;
`;

const Description = styled.input`
    width: 300px;
    height: 44px;
    border: none;
    outline: none;
    padding: 10px 20px;
    border: 1px solid #F5F6FB;
    border-radius: 16px 0 0 0;
    color: #52555F;
    font-family: Roboto, sans-serif;
    font-weight: 700;
    font-size: 12px;
    line-height: 14px;
    letter-spacing: 0.5px;

    &::placeholder {
        color: #C7CCDC;
        font-family: Roboto, sans-serif;
        font-weight: 400;
        font-size: 12px;
        line-height: 14px;
        letter-spacing: 0.5px;
    }
`;

const Select = styled.select`
    width: 200px;
    height: 44px;
    border: none;
    outline: none;
    border: 1px solid #F5F6FB;
    color: #52555F;
    font-family: Roboto, sans-serif;
    font-weight: 700;
    font-size: 12px;
    line-height: 14px;
    letter-spacing: 0.5px;
    text-align: center;
    cursor: pointer;
`;

const StyledOption = styled.option`
    width: 188px;
    height: 33px;
`;

const Amount = styled.input`
    width: 100px;
    height: 44px;
    border: none;
    outline: none;
    border: 1px solid #F5F6FB;
    border-radius: 0 16px 16px 0;
    color: #52555F;
    font-family: Roboto, sans-serif;
    font-weight: 700;
    font-size: 12px;
    line-height: 14px;
    letter-spacing: 0.5px;
    text-align: center;
    background-image: url(${calculator});
    background-repeat: no-repeat;
    background-position-x: 90%;
    background-position-y: 50%;

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    &::placeholder{
        color: #C7CCDC;
        font-family: Roboto, sans-serif;
        font-weight: 400;
        font-size: 12px;
        line-height: 14px;
        letter-spacing: 0.5px;
    }
`;

const ButtonsWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
`;

const AddButton = styled.button`
    width: 125px;
    height: 44px;
    border: none;
    border-radius: 16px;
    background-color: #FF751D;
    color: #fff;
    font-family: Roboto, sans-serif;
    font-weight: 700;
    font-size: 12px;
    line-height: 14px;
    letter-spacing: 0.5px;
    text-align: center;
    cursor: pointer;
`;

const ClearButton = styled.button`
    width: 125px;
    height: 44px;
    border: 2px solid #F5F6FB;
    border-radius: 16px;
    background-color: #fff;
    color: #52555F;
    font-family: Roboto, sans-serif;
    font-weight: 700;
    font-size: 12px;
    line-height: 14px;
    letter-spacing: 0.5px;
    text-align: center;
    cursor: pointer;
`;

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
`;

const IncomeWrapper = styled.div`
    width: 760px;
    height: 400px;
    border: 2px solid #F5F6FB;
    border-radius: 16px 16px 0 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    @media(min-width: 768px){
        width: 605px;
        height: 384px;
    }

    @media(min-width: 1200px){
        width: 760px;
        height: 400px;
        border: 2px solid #F5F6FB;
        border-radius: 16px 16px 0 0;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
    }
`;

const IncomeHeader = styled.div`
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #000;
    font-family: Roboto, sans-serif;
    font-weight: 700;
    font-size: 12px;
    line-height: 14px;
    letter-spacing: 0.5px;
    border-radius: 15px 15px 0 0;
    background-color: #F5F6FB;
    padding: 10px 20px;

    p{
        width: 150px;
        text-align: center;
    }
`

const IncomeItem = styled.li`
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 2px solid #F5F6FB;
    font-family: Roboto, sans-serif;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    letter-spacing: 0.5px;
    color: #52555F;

    

    @media(min-width: 768px){
        p{
            width: 120px;
            text-align: center;
        }
    }

    @media(min-width: 1200px){
        p{
            width: 150px;
            text-align: center;
        }
    }
`;

const AmountContainer = styled.p`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 60px;
    font-weight: 700;
    color: #407946;
`;

const IncomesContainer = styled.div`
    

    @media(min-width: 768px){
        display: flex;
        justify-content: center;
        align-items: flex-start;
        flex-direction: column;
        gap: 90px;
        background-image: url(${heroBg2});
        background-repeat: no-repeat;
        background-position-y: 67%;
        background-position-x: 90%;
    }

    @media(min-width: 1200px){
        flex-direction: row;
        background-image: none;
        gap: 30px;
    }
`;

const IncomeContainer = styled.ul`
    max-height: 350px;
    margin: 0;
    padding: 0;
    overflow-y: auto;

    &::-webkit-scrollbar{
        padding-top:5px;
        width: 7px;
        cursor: pointer;
    }

    &::-webkit-scrollbar-track{
        background: #fff;
        border-radius: 25px;
        cursor: pointer;
    }

    &::-webkit-scrollbar-thumb{
        background: #FF751D;
        border-radius: 25px;
        cursor: pointer;
    }
`;

const Summary = styled.div`
    
    display: none;

    @media(min-width: 768px){
        width: 230px;
        height: 400px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        
        div:nth-last-child(1){
            border-bottom-right-radius: 16px;
        }
    }

`;

const SummaryTitle = styled.div`
    width: 100%;
    height: 40px;
    background-color: #F5F6FB;
    color: #000;
    font-family: Roboto, sans-serif;
    font-weight: 700;
    font-size: 12px;
    line-height: 14px;
    letter-spacing: 0.5px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
    border-bottom: 2px solid #fff;
`;

const SummaryItem = styled.div`
    width: 100%;
    height: 40px;
    background-color: #F5F6FB;
    color: #52555F;
    font-family: Roboto, sans-serif;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    letter-spacing: 1px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;
    border-top: 2px solid #fff;
    border-bottom: 2px solid #fff;
`;

const DeleteIcon = styled.span`
    width: 32px;
    height: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #F5F6FB;
    border: none;
    border-radius: 50%;
    cursor: pointer;
`;

const FormContainer = styled.div`
    display: flex;
    
    @media(min-width: 768px){
        flex-direction: row;
        gap: 30px;
    }

    @media(min-width: 1200px){
        flex-direction: row;
        justify-content: center;
        gap: 25px;
    }
`;

export default function Incomes(){

    const user = useSelector(selectUser)

    const dispatch = useDispatch()
    const incomes = useSelector(getIncomes)
    const [summary, setSummary] = useState([])

    const currentDate = new Date()
    const date = currentDate.getDate()
    const month = currentDate.getMonth() + 1 
    const year = currentDate.getFullYear()

    const formNotify = () => toast.error('Заповніть всі поля!', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
    });

    const handleFormSubmit = (ev) => {
        ev.preventDefault();
        
        const form = ev.currentTarget
        const amount = parseFloat(form.elements.amount.value);

        if(form.elements.amount.value === '' || form.elements.description.value === '' || form.elements.category.value === ''){
            return formNotify()
        }

        dispatch(addIncome({
            email: user.email,
            amount: amount,
            description: form.elements.description.value,
            category: form.elements.category.value,
        }))
        form.reset()
    }

    const handleButtonClick = () => {
        const form = document.getElementById('incomeForm');
        form.reset();
    }

    const handleIncomeDelete = (incomeId) => {
        dispatch(deleteIncome({
            email: user.email,
            incomeId,
        }))
    }

    useEffect(() => {
        if (incomes !== undefined && incomes.length !== 0) {
            function sortByDate(incomes) {
                return [...incomes].sort((a, b) => new Date(a.date) - new Date(b.date));
            }
              
            function groupByMonthWithTotalAmount(incomes) {
                const grouped = {};
                const months = [
                    "січень", "лютий", "березень", "квітень", "травень", "червень",
                    "липень", "серпень", "вересень", "жовтень", "листопад", "грудень"
                ];
                incomes.forEach(income => {
                    const date = new Date(income.date);
                    const monthName = months[date.getMonth()];
                    if (!grouped[monthName]) {
                        grouped[monthName] = 0;
                    }
                    grouped[monthName] += income.amount;
                });
                return Object.entries(grouped).map(([month, amount]) => ({ month, amount }));
            }
              
            const sortedIncomes = sortByDate(incomes);
            const incomesByMonthWithTotalAmount = groupByMonthWithTotalAmount(sortedIncomes);
            setSummary(incomesByMonthWithTotalAmount);
        }
    }, [incomes]);

    return(
        <Wrapper>
            <AddIncome onSubmit={handleFormSubmit} id="incomeForm">
                <FormContainer>
                    <DateWrapper>
                        <img src={calendar} alt="date" />
                        <p>{`${date}.${month}.${year}`}</p>
                    </DateWrapper>
                    <FormWrapper>
                        <StyledForm>
                            <Description placeholder="Опис" type="text" name="description" autoComplete="false" />
                            <Select name="category">
                                <StyledOption value="">Категорія прибутку</StyledOption>
                                <StyledOption value="Зп">Зп</StyledOption>
                                <StyledOption value="Дод. дохід">Дод. дохід</StyledOption>
                            </Select>
                            <Amount placeholder="0.00" name="amount" type={'number'} />
                        </StyledForm>
                    </FormWrapper>
                </FormContainer>
                <ButtonsWrapper>
                    <AddButton type="submit">Ввести</AddButton>
                    <ClearButton type="button" onClick={handleButtonClick}>Очистити</ClearButton>
                </ButtonsWrapper>
            </AddIncome>
            <IncomesContainer>
                <IncomeWrapper>
                    <IncomeHeader>
                        <p>ДАТА</p>
                        <p>ОПИС</p>
                        <p>КАТЕГОРІЯ</p>
                        <p>СУМА</p>
                        <p></p>
                    </IncomeHeader>
                    <IncomeContainer>
                        {incomes && incomes.length !== 0 && incomes.map(income => {
                            const originalDate = new Date(income.date);
                            const day = String(originalDate.getDate()).padStart(2, '0');
                            const month = String(originalDate.getMonth() + 1).padStart(2, '0');
                            const year = originalDate.getFullYear();
                            const formattedDate = `${day}.${month}.${year}`;
                            return(
                                <IncomeItem key={income._id}>
                                    <p>{formattedDate}</p>
                                    <p>{income.description}</p>
                                    <p>{income.category}</p>
                                    <AmountContainer className="amount">{income.amount} грн.</AmountContainer>
                                    <p><DeleteIcon onClick={() => handleIncomeDelete(income._id)}><img src={deleteIcon} alt="delete" /></DeleteIcon></p>
                                </IncomeItem>
                            )
                        })}
                    </IncomeContainer>
                </IncomeWrapper>
                <Summary>
                    <SummaryTitle>ЗВЕДЕННЯ</SummaryTitle>
                    {summary && summary.length !== 0 && summary.map((income, i) => (
                        <SummaryItem key={i}>
                            <span>{income.month}</span>
                            <span>{income.amount}</span>
                        </SummaryItem>
                    ))}
                </Summary>
            </IncomesContainer>
            <ToastContainer />
        </Wrapper>

    )
}