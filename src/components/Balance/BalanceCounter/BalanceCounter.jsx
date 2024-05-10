import { Box } from "./BalanceCounterBox.styled";
import { Counter } from "./BalanceCounter.styled";
import { selectBalance } from "../../../redux/balance/selectors";
import { useSelector } from "react-redux";

export const BalanceCounter = () => {

    const balance = useSelector(selectBalance)

    return <Box><Counter>{balance} UAH</Counter></Box>

}