import React from 'react'
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'
import '../scss/detailProduct.scss'
import { deleteProducts } from '../utils/api/product';

export const DetailProduct = ({product}, token) => {
    const { id, name, description, type, picture_url, price_per_day, resolution_height, resolution_width } = product.product;
    const navigate = useNavigate()
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
        <>
            <button type="button" class="btn btn-primary my-3 btnDetail" data-bs-toggle="modal" data-bs-target="#detailModal">Detalle</button>
            <div class="modal fade" id="detailModal" tabindex="-1" aria-labelledby="detailModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="detailModalLabel">{name}</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <img className='imgDetail' src={picture_url} alt={name} />
                            <div className="card-body border-top cardBodyContainer">
                                <p className="card-text"> {description} </p>
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">Precio por día: Usd {price_per_day}</li>
                                <li className="list-group-item">Alto: {resolution_height} </li>
                                <li className="list-group-item">Ancho: {resolution_width} </li>
                                <li className="list-group-item">Tipo: {type} </li>
                            </ul>
                        </div>
                        <div class="modal-footer footerDetail">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                            <button className='border-0' data-bs-dismiss="modal" onClick={() => navigate(`/products/update/${id}`)}><i class="fa-solid fa-pencil"></i></button>
                            <button className='border-0' onClick={handleClick}><i class="fa-solid fa-trash"></i></button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
