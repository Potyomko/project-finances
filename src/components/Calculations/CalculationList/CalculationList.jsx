import { useState } from "react";
import { LeftArrow, List, ListChild, ListDiv } from "./CalculationList.styled";
import { ReactComponent as Products } from "../../../images/svg/Group 61.svg";
import { ReactComponent as Cocktail } from "../../../images/svg/cocktail 1.svg";
import { ReactComponent as Kite } from "../../../images/svg/kite 1.svg";
import { ReactComponent as Health } from "../../../images/svg/hands-holding-heart 1.svg";
import { ReactComponent as Car } from "../../../images/svg/car 1.svg";
import { ReactComponent as Couch } from "../../../images/svg/couch 1.svg";
import { ReactComponent as Tools } from "../../../images/svg/tools 1.svg";
import { ReactComponent as Bills } from "../../../images/svg/invoice 1.svg";
import { ReactComponent as Sport } from "../../../images/svg/clay 1.svg";
import { ReactComponent as Book } from "../../../images/svg/book 1.svg";
import { ReactComponent as Ufo } from "../../../images/svg/ufo 1.svg";

export const CalculationList = () => {

    const [text, setText] = useState(0);

    const handleChangOnInc = (e) => {
        setText(text + 1);
    }
    
    const handleChangOnSpend = (e) => {
        setText(text - 1);
    }

    return (
        <>
            <ListDiv>
                <LeftArrow type="submit" onClick={handleChangOnInc}></LeftArrow>
                {text === 0 ? 'Витрати' : 'Дохід'}
                <button type="submit" onClick={handleChangOnSpend}></button>

                <List>
                    <ListChild>
                        <p></p>
                        <Products/>
                        <p>Продукти</p>
                    </ListChild>
                    <ListChild>
                        <p></p>
                        <Cocktail/>
                        <p>Алкоголь</p>
                    </ListChild>
                    <ListChild>
                        <p></p>
                        <Kite/>
                        <p>Розваги</p>
                    </ListChild>
                    <ListChild>
                        <p></p>
                        <Health/>
                        <p>Здоров'я</p>
                    </ListChild>
                    <ListChild>
                        <p></p>
                        <Car/>
                        <p>Транспорт</p>
                    </ListChild>
                    <ListChild>
                        <p></p>
                        <Couch/>
                        <p>Все для дому</p>
                    </ListChild>
                    <ListChild>
                        <p></p>
                        <Tools/>
                        <p>Техніка</p>
                    </ListChild>
                    <ListChild>
                        <p></p>
                        <Bills/>
                        <p>Комуналка, зв'язок</p>
                    </ListChild>
                    <ListChild>
                        <p></p>
                        <Sport/>
                        <p>Спорт, хобі</p>
                    </ListChild>
                    <ListChild>
                        <p></p>
                        <Book/>
                        <p>Навчання</p>
                    </ListChild>
                    <ListChild>
                        <p></p>
                        <Ufo/>
                        <p>Інше</p>
                    </ListChild>
                </List>
            </ListDiv>
        </>
    )
}