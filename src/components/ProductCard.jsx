import { useNavigate } from 'react-router-dom'
import '../scss/productCard.scss'
import { motion } from 'framer-motion'



export const ProductCard = (product) => {
    const token = JSON.parse(localStorage.getItem('token'))
    const { id, name, picture_url } = product.product
    const navigate = useNavigate()
    return (
        <motion.div className="card cardContainer"
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <h3 className="card-header">{name}</h3>
            <img src={picture_url} alt={name} />
            <button type="button" class="btn btn-primary my-3 btnDetail" onClick={()=> navigate(`/products/detail/${id}`)}>Detalle</button>
            {/* <DetailProduct product={product} token={token} /> */}
        </motion.div>
    )
}
