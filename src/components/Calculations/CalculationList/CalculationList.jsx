import styled from "styled-components"
import leftbtn from "../../../images/leftbtn.png"
import rightbtn from "../../../images/rightbtn.png"
import { useState } from "react";
import Salary from './svgs/Salary'
import ExtraSalary from './svgs/ExtraSalary'
import Products from "./svgs/Products";
import Alcohol from "./svgs/Alcohol";
import Health from "./svgs/Health";
import Entertainment from "./svgs/Entertainment";
import Transport from "./svgs/Transport";
import House from "./svgs/House";
import Tools from "./svgs/Tools";
import Utility from "./svgs/Utility";
import Sport from "./svgs/Sport";
import Education from "./svgs/Education";
import Other from "./svgs/Ohter";

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
`

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
`

const FinanceItem = styled.div`
    width: 85px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5px;
    cursor: pointer;
`

const Amount = styled.p`
    font-family: Roboto, sans-serif;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    letter-spacing: 1px;
    color: #52555F;
    text-align: center;
    margin: 0;
`

const Category = styled.p`
    font-family: Roboto, sans-serif;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    letter-spacing: 0.5px;
    color: #52555F;
    text-align: center;
    margin: 0;
`

export default function CalculationList({spendings, incomes}){

    const [category, setCategory] = useState('spendings');
    const [selectedCategory, setSelectedCategory] = useState(undefined)
    
    const data = category === 'spendings' ? spendings : incomes;

    if (!Array.isArray(data)) {
        console.error("Data is not an array", data);
        return null;
    }

    const groupedData = data.reduce((acc, item) => {
        if (!acc[item.category]) {
            acc[item.category] = 0;
        }
        acc[item.category] += item.amount;
        return acc;
    }, {});
    
    const toggleButtonClick = () => {
        setCategory((prevCategory) => prevCategory === 'spendings' ? 'incomes' : 'spendings');
    };

    // const categoryIcons = {
    //     "Продукти": products,
    //     "Алкоголь": alcohol,
    //     "Розваги": entertainment,
    //     "Здоров'я": health,
    //     "Транспорт": transport,
    //     "Все для дому": house,
    //     "Техніка": tools,
    //     "Комуналка, зв'язок": utility,
    //     "Спорт, хобі": sport,
    //     "Навчання": education,
    //     "Інше": other,
    //     "Зп": salary,
    //     "Дод. дохід": extrasalary,
    // };

    const categories = { 
        'Зп': Salary,
        'Дод. дохід': ExtraSalary,
        'Продукти': Products,
        "Алкоголь": Alcohol,
        "Розваги": Entertainment,
        "Здоров'я": Health,
        "Транспорт": Transport,
        "Все для дому": House,
        "Техніка": Tools,
        "Комуналка, зв'язок": Utility,
        "Спорт, хобі": Sport,
        "Навчання": Education,
        "Інше": Other,
    }

    const handleSelectedChange = (category) => {
        setSelectedCategory((prevSelected) => prevSelected === category ? undefined : category)
    }

    return(
        <Container>
            <ToggleButtonWrapper>
                <ToggleButton onClick={toggleButtonClick}>
                    <img src={leftbtn} alt="arrow" />
                </ToggleButton>
                {category === 'spendings' && (
                    <ToggleButtonText>
                        ВИТРАТИ
                    </ToggleButtonText>
                )}
                {category === 'incomes' && (
                    <ToggleButtonText>
                        ДОХОДИ
                    </ToggleButtonText>
                )}
                <ToggleButton onClick={toggleButtonClick}>
                    <img src={rightbtn} alt="arrow" />
                </ToggleButton>
            </ToggleButtonWrapper>
            <FinanceWrapper>
                {data.length === 0 && (
                    <p>У вас ще немає доходів або витрат</p>
                )}
                {Object.entries(groupedData).map(([cat, amount]) => {
                    const Icon = categories[cat]
                    return(
                        <FinanceItem onClick={() => handleSelectedChange(cat)} key={cat}>
                            <Amount>{amount}</Amount>
                            <Icon selected={selectedCategory === cat} />
                            <Category>{cat}</Category>
                        </FinanceItem>
                    )
                })}
            </FinanceWrapper>
        </Container>
    )
}
