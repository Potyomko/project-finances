import { useSelector } from "react-redux";
import { selectIsLoggedIn, selectUser } from "../../redux/auth/selectors";
import { styled } from "styled-components"
import { Link } from "react-router-dom";
import logoImage from "../../images/logo.png";
import { useDispatch } from "react-redux"
import { logout } from "../../redux/auth/operations";
import Swal from 'sweetalert2'
import logoutImg from "../../images/logout.png"

const StyledHeader = styled.header`
    width: 320px;
    height: 56px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 60px;
    background-color: #fff !important;
    position: relative;

    @media(min-width: 768px){
        width: 768px;
    }

    @media(min-width: 1200px){
        width: 1280px;
    }
`;

const StyledLink = styled(Link)`
    font-family: Roboto, sans-serif;
    font-size: 16px;
    font-weight: 800;
    line-height: 18.75px;
    color: #000;
    text-decoration: none;
    position: absolute;
    z-index: 5;
`;

const LogoWrapper = styled.div`
    position: relative;
    top: -20%;
`;

const StyledImage = styled.img`
    position: absolute;
    top: -10px;
    left: -20px;
`;

const Wrapper = styled.div`
    width: 320px;
    margin-left: auto;
    margin-right: auto;

    @media(min-width: 768px){
        width: 768px;
    }

    @media(min-width: 1200px){
        width: 1280px;
    }
`;

const LogoutButton = styled.button`
    display: none;

    @media(min-width: 768px){
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
        width: 100px;
        height: 30px;
        cursor: pointer;
    }
`;

const Username = styled.p`

    display: none;

    @media(min-width: 768px){
        display: block;
        font-family: Roboto, sans-serif;
        font-size: 12px;
        font-weight: 400;
        line-height: 14px;
        color: #52555F;
        position: relative;

        &::after{
            content: "";
            position: absolute;
            height: 36px;
            border: 1px solid #E0E5EB;
            right: -15px;
            top: -10px;
        }
    }
`;

const LogoutWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;
`;

const Logout = styled.img`
    width: 16px;
    height: 16px;
    cursor: pointer;

    @media(min-width: 768px){
        display: none;
    }
`;

export default function Header(){

    const isLoggedIn = useSelector(selectIsLoggedIn)
    const user = useSelector(selectUser)
    const dispatch = useDispatch()

    const handleButtonClick = () => {
        Swal.fire({
            title: "Ви впевнені?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#FF751D",
            confirmButtonText: "ТАК",
            cancelButtonText: "НІ",
          }).then((result) => {
            if (result.isConfirmed) {
                dispatch(logout())
            }
          });
    }

    return(
        <Wrapper>
            <StyledHeader>
                <LogoWrapper>
                    <StyledImage src={logoImage} />
                    <StyledLink to={'/incomes'} >INVESTIQ</StyledLink>
                </LogoWrapper>
                <LogoutWrapper>
                    {isLoggedIn && (
                        <>
                            <Username>{user.username}</Username>
                            <LogoutButton onClick={handleButtonClick}>Вийти</LogoutButton>
                            <Logout src={logoutImg} onClick={handleButtonClick} />
                        </>
                    )}
                </LogoutWrapper>
            </StyledHeader>
        </Wrapper>
    )
}