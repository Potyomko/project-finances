import { styled } from "styled-components"
import heroBg from "../../../images/heroBg.png"
import heroBg2 from "../../../images/heroBg2.png"
import { Link } from "react-router-dom"
import { FcGoogle } from "react-icons/fc";
import { useDispatch } from "react-redux"
import { register } from "../../../redux/auth/operations";

const HeroSection = styled.div`
    background-color: #F5F6FB;
    height: 527px;
    background-image: url(${heroBg});
    background-repeat: no-repeat;
    background-position-x: center;
    background-position-y: 5%;
    border-bottom-left-radius: 200px;
    position: relative;
`

const Wrapper = styled.div`
    width: 1280px;
    height: calc(100vh - 56px);
    margin-left: auto;
    margin-right: auto;
    background-image: url(${heroBg2});
    background-repeat: no-repeat;
    background-position-x: 25%;
    background-position-y: 85%;
`

const TitleWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: 15%;
    left: 20%;
`;

const Title = styled.h1`
    color: #000;
    font-family: Roboto, sans-serif;
    font-weight: 900;
    font-size: 102px;
    line-height: 120px;
    margin: 0;
`;

const SubTitle = styled.p`
    color: #52555F;
    font-family: Roboto, sans-serif;
    font-weight: 700;
    font-size: 16px;
    line-height: 18.75px;
    letter-spacing: 3px;
    margin: 0;
`;

const FormWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 436px;
    height: 625px;
    position: absolute;
    background: #fff;
    border-radius: 20px;
    top: 21%;
    right: 8%;
    box-shadow: 0px 10px 60px 0px #AAB2C533;
    padding: 35px 80px;
`

const StyledParagraph = styled.p`
    color: #52555F;
    font-family: Roboto, sans-serif;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    letter-spacing: 0.5px;
`;

const StyledLabel = styled.label`
    color: #000;
    font-family: Roboto, sans-serif;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    letter-spacing: 0.5px;
`;

const StyledInput = styled.input`
    width: 265px;
    height: 52px;
    border-radius: 30px;
    padding-left: 30px;
    border: none;
    background: #F5F6FB;
    margin-bottom: 30px;
    margin-top: 10px;
    outline: none;

    &::placeholder {
        color: #AAB2C5;
        font-family: Roboto, sans-serif;
        font-weight: 400;
        font-size: 14px;
        line-height: 16px;
        letter-spacing: 0.5px;
    }
`;

const ButtonsWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const RegisterButton = styled.button`
    background: #FF751D;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-family: Roboto, sans-serif;
    font-weight: 700;
    font-size: 12px;
    line-height: 14px;
    letter-spacing: 0.5px;
    box-shadow: 1px 3px 5px 0px #FF6B0859;
    border: none;
    border-radius: 16px;
    width: 125px;
    height: 44px;
    cursor: pointer;
`;

const StyledLink = styled(Link)`
    background: #F5F6FB;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #52555F;
    font-family: Roboto, sans-serif;
    font-weight: 700;
    font-size: 12px;
    line-height: 14px;
    letter-spacing: 0.5px;
    box-shadow: 1px 3px 5px 0px #52555F26;
    border: none;
    border-radius: 16px;
    width: 125px;
    height: 44px;
    text-decoration: none;
    cursor: pointer;
`;

const GoogleButton = styled.button`
    width: 122px;
    height: 40px;
    border-radius: 26px;
    box-shadow: 1px 2px 3px 0px #AAB2C533;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    color: #000;
    font-family: Roboto, sans-serif;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    letter-spacing: 0.2px;
    margin-bottom: 20px;

    svg{
        width: 18px;
        height: 18px;
    }
`;

export default function RegisterPage(){

    const dispatch = useDispatch()

    const handleFormSubmit = (ev) => {
        ev.preventDefault();

        const form = ev.currentTarget
        dispatch(register({
            username: form.elements.username.value,
            email: form.elements.email.value,
            password: form.elements.password.value,
        }))
        form.reset()
    }

    return(
        <Wrapper>
            <HeroSection>
                <TitleWrapper>
                    <Title>InvestIQ</Title>
                    <SubTitle>SMART FINANCE</SubTitle>
                </TitleWrapper>
                <FormWrapper>
                    <StyledParagraph>Ви можете авторизуватися за допомогою акаунта Google</StyledParagraph>
                    <GoogleButton><FcGoogle />Google</GoogleButton>
                    <StyledParagraph>Або зареєструватись за допомогою ел. пошти та праолю</StyledParagraph>
                    <form onSubmit={handleFormSubmit}>
                        <StyledLabel>Ім'я:</StyledLabel>
                        <StyledInput name="username" placeholder="name" type="text" />
                        <StyledLabel>Електронна пошта:</StyledLabel>
                        <StyledInput name="email" placeholder="your@email" type="email" />
                        <StyledLabel>Пароль:</StyledLabel>
                        <StyledInput name="password" placeholder="password" type="password" />
                        <ButtonsWrapper>
                            <RegisterButton type="submit">ЗАРЕЄСТРУВАТИСЬ</RegisterButton >
                            <StyledLink to={'/login'}>УВІЙТИ</StyledLink>
                        </ButtonsWrapper>
                    </form>
                </FormWrapper>
            </HeroSection>
        </Wrapper>
    )
}