import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getProductById } from '../utils/api/product'
import '../scss/detailProduct.scss'
import Swal from 'sweetalert2'
import { Loader } from './Loader'

export const DetailProduct = () => {
    const [isToken, setIsToken] = useState()
    const [product, setProduct] = useState()
    const [loading, setLoading] = useState(false);

    const { id } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        const token = JSON.parse(localStorage.getItem('token'));
        setIsToken(token);
    }, []);

    useEffect(() => {
        console.log(isToken)
        if (isToken) {
            getProduct()
        }
    }, [isToken])

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const getProduct = async () => {
        setLoading(true);
        const data = await getProductById(id, isToken)
        if (data) {
            setLoading(false);
            await setProduct(data)
        }
    }

    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
            confirmButton: "btn btn-success ml-2",
            cancelButton: "btn btn-danger"
        },
        buttonsStyling: false
    });

    const handleClick = () => {
        swalWithBootstrapButtons.fire({
            title: "¿Quieres eliminar el producto?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Si",
            cancelButtonText: "No",
            reverseButtons: true
        }).then(async (result) => {
            if (result.isConfirmed) {
                const deleted = await deleteProducts(id, token);
                if (deleted) {
                    swalWithBootstrapButtons.fire({
                        title: "Eliminado!",
                        icon: "success"
                    }).then(() => {
                        window.location.reload();
                    });;
                }
            } else if (
                result.dismiss === Swal.DismissReason.cancel
            ) {
                swalWithBootstrapButtons.fire({
                    title: "Cancelado",
                    icon: "error"
                });
            }
        });
    }

    return (
        <div className="card mb-3 mt-2 detailCardContainer">
            <div className="card-body border-bottom titleContainer">
                <h5 className="card-title text-center"> {product?.name} </h5>
                <button className='border-0' onClick={() => navigate(`/products`)}><i class="fa-solid fa-x"></i></button>
            </div>
            <img className='imgDetail' src={product?.picture_url} alt={product?.name} />
            <div className="card-body border-top">
                <p className="card-text"> {product?.description} </p>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">Precio por día: Usd {product?.price_per_day}</li>
                <li className="list-group-item">Alto: {product?.resolution_height} </li>
                <li className="list-group-item">Ancho: {product?.resolution_width} </li>
                <li className="list-group-item">Tipo: {product?.type} </li>
            </ul>
            <div class="modal-footer footerDetail">
                <button className='border-0' data-bs-dismiss="modal" onClick={() => navigate(`/products/update/${id}`)}><i class="fa-solid fa-pencil"></i></button>
                <button className='border-0' onClick={handleClick}><i class="fa-solid fa-trash"></i></button>
            </div>
            {loading && <Loader />}
        </div>
    )
}
