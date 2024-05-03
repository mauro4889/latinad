import { Route, Routes } from "react-router-dom"
import { Products } from "../pages/Products/Products"
import { NavBar } from "../components/NavBar"
import { CreateProduct } from "../pages/CreateProduct/CreateProduct"



export const AppRoutes = () => {

    return (
        <>
            <NavBar />
            <Routes>
                <Route path="/products" element={<Products />} />
                <Route path="products/create_product" element={<CreateProduct/>}/>
            </Routes>
        </>
    )
}