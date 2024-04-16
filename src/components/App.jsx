import Header from "./Header/Header";
import { Outlet } from "react-router-dom"

export const App = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};
