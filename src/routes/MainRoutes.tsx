import { lazy } from 'react';

// project imports
import MainLayout from "../layout/MainLayout";

const MainRoutes = {
    path: '/',
    element: <MainLayout />,
    children: [
        {
            path: '/',
            element: <></>
        },
    ]
}

export default MainRoutes