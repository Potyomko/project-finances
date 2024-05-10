import { useNavigate } from "react-router-dom";
import { Button } from "./GoBackButton.styled";


export const GoBackButton = () => { 
    const navigate = useNavigate()
    
    return <Button type="button" onClick={() => {navigate('/user-finances-report')}}>Перейти до розрахунків</Button>
}