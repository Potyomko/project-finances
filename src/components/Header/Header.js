import { useSelector } from "react-redux";
import { selectIsLoggedIn, selectUser } from "../../redux/auth/selectors";
import { styled } from "styled-components"
import { Link } from "react-router-dom";
import logoImage from "../../images/logo.png";
import { useDispatch } from "react-redux"
import { logout } from "../../redux/auth/operations";
import Swal from 'sweetalert2'

const StyledHeader = styled.header`
    width: 1280px;
    height: 56px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 60px;
    background: #fff;
    position: relative;
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
    width: 1280px;
    margin-left: auto;
    margin-right: auto;
`;

const LogoutButton = styled.button`
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
`;

const Username = styled.p`
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
`;

const LogoutWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;
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
                    <StyledLink to={'/'} >INVESTIQ</StyledLink>
                </LogoWrapper>
                <LogoutWrapper>
                    {isLoggedIn && (
                        <>
                            <Username>{user.username}</Username>
                            <LogoutButton onClick={handleButtonClick}>Logout</LogoutButton>
                        </>
                    )}
                </LogoutWrapper>
            </StyledHeader>
        </Wrapper>
    )
}