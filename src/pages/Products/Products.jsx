import React, { useEffect, useState } from 'react'
import '../../scss/products.scss'
import { getProducts } from '../../utils/api/product'
import { ProductCard } from '../../components/ProductCard'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { Loader } from '../../components/Loader'
import { Pagination } from '../../components/Pagination'


export const Products = () => {
    const [isProducts, setIsProducts] = useState([])
    const [isToken, setIsToken] = useState()
    const [search, setSearch] = useState('')
    const [filterType, setFilterType] = useState('');
    const [loading, setLoading] = useState(false);
    const [productPerPage, setProductPerPage] = useState(6)
    const [currentPage, setCurrentPage] = useState(1)
    const totalProduct = isProducts.length
    const navigate = useNavigate()

    const lastIndex = currentPage * productPerPage
    const firstIndex = lastIndex - productPerPage

    useEffect(() => {
        const token = JSON.parse(localStorage.getItem('token'));
        setIsToken(token);
    }, []);

    useEffect(() => {
        if (isToken) {
            getListProducts();
        }
    }, [isToken]);

    const getListProducts = async () => {
        setLoading(true);
        const data = await getProducts(100, isToken);
        if (data) {
            setLoading(false);
            await setIsProducts(data.data);
        }

    };

    return (
        <div className='productsContainer mb-5'>
            <div className="filterNav">
                <ul>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Filtrar</a>
                        <div className="dropdown-menu">
                            <a className="dropdown-item" onClick={() => {
                                setFilterType('')
                                setCurrentPage(1)
                            }}>Todos</a>
                            <a className="dropdown-item" onClick={() => {
                                setFilterType('outdoor')
                                setCurrentPage(1)
                                }}>Outdoor</a>
                            <a className="dropdown-item" onClick={() => {
                                setFilterType('indoor')
                                setCurrentPage(1)
                                }}>Indoor</a>
                        </div>
                    </li>
                    <li>
                        <div className='groupFilterBar'>
                            <form>
                                <input onChange={(e) => setSearch(e.target.value)} className="form-control me-sm-2 searchInput" type="search" placeholder="Buscar" />
                            </form>
                            <button className='btn btn-outline-primary createBtn' onClick={() => navigate('/products/create_product')}><i class="fa-solid fa-plus"></i> Nuevo producto</button>
                        </div>
                    </li>
                </ul>
            </div>
            <motion.div className='products'>
                {isProducts
                    .filter((item) => {
                        if (filterType) {
                            return item.type === filterType;
                        }
                        return search.toLowerCase() === '' ? item : item.name.toLowerCase().includes(search.toLowerCase());
                    })
                    .map((product) => (
                        <ProductCard product={product} token={isToken} key={product.id} />
                    )
                    ).slice(firstIndex, lastIndex)}
            </motion.div>
            {loading && <Loader />}
            <Pagination
                productPerPage={productPerPage}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                totalProduct={totalProduct} />
        </div>
    )
}
