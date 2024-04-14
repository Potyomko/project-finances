import { ConfirmButton } from "../../Balance/ConfirmButton/ConfirmButton";
import { BalanceText } from "../../Balance/BalanceText/BalanceText";
import { BalanceCounter } from "../../Balance/BalanceCounter/BalanceCounter";


export const Balance = () => {

    return (
        <>
            <BalanceText/>
            <BalanceCounter/>
            <ConfirmButton/>
        </>
    )

}