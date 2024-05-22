import { useDispatch, useSelector } from "react-redux";
import { BalanceForm, BalanceInput, BalanceSubmitButton, Title, Wrapper } from "./Balance.styled";
import { selectBalance } from "../../redux/balance/selectors";
import { selectUser } from "../../redux/auth/selectors";
import { changeBalance } from "../../redux/balance/operations";
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Balance(){

    const balance = useSelector(selectBalance)
    const user = useSelector(selectUser)
    const dispatch = useDispatch()

    const balanceNotify = () => toast.success('Баланс успішно змінено!', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
    });

    const errorNotify = () => toast.error('Введіть суму балансу!', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
    });

    const handleFormSubmit = (ev) => {
        ev.preventDefault()

        const form = ev.currentTarget

        if(form.elements.balance.value === ''){
            return errorNotify()
        }

        dispatch(changeBalance({
            email: user.email,
            balance: form.elements.balance.value,
        }))
        form.reset()
        balanceNotify()
    }

    return(
        <>
            <Wrapper>
                <Title>Баланс:</Title>
                <BalanceForm onSubmit={handleFormSubmit}>
                    <BalanceInput className="input" name="balance" placeholder={balance} />
                    <BalanceSubmitButton type="submit">ПІДТВЕРДИТИ</BalanceSubmitButton>
                </BalanceForm>
            </Wrapper>
            <ToastContainer position="top-right" />
        </>
    )
}