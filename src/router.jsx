import { createBrowserRouter } from "react-router-dom";
import { App } from "./components/App"
import LoginPage from "components/Auth/LoginPage/LoginPage";
import RegisterPage from "components/Auth/RegisterPage/RegistrationPage";
import PrivateRoute from "components/PrivateRoute";
import FinancePage from "components/Finances/FinancePage/FinancePage";
import Incomes from "components/Finances/Incomes/Incomes";
import Spendings from "components/Finances/Spendings/Spendings";
import CalculationReport from "components/Calculations/CalculationReport/CalculationReport";

export const router = createBrowserRouter(
    [
        {
            path: '/',
            element: <App />,
            children: [
                {
                    path: '/',
                    element: <PrivateRoute component={FinancePage} redirectTo={'/login'} />,
                    children: [
                        {
                            path: '/incomes',
                            element: <PrivateRoute component={Incomes} redirectTo={'/login'} />,
                        },
                        {
                            path: '/spendings',
                            element: <PrivateRoute component={Spendings} redirectTo={'/login'} />,
                        }
                    ]
                },
                {
                    path: '/login',
                    element: <LoginPage />
                },
                {
                    path: '/register',
                    element: <RegisterPage />
                },
                {
                    path: '/user-finances-report',
                    element: <PrivateRoute component={CalculationReport} redirectTo={'/login'} />,
                }
            ]
        },
    ]
)