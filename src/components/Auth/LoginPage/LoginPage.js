import { styled } from "styled-components"
import heroBg from "../../../images/heroBg.png"
import heroBg2 from "../../../images/heroBg2.png"
import { Link } from "react-router-dom"
import { FcGoogle } from "react-icons/fc";
import { login } from "../../../redux/auth/operations";
import { useDispatch, useSelector } from "react-redux"
import { selectError } from "../../../redux/auth/selectors";
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from "react";

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
    height: 535px;
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
    padding: 0 30px;
    border: none;
    background: #F5F6FB;
    margin-bottom: 40px;
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

const LoginButton = styled.button`
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

export default function LoginPage(){

    const dispatch = useDispatch()
    const error = useSelector(selectError)

    const formNotify = () => toast.error('Заповніть всі поля!', {
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
        ev.preventDefault();

        const form = ev.currentTarget
        if(form.elements.email.value === '' || form.elements.password.value === ''){
            return formNotify()
        }
        dispatch(login({
            email: form.elements.email.value,
            password: form.elements.password.value,
        }))
    }

    const errorNotify = () => toast.error('Неправильний пароль або email!', {
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

    useEffect(() => {
        if (error !== null) {
            errorNotify();
        }
    }, [error]);

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
                    <StyledParagraph>Або увійти за допомогою ел. пошти та паролю після реєстрації</StyledParagraph>
                    <form onSubmit={handleFormSubmit}>
                        <StyledLabel>Електронна пошта:</StyledLabel>
                        <StyledInput name="email" placeholder="your@email" type="email" />
                        <StyledLabel>Пароль:</StyledLabel>
                        <StyledInput name="password" placeholder="password" type="password" />
                        <ButtonsWrapper>
                            <LoginButton type="submit" >УВІЙТИ</LoginButton >
                            <StyledLink to={'/register'}>РЕЄСТРАЦІЯ</StyledLink>
                        </ButtonsWrapper>
                    </form>
                </FormWrapper>
            </HeroSection>
            <ToastContainer position="top-right" />
        </Wrapper>
    )
}