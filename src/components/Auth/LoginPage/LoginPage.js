import { styled } from "styled-components"
import heroBg from "../../../images/heroBg.png"
import heroBg2 from "../../../images/heroBg2.png"
import { Link } from "react-router-dom"
import { login } from "../../../redux/auth/operations";
import { useDispatch, useSelector } from "react-redux"
import { selectError } from "../../../redux/auth/selectors";
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from "react";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";

const Wrapper = styled.div`
    
    height: calc(100vh - 56px);    

    @media(min-width: 768px){
        width: 768px;
        margin-left: auto;
        margin-right: auto;
        background-image: url(${heroBg2});
        background-repeat: no-repeat;
        background-position-x: 15%;
        background-position-y: 80%;
    }

    @media(min-width: 1200px){
        width: 1280px;
        background-position-x: 25%;
        background-position-y: 85%;
    }
`

const HeroSection = styled.div`
    background-color: #F5F6FB;
    position: relative;
    background-image: url(${heroBg});
    background-position-x: center;
    background-position-y: 5%;
    background-repeat: no-repeat;
    padding-top: 60px;

    height: 286px;

    display: flex;
    flex-direction: column;
    align-items: center;

    @media(min-width: 768px){
        border-bottom-left-radius: 200px;
        gap: 50px;
        height: 526px;
    }

    @media(min-width: 1200px){
        flex-direction: row;
        gap: 120px;
        justify-content: center;
        height: 526px;
        padding-top: 120px;
    }
`

const TitleWrapper = styled.div`

    @media(max-width: 767px){
        margin-bottom: 50px;
    }

    @media(min-width: 1200px){
        margin-top: 180px;
    }
`;

const Title = styled.h1`
    color: #000;
    font-family: Roboto, sans-serif;
    font-weight: 900;
    font-size: 64px;
    line-height: 75px;
    margin: 0;

    @media(min-width: 768px){
        font-size: 102px;
        line-height: 120px;
    }
`;

const SubTitle = styled.p`
    color: #52555F;
    font-family: Roboto, sans-serif;
    font-weight: 700;
    font-size: 13px;
    line-height: 15.25px;
    letter-spacing: 2px;
    margin: 0;

    @media(min-width: 768px){
        font-size: 16px;
        line-height: 18.75px;
        letter-spacing: 3px;
    }
`;

const FormWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 300px;
    height: 525px;
    background: #fff;
    border-radius: 20px;
    box-shadow: 0px 10px 60px 0px #AAB2C533;
    padding: 35px 40px;
    

    @media(min-width: 768px){
        width: 436px;
        height: 535px;
        padding: 35px 80px;
    }
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
    width: 253px;
    height: 52px;
    border-radius: 30px;
    padding: 0 20px;
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

    @media(min-width: 768px){
        width: 265px;
        height: 52px;
        padding: 0 30px;
        margin-bottom: 40px;
    }
`;

const ButtonsWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 15px;
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
                    <GoogleLogin 
                        onSuccess={res => {
                            const data = jwtDecode(res.credential)
                            dispatch(login({
                                email: data.email,
                            })) 
                        }}
                    />
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