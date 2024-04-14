import { GlobalStyle } from "./GlobalStyle";
import Header from "./Header/Header";
import { Outlet } from "react-router-dom"
import { Calculation } from "./Calculations/Calcultion/Calculation";
import { Balance } from "./Balance/Balance/Balance";

export const App = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Calculation/>
      <Balance/>
    </div>
    </>
  );
};
