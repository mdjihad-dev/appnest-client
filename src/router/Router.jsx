import { createBrowserRouter } from "react-router";
import RootLayout from "../layout/RootLayout";
import HomePage from "../pages/homePage/HomePage";
import AppsPage from "../pages/appsPage/AppsPage";
import Installation from "../pages/installation/Installation";
import DetailsPage from "../pages/detailsPage/DetailsPage";

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
            },
            {
                path: '/apps/:id',
                element: <DetailsPage/>,
            }
        ]
    }
])
export default router