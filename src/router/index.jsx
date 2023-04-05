import { createBrowserRouter } from "react-router-dom";

import LayoutPublic from "../layoutPublic/LayoutPublic";

import Cotizador from "../pages/Cotizador";
import Historial from "../pages/Historial";

import NoPage from "../pages/NoPage";
import Meters from "../pages/Meters";

export const router = createBrowserRouter([
    {
        path:'/',
        element: <LayoutPublic />,
        errorElement:<NoPage />,
        children:[
            {
                index: true,
                element: <Meters />
            },
            {
                path:'/cotizador',
                element: <Cotizador />
            },
            {
                path:'/historial',
                element: <Historial />
            },
        ]

    },


])