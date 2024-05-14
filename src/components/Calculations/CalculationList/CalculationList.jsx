import { useState } from "react";
import { LeftArrow } from "./CalculationList.styled";

export const CalculationList = () => {

    const [text, setText] = useState(0);

    const handleChangOnInc = (e) => {
        setText(text === 1);
    }
    
    const handleChangOnSpend = (e) => {
        setText(text === 0);
    }

    return (
        <>
            <div>
                <LeftArrow type="submit" onClick={handleChangOnInc}></LeftArrow>
                {text === 0 ? 'Витрати' : 'Дохід'}
                <button type="submit" onClick={handleChangOnSpend}></button>
            </div>
        </>
    )
}