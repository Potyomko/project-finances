import { createBrowserRouter } from "react-router-dom";
import { App } from "./components/App"

export const router = createBrowserRouter(
    [
        {
            path: '/',
            element: <App/>,
            //errorElement: ?
            children: [
                {
                    element: '', //Home page
                    index: true
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
        }
    ]
)