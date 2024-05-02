import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import { Login } from "../pages/Login/Login";





export const router = createBrowserRouter([
    {
        path: "/",
        element: <Login />,
    },
]);