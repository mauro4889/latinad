import React, { useEffect, useState } from 'react'
import '../../scss/products.scss'
import { getProducts } from '../../utils/api/product'
import { ProductCard } from '../../components/ProductCard'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { Loader } from '../../components/Loader'
import { DetailProduct } from '../../components/DetailProductModal'


export const Products = () => {
    const [isProducts, setIsProducts] = useState([])
    const [isToken, setIsToken] = useState()
    const [search, setSearch] = useState('')
    const [filterType, setFilterType] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate()

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
        const data = await getProducts(10, isToken);
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
                            <a className="dropdown-item" onClick={() => setFilterType('')}>Todos</a>
                            <a className="dropdown-item" onClick={() => setFilterType('outdoor')}>Outdoor</a>
                            <a className="dropdown-item" onClick={() => setFilterType('indoor')}>Indoor</a>
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
                    )}
            </motion.div>
            {loading && <Loader />}
        </div>
    )
}
