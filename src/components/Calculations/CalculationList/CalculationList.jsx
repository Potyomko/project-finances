import React, { useState } from 'react';
import styled from 'styled-components';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import leftbtn from "../../../images/leftbtn.png";
import rightbtn from "../../../images/rightbtn.png";
import products from "../../../images/products.svg";
import alcohol from "../../../images/alcohol.svg";
import entertainment from "../../../images/entertainment.svg";
import health from "../../../images/health.svg";
import transport from "../../../images/transport.svg";
import house from "../../../images/house.svg";
import tools from "../../../images/tools.svg";
import utility from "../../../images/utility.svg";
import sport from "../../../images/sport.svg";
import education from "../../../images/education.svg";
import other from "../../../images/other.svg";
import salary from "../../../images/salary.svg";
import extrasalary from "../../../images/extrasalary.svg";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend
);

const Container = styled.div`
    width: 282px;
    padding: 20px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-radius: 20px;
    background-color: #fff;
    box-shadow: 0px 10px 60px 0px #AAB2C533;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 30px;

    @media(min-width: 768px){
        width: 668px;
        border-radius: 30px;
    }

    @media(min-width: 1200px){
        width: 1060px;
    }
`;

const ToggleButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
    margin-bottom: 20px;
`;

const ToggleButtonText = styled.p`
    font-family: Roboto, sans-serif;
    font-weight: 700;
    font-size: 14px;
    line-height: 16.5px;
    letter-spacing: 0.5px;
    color: #000;
    margin: 0;
`;

const ToggleButton = styled.div`
    cursor: pointer;
    width: 4px;
    height: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const FinanceWrapper = styled.div`
    width: 282px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 20px;

    @media(min-width: 768px){
        width: 613px;
    }
`;

const FinanceItem = styled.div`
    width: 85px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5px;
    cursor: pointer;
`;

const Amount = styled.p`
    font-family: Roboto, sans-serif;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    letter-spacing: 1px;
    color: #52555F;
    text-align: center;
    margin: 0;
`;

const Category = styled.p`
    font-family: Roboto, sans-serif;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    letter-spacing: 0.5px;
    color: #52555F;
    text-align: center;
    margin: 0;
`;


const ChartWrapper = styled.div`
    width: 100%;
    padding: 20px;
`;

export default function CalculationList({ spendings, incomes }) {
    const [category, setCategory] = useState('incomes');
    const [selectedCategory, setSelectedCategory] = useState(null);


    const data = category === 'spendings' ? spendings : incomes;

    if (!Array.isArray(data)) {
        console.error("Data is not an array", data);
        return null;
    }

    const groupedData = data.reduce((acc, item) => {
        if (!acc[item.category]) {
            acc[item.category] = {};
        }
        if (!acc[item.category][item.description]) {
            acc[item.category][item.description] = 0;
        }
        acc[item.category][item.description] += item.amount;
        return acc;
    }, {});

    const handleItemClick = (cat) => {
        setSelectedCategory(cat);
    };

    const toggleButtonClick = () => {
        setCategory((prevCategory) => prevCategory === 'spendings' ? 'incomes' : 'spendings');
        setSelectedCategory(null);
    };

    const categoryIcons = {
        "Продукти": products,
        "Алкоголь": alcohol,
        "Розваги": entertainment,
        "Здоров'я": health,
        "Транспорт": transport,
        "Все для дому": house,
        "Техніка": tools,
        "Комуналка, зв'язок": utility,
        "Спорт, хобі": sport,
        "Навчання": education,
        "Інше": other,
        "Зп": salary,
        "Дод. дохід": extrasalary,
    };

    const chartData = selectedCategory ? {
        labels: Object.keys(groupedData[selectedCategory]),
        datasets: [
            {
                label: selectedCategory,
                data: Object.values(groupedData[selectedCategory]),
                backgroundColor: '#FF751D',
                &:nth-child(odd): '#FFDAC0', 
                borderColor: '#FF751D',
                borderWidth: 1,
                borderRadius: 10,
                width: 38,
            },
        ],
    } : null;

    const chartOptions = {
        plugins: {
            title: {
                display: false,
            },
        },
    };

    return (
        <Container>
            <ToggleButtonWrapper>
                <ToggleButton onClick={toggleButtonClick}>
                    <img src={leftbtn} alt="arrow" />
                </ToggleButton>
                {category === 'spendings' && (
                    <ToggleButtonText>ВИТРАТИ</ToggleButtonText>
                )}
                {category === 'incomes' && (
                    <ToggleButtonText>ДОХОДИ</ToggleButtonText>
                )}
                <ToggleButton onClick={toggleButtonClick}>
                    <img src={rightbtn} alt="arrow" />
                </ToggleButton>
            </ToggleButtonWrapper>
            <FinanceWrapper>
                {data.length === 0 && (
                    <p>У вас ще немає доходів або витрат</p>
                )}
                {Object.entries(groupedData).map(([cat, descriptions]) => {
                    const totalAmount = Object.values(descriptions).reduce((sum, amount) => sum + amount, 0);
                    return (
                        <FinanceItem key={cat} onClick={() => handleItemClick(cat)}>
                            <Amount>{totalAmount}</Amount>
                            <img src={categoryIcons[cat]} alt={cat} />
                            <Category>{cat}</Category>
                        </FinanceItem>
                    );
                })}
            </FinanceWrapper>
            {selectedCategory && (
                <ChartWrapper>
                    <Bar data={chartData} options={chartOptions} />
                </ChartWrapper>
            )}
        </Container>
    );
}
