import React, { useState } from 'react';
import {
  Wrapper,
  DateContainer,
  Form,
  FormContainer,
  Description,
  Select,
  Option,
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
} from '../CSS/E.styled';

import calendar from '../../../images/calendar.png'
import deleteIcon from "../../../images/delete.png"

function Spendings({ addExpense }) {
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('');
  const [rows, setRows] = useState(Array.from({ length: 20 }).map(() => null));

  const handleSubmit = e => {
    e.preventDefault();
    const newExpense = {
      date: new Date().toLocaleDateString(),
      description,
      category,
      amount,
    };
    addExpense(newExpense);
    setDescription('');
    setCategory('');
    setAmount('');

    const firstEmptyRowIndex = rows.findIndex(row => row === null);
    if (firstEmptyRowIndex !== -1) {
      const updatedRows = [...rows];
      updatedRows[firstEmptyRowIndex] = newExpense;
      setRows(updatedRows);
    }
  };

  const [currentDate, setCurrentDate] = useState(new Date());
  const formattedDate = `${currentDate.getDate()}.${currentDate.getMonth() + 1}.${currentDate.getFullYear()}`;

  const handleClear = () => {
    setDescription('');
    setCategory('');
    setAmount('');
    setRows(Array.from({ length: 20 }).map(() => null));
  };

  const deleteExpense = index => {
    const newRows = [...rows];
    newRows[index] = null;
    for (let i = index + 1; i < newRows.length; i++) {
      newRows[i - 1] = newRows[i];
    }
    newRows[newRows.length - 1] = null;
    setRows(newRows);
  };

  return (
    <Wrapper>
      <AddSpending>
        <DateContainer>
          <img src={calendar} alt="date" />
          <p>{formattedDate}</p>
        </DateContainer>
        <Form onSubmit={handleSubmit}>
          <FormContainer>
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
              <Option value="">Виберіть категорію</Option>
              <Option value="Транспорт">Транспорт</Option>
              <Option value="Продукти">Продукти</Option>
              <Option value="Здоров'я">Здоров'я</Option>
              <Option value="Алкоголь">Алкоголь</Option>
              <Option value="Розваги">Розваги</Option>
              <Option value="Все для дому">Все для дому</Option>
              <Option value="Техніка">Техніка</Option>
              <Option value="Комуналка, зв'язок">
                Комуналка, зв'язок
              </Option>
              <Option value="Спорт, хобі">Спорт, хобі</Option>
              <Option value="Навчання">Навчання</Option>
              <Option value="Інше">Інше</Option>
            </Select>
            <Amount
              type="number"
              placeholder="Сума"
              value={amount}
              onChange={e => setAmount(e.target.value)}
            />
          </FormContainer>
          <ButtonsContainer>
            <AddButton type="submit">Ввести</AddButton>
            <ClearButton type="button" onClick={handleClear}>
              Очистити
            </ClearButton>
          </ButtonsContainer>
        </Form>
      </AddSpending>
      <SpendingsContainer>
        <ExpenseWrapper>
          <ExpenseHeader>
            <p>ДАТА</p>
            <p>ОПИС</p>
            <p>КАТЕГОРІЯ</p>
            <p>СУМА</p>
          </ExpenseHeader>
          <SpendingContainer>
            {rows.map((row, index) => (
              <ExpenseItem key={index}>
                {row !== null ? (
                  <>
                    <p>{row.date}</p>
                    <p>{row.description}</p>
                    <p>{row.category}</p>
                    <AmountContainer>-{row.amount}грн.</AmountContainer>
                    <button onClick={() => deleteExpense(index)}>
                      <img src={deleteIcon} alt="Видалити" />
                    </button>
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
      </SpendingsContainer>
    </Wrapper>
  );
}

export default Spendings;
