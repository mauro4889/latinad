import { Route, Routes } from "react-router-dom"
import { Products } from "../pages/Products/Products"
import { NavBar } from "../components/NavBar"
import { CreateProduct } from "../pages/CreateProduct/CreateProduct"
import { UpdateProduct } from "../pages/UpdateProduct/UpdateProduct"
import { DetailProduct } from "../components/DetailProduct"



export const AppRoutes = () => {

    return (
        <>
            <NavBar />
            <Routes>
                <Route path="/products" element={<Products />} />
                <Route path="products/create_product" element={<CreateProduct/>}/>
                <Route path='products/update/:id' element={<UpdateProduct/>}/>
                <Route path='products/detail/:id' element={<DetailProduct/>}/>
            </Routes>
        </>
    )
}