import { Route, Routes } from "react-router-dom"
import { Products } from "../pages/Products/Products"



export const AppRoutes = () => {

    return(
            <Routes>
                <Route path="/products" element={<Products/>} />
            </Routes>
    )
}