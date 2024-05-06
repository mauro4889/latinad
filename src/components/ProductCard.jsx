import { useStore } from 'zustand'
import '../scss/productCard.scss'
import { deleteProducts } from '../utils/api/product'
import Swal from 'sweetalert2'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'


export const ProductCard = (product) => {
    const token = JSON.parse(localStorage.getItem('token'))
    const { id, name, description, type, picture_url, price_per_day, resolution_height, resolution_width } = product.product
    const navigate = useNavigate()
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
            confirmButton: "btn btn-success",
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
                        title: "Eliinado!",
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
        <div className="card mb-3 cardContainer">
            <h3 className="card-header">{name}</h3>
            <img src={picture_url} alt={name} />
            <div className="card-body border-top cardBodyContainer">
                <p className="card-text"> {description} </p>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">Precio por día: Usd{price_per_day}</li>
                <li className="list-group-item">Alto: {resolution_height} </li>
                <li className="list-group-item">Ancho: {resolution_width} </li>
                <li className="list-group-item">Tipo: {type} </li>
            </ul>
            <div className="card-footer text-muted d-flex justify-content-around">
                <button className='border-0' onClick={()=> navigate(`/products/update/${id}`)}><i class="fa-solid fa-pencil"></i></button>
                <button className='border-0' onClick={handleClick}><i class="fa-solid fa-trash"></i></button>
            </div>
        </div>
    )
}
