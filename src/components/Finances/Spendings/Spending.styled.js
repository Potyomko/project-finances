import styled from 'styled-components';
import calculator from '../../../images/calculator.png';
import 'react-toastify/dist/ReactToastify.css';


export const AddSpending = styled.form`
    display: flex;
    @media(min-width: 768px){
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 30px;
        margin-bottom: 50px;
    }

    @media(min-width: 1200px){
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 25px;
        margin-bottom: 60px;
    }
`;

export const DeleteIcon = styled.span`
width: 32px;
height: 32px;
display: flex;
justify-content: center;
align-items: center;
background-color: #fff;
border: none;
border-radius: 50%;
cursor: pointer;
`;

export const DateContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    color: #52555F;
    font-family: Roboto, sans-serif;
    font-weight: 900;
    font-size: 12px;
    line-height: 14px;
    letter-spacing: 0.5px;
    width: 100px;
    height: 44px;
`;

export const FormBox = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 28px;
`;

export const Form = styled.div`
    /* width: 600px;
    height: 44px;
    border: 2px solid #F5F6FB;
    border-radius: 16px 16px 16px 0;
    display: flex;
    justify-content: center;
    align-items: center; */

    @media(min-width: 768px){
        width: 467px;
        border-radius: 16px 16px 16px 0;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    @media(min-width: 1200px){
        width: 600px;
    }
`;

export const FormContainer = styled.div`
display: flex;

@media(min-width: 768px){
    flex-direction: row;
    gap: 30px;
}

@media(min-width: 1200px){
    flex-direction: row;
    justify-content: center;
    gap: 25px;
}
`;

export const Description = styled.input`
    width: 300px;
    height: 44px;
    border: none;
    outline: none;
    padding: 10px 20px;
    border: 1px solid #F5F6FB;
    border-radius: 16px 0 0 0;
    color: #52555F;
    font-family: Roboto, sans-serif;
    font-weight: 700;
    font-size: 12px;
    line-height: 14px;
    letter-spacing: 0.5px;
    

    &::placeholder {
        color: #C7CCDC;
        font-family: Roboto, sans-serif;
        font-weight: 400;
        font-size: 12px;
        line-height: 14px;
        letter-spacing: 0.5px;
    }
`;

export const Select = styled.select`
    width: 200px;
    height: 44px;
    border: none;
    outline: none;
    border: 1px solid #F5F6FB;
    color: #52555F;
    font-family: Roboto, sans-serif;
    font-weight: 700;
    font-size: 12px;
    line-height: 14px;
    letter-spacing: 0.5px;
    text-align: center;
`;

export const Option = styled.option`
    width: 100%;
    padding: 8px 12px;
    background-color: #F5F6FB;
    color: #52555F;
    font-family: Roboto, sans-serif;
    font-weight: 700;
    font-size: 12px;
    line-height: 14px;
    letter-spacing: 0.5px;
    text-align: center;
    border: none;
    outline: none;

    &:hover {
        background-color: #F5F6FB;
    }
`;

export const Amount = styled.input`
    width: 100px;
    height: 44px;
    border: none;
    outline: none;
    border: 1px solid #F5F6FB;
    border-radius: 0 16px 16px 0;
    color: #52555F;
    font-family: Roboto, sans-serif;
    font-weight: 700;
    font-size: 12px;
    line-height: 14px;
    letter-spacing: 0.5px;
    text-align: center;
    background-image: url(${calculator});
    background-repeat: no-repeat;
    background-position-x: 90%;
    background-position-y: 50%;

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    &::placeholder{
        color: #C7CCDC;
        font-family: Roboto, sans-serif;
        font-weight: 400;
        font-size: 12px;
        line-height: 14px;
        letter-spacing: 0.5px;
    }
`;

export const ButtonsContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
`;

export const ExpenseHeader = styled.div`
    padding: 0 10px;
    width: calc(100% - 40px);
    height: 40px;
    display: flex;
    align-items: center;
    color: #000;
    font-family: Roboto, sans-serif;
    font-weight: 700;
    font-size: 12px;
    line-height: 14px;
    letter-spacing: 0.5px;
    border-radius: 15px 15px 0 0;
    background-color: #F5F6FB;
    padding: 0 20px;
    width: 800px;
    justify-content: space-around;
`;

// export const ExpenseItem = styled.li`
//   height: 40px;
//   display: flex;
//   align-items: center;
//   justify-content: flex-start;
//   border-bottom: 2px solid #F5F6FB;
//   font-family: Roboto, sans-serif;
//   font-weight: 400;
//   font-size: 12px;
//   line-height: 14px;
//   letter-spacing: 0.5px;
//   color: #52555F;
//   margin-bottom: 0;
//   padding: 0 20px;

