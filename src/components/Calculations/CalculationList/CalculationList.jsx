import styled from "styled-components"
import leftbtn from "../../../images/leftbtn.png"
import rightbtn from "../../../images/rightbtn.png"
import products from "../../../images/products.svg"
import alcohol from "../../../images/alcohol.svg"
import entertainment from "../../../images/entertainment.svg"
import health from "../../../images/health.svg"
import transport from "../../../images/transport.svg"
import house from "../../../images/house.svg"
import tools from "../../../images/tools.svg"
import utility from "../../../images/utility.svg"
import sport from "../../../images/sport.svg"
import education from "../../../images/education.svg"
import other from "../../../images/other.svg"
import { useState } from "react";

const Container = styled.div`
    width: 282px;
    padding: 20px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-radius: 30px;
    background-color: #fff;
    box-shadow: 0px 10px 60px 0px #AAB2C533;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 30px;

    @media(min-width: 768px){
        width: 668px;
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

export default function CalculationList({spendings = [], incomes = []}){

    const [category, setCategory] = useState('incomes');
    
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
    };

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
                {Object.entries(groupedData).map(([cat, amount]) => (
                    <FinanceItem key={cat}>
                        <Amount>{amount}</Amount>
                        <img src={categoryIcons[cat]} alt={cat} />
                        <Category>{cat}</Category>
                    </FinanceItem>
                ))}
            </FinanceWrapper>
        </Container>
    )
}
