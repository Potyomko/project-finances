import { useDispatch, useSelector } from "react-redux";
import Header from "./Header/Header";
import { Outlet } from "react-router-dom"
import { useEffect } from "react";
import { errorUpdate } from "../redux/auth/operations";
import { selectIsLoggedIn, selectUser } from "../redux/auth/selectors";
import { getIncomes } from "../redux/incomes/operations";
import { getSpendings } from "../redux/spendings/operations";
import { getBalance } from "../redux/balance/operations";

export const App = () => {

  const dispatch = useDispatch();
  const user = useSelector(selectUser)
  const isLoggedIn = useSelector(selectIsLoggedIn)

  useEffect(() => {
    dispatch(errorUpdate())
    if(isLoggedIn){
      dispatch(getIncomes({email: user.email}))
      dispatch(getSpendings({email: user.email}))
      dispatch(getBalance({email: user.email}))
    }
  }, [dispatch, isLoggedIn, user.email])

  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};