//   & > * {
//     flex-grow: 1;
//     text-align: left;
//   }

//   &:last-child {
//     justify-content: flex-end;
//   }

// `;

export const ExpenseItem = styled.li`
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border-bottom: 2px solid #F5F6FB;
  font-family: Roboto, sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.5px;
  color: #52555F;
  margin-bottom: 0;
  padding: 0 20px;

  @media(min-width: 768px){
        p{
            /* width: 120px; */
            text-align: center;
        }
    }

    @media(min-width: 1200px){
        p{
            /* width: 150px; */
            text-align: center;
        }
    }

  & > * {
    flex-grow: 1;
    text-align: left;
    overflow: hidden;
  }

  &:last-child {
    justify-content: flex-end;
  }
`;

export const Wrapper = styled.div`
    /* display: none; */

    @media(min-width: 768px){
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
`;

export const DescriptionText = styled.p`
  flex-grow: 2;
  overflow: hidden;
  word-break: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-align: center;
`;

// export const DateText = styled.p`
//   flex-grow: 1;
//   overflow: hidden;
//   word-break: break-word;
//   display: -webkit-box;
//   -webkit-line-clamp: 2;
//   -webkit-box-orient: vertical;
// `;


export const AmountContainer = styled.p`
    flex-grow: 1;
    text-align: center;
    color: #E7192E;
    font-weight: 700;
`;

export const AddButton = styled.button`
    width: 125px;
    height: 44px;
    border: none;
    border-radius: 16px;
    background-color: #FF751D;
    color: #fff;
    font-family: Roboto, sans-serif;
    font-weight: 700;
    font-size: 12px;
    line-height: 14px;
    letter-spacing: 0.5px;
    text-align: center;
    cursor: pointer;
`;

export const ClearButton = styled.button`
    width: 125px;
    height: 44px;
    border: 2px solid #F5F6FB;
    border-radius: 16px;
    background-color: #fff;
    color: #52555F;
    font-family: Roboto, sans-serif;
    font-weight: 700;
    font-size: 12px;
    line-height: 14px;
    letter-spacing: 0.5px;
    text-align: center;
    cursor: pointer;
`;


export const SpendingsContainer = styled.div`
    @media(min-width: 768px){
        display: flex;
        justify-content: center;
        align-items: flex-start;
        flex-direction: column;
        gap: 90px;
    }

    @media(min-width: 1200px){
        flex-direction: row;
        background-image: none;
        gap: 30px;
    }
`;

export const ExpenseWrapper = styled.div`
    width: 760px;
    height: 400px;
    border: 2px solid #F5F6FB;
    border-radius: 16px 16px 0px 0px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    overflow-y: auto;
    overflow-x: hidden;

    @media(min-width: 768px){
        width: 605px;
        height: 384px;
    }

    @media(min-width: 1200px){
        width: 760px;
        height: 400px;
        border: 2px solid #F5F6FB;
        border-radius: 16px 16px 0 0;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
    }
`;

export const TotalCost = styled.div`
    
    display: none;

    @media(min-width: 768px){
        width: 230px;
        height: 400px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        
        div:nth-last-child(1){
            border-bottom-right-radius: 16px;
        }
    }

`;

export const TotalCostTitle = styled.div`
    color: #000;
    font-family: Roboto, sans-serif;
    font-weight: 700;
    width: 100%;
    height: 40px;
    background-color: #F5F6FB;
    font-size: 12px;
    line-height: 14px;
    letter-spacing: 0.5px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
    border-bottom: 2px solid #fff;
`;

export const TotalCostItem = styled.div`
    color: #52555F;
    font-family: Roboto, sans-serif;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    letter-spacing: 1px;
    display: flex;
    width: 100%;
    height: 40px;
    background-color: #F5F6FB;
    justify-content: center;
    align-items: center;
    gap: 30px;
    border-top: 2px solid #fff;
    border-bottom: 2px solid #fff;
`;

export const SpendingContainer = styled.ul`
  margin: 0;
  padding: 0;
  width: 100%;
  max-height: 350px;
  overflow-y: auto;
  overflow-x: hidden;
  
  &::-webkit-scrollbar{
        padding-top:5px;
        width: 7px;
        cursor: pointer;
    }

    &::-webkit-scrollbar-track{
        background: #fff;
        border-radius: 25px;
        cursor: pointer;
    }

    &::-webkit-scrollbar-thumb{
        background: #FF751D;
        border-radius: 25px;
        cursor: pointer;
    }`