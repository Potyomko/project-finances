import React, { useState, useEffect } from 'react';
import {
  Wrapper,
  DateContainer,
  FormBox,
  Form,
  FormContainer,
  Description,
  Select,
  Option,
  TotalCost,
  TotalCostTitle,
  TotalCostItem,
  Amount,
  ButtonsContainer,
  AddButton,
  ClearButton,
  SpendingsContainer,
  ExpenseWrapper,
  ExpenseHeader,
  SpendingContainer,
  ExpenseItem,
  AmountContainer,
  AddSpending,
  DeleteIcon
} from './Spending.styled.js';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import calendar from '../../../images/calendar.png'
import deleteIcon from "../../../images/delete.png"
import s from './Spending.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../../redux/auth/selectors.js';
import { addSpending, deleteSpending } from '../../../redux/spendings/operations.js';

function Spendings({ addExpense }) {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('');
  // const [rows, setRows] = useState(Array.from({ length: 20 }).map(() => null));
  const [rows, setRows] = useState(() => {
    const savedRows = localStorage.getItem('spendingRows');
    return savedRows ? JSON.parse(savedRows) : Array.from({ length: 20 }).map(() => null);
  });
  const [summary, setSummary] = useState([]);

  useEffect(() => {
    calculateSummary(rows);
  }, [rows]);

  const handleSubmit = e => {
    e.preventDefault();
    if (!description || !category || !amount) {
      toast.error('Будь ласка, заповніть поля');
      return;
    }
  
    const newExpense = {
      description,
      category,
      email: user.email,
      amount: parseFloat(amount),
    };
  
    dispatch(addSpending(newExpense));
    setDescription('');
    setCategory('');
    setAmount('');
  
    const firstEmptyRowIndex = rows.findIndex(row => row === null);
    if (firstEmptyRowIndex !== -1) {
      const updatedRows = [...rows];
      updatedRows[firstEmptyRowIndex] = newExpense;
      setRows(updatedRows);
      localStorage.setItem('spendingRows', JSON.stringify(updatedRows));
    }
  };

  const calculateSummary = (rows) => {
    const monthlySpendings = {};

    rows.forEach(row => {
      if (row) {
        const [day, month, year] = row.date.split('.');
        const monthKey = `${month}.${year}`;
        if (!monthlySpendings[monthKey]) {
          monthlySpendings[monthKey] = 0;
        }
        monthlySpendings[monthKey] += row.amount;
      }
    });

    const summaryArray = Object.keys(monthlySpendings).map(month => ({
      month,
      amount: monthlySpendings[month],
    }));

    setSummary(summaryArray);
  };

  const [currentDate] = useState(new Date());
  const formattedDate = `${currentDate.getDate()}.${currentDate.getMonth() + 1}.${currentDate.getFullYear()}`;

  const handleClear = () => {
    setDescription('');
    setCategory('');
    setAmount('');
    const clearedRows = Array.from({ length: 20 }).map(() => null);
    setRows(clearedRows);
    localStorage.removeItem('spendingRows');
  };

  const deleteExpense = (index) => {
    const newRows = [...rows];
    newRows[index] = null;
    for (let i = index + 1; i < newRows.length; i++) {
      newRows[i - 1] = newRows[i];
    }
    newRows[newRows.length - 1] = null;
    setRows(newRows);
    localStorage.setItem('spendingRows', JSON.stringify(newRows));

    // dispatch(deleteSpending({ email: user.email, incomeId }));
  };

  return (
    <Wrapper>
      <AddSpending onSubmit={handleSubmit}>
        <FormContainer>
          <DateContainer>
            <img src={calendar} alt="date" />
            <p>{formattedDate}</p>
          </DateContainer>
          <FormBox>
            <Form>
              <Description
                type="text"
                placeholder="Опис"
                value={description}
                onChange={e => setDescription(e.target.value)}
              />
              <Select
                value={category}
                onChange={e => setCategory(e.target.value)}
              >
                <Option value="">Категорія витрат</Option>
                <Option value="Транспорт">Транспорт</Option>
                <Option value="Продукти">Продукти</Option>
                <Option value="Здоров'я">Здоров'я</Option>
                <Option value="Алкоголь">Алкоголь</Option>
                <Option value="Розваги">Розваги</Option>
                <Option value="Все для дому">Все для дому</Option>
                <Option value="Техніка">Техніка</Option>
                <Option value="Комуналка, зв'язок">Комуналка, зв'язок</Option>
                <Option value="Спорт, хобі">Спорт, хобі</Option>
                <Option value="Навчання">Навчання</Option>
                <Option value="Інше">Інше</Option>
              </Select>
              <Amount
                type="number"
                placeholder="0.00"
                value={amount}
                onChange={e => setAmount(e.target.value)}
              />
            </Form>
          </FormBox>
        </FormContainer>
        <ButtonsContainer>
          <AddButton type="submit">Ввести</AddButton>
          <ClearButton type="button" onClick={handleClear}>
            Очистити
          </ClearButton>
        </ButtonsContainer>
      </AddSpending>
      <SpendingsContainer>
        <ExpenseWrapper>
          <ExpenseHeader>
            <p className={s.data}>ДАТА</p>
            <p className={s.desc}>ОПИС</p>
            <p className={s.category}>КАТЕГОРІЯ</p>
            <p className={s.sum}>СУМА</p>
          </ExpenseHeader>
          <SpendingContainer>
            {rows.map((row, index) => (
              <ExpenseItem key={index}>
                {row !== null ? (
                  <>
                    <p className={s.data1}>{row.date}</p>
                    <p className={s.desc1}>{row.description}</p>
                    <p className={s.category1}>{row.category}</p>
                    <AmountContainer className={s.sum1}>-{row.amount} грн.</AmountContainer>
                    <p>
                      <DeleteIcon onClick={() => deleteExpense(index)}>
                        <img src={deleteIcon} alt="Видалити" />
                      </DeleteIcon>
                    </p>
                  </>
                ) : (
                  <>
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                  </>
                )}
              </ExpenseItem>
            ))}
          </SpendingContainer>
        </ExpenseWrapper>
        {/* Секція "Фінанси та зведення" */}
        <TotalCost>
          <TotalCostTitle>ЗВЕДЕННЯ</TotalCostTitle>
            {/* Перевірка, чи масив summary містить якісь елементи */}
          {summary.length > 0 ? (
            // Перебірка масиву summary та відображення кожного елемента як TotalCostItem
            summary.map((expense, i) => (
              <TotalCostItem key={i}>
                <span>{expense.month}</span>
                <span>{expense.amount} грн.</span>
              </TotalCostItem>
            ))
          ) : (
            <p></p>
          )}
        </TotalCost>
      </SpendingsContainer>
      <ToastContainer />
    </Wrapper>
  );
}

export default Spendings;
