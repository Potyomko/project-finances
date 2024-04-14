import { createBrowserRouter } from "react-router-dom";
import { App } from "./components/App"
import LoginPage from "components/Auth/LoginPage/LoginPage";
import RegisterPage from "components/Auth/RegisterPage/RegistrationPage";
import PrivateRoute from "components/PrivateRoute";
import HomePage from "components/HomePage/HomePage";

export const router = createBrowserRouter(
    [
        {
            path: '/',
            element: <App />,
            //errorElement: ?
            children: [
                {
                    element: <PrivateRoute component={HomePage} redirectTo={'login'} />,
                    index: true
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
                    path: '/user-finances',
                    element: '', //A page with spendings and incomes
                    children: [
                        {
                            path: '/user-finances/incomes',
                            element: '', //An element with incomes
                        },
                        {
                            path: '/user-finances/spendings',
                            element: '', //An element with spendings
                        }
                    ]
                },
                {
                    path: '/user-finances-report',
                    element: '', //An element with user's report
                    children: [
                        {
                            path: '/user-finances-report/incomes',
                            element: '', //An element with user's income's report
                        },
                        {
                            path: '/user-finances-report/spendings',
                            element: '', //An element with user's spending's report
                        }
                    ]
                }
            ]
        },
    ]
)