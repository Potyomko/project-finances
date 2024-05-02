import { useState } from "react";

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
                <button type="submit" onClick={handleChangOnInc}></button>
                {text === 0 ? 'Витрати' : 'Дохід'}
                <button type="submit" onClick={handleChangOnSpend}></button>
            </div>
        </>
    )
}