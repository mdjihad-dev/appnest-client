import { createBrowserRouter } from "react-router";
import RootLayout from "../layout/RootLayout";
import HomePage from "../pages/homePage/HomePage";
import AppsPage from "../pages/appsPage/AppsPage";
import Installation from "../pages/installation/Installation";

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout/>,
        children: [
            {
                path: '/',
                element: <HomePage/>
            },
            {
                path: '/apps',
                element: <AppsPage/>
            },
            {
                path: '/install',
                element: <Installation/>
            }
        ]
    }
])
export default router