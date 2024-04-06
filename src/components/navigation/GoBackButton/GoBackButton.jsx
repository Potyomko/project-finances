import { useNavigate } from "react-router-dom";

export const GoBackButton = () => {
    const navigate = useNavigate()
    
    return <button type="button" onClick={() => {navigate('/user-finances')}}></button>
}