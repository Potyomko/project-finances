import { ConfirmButton } from "../../Balance/ConfirmButton/ConfirmButton";
import { BalanceText } from "../../Balance/BalanceText/BalanceText";
import { BalanceCounter } from "../../Balance/BalanceCounter/BalanceCounter";
import { GoBackButton } from "components/navigation/GoBackButton/GoBackButton"; 
import { BalanceWrapper, Container, BalanceContainer } from "./Balance.styled";


export const Balance = () => {

    return (
        <Container>
            <BalanceWrapper>
                <BalanceText/>
                <BalanceContainer>
                    <BalanceCounter/>
                    <ConfirmButton/>
                </BalanceContainer>
            </BalanceWrapper>
            <GoBackButton/>
        </Container>
    )

}