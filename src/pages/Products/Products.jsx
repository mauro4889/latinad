import React from 'react'
import '../../scss/products.scss'
import { NavLink } from 'react-router-dom'

export const Products = () => {
    return (
        <div className='productsContainer'>
            <div className="filterNav">
                <ul>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Filtrar</a>
                        <div className="dropdown-menu">
                            <a className="dropdown-item" href="#">Outdoor</a>
                            <a className="dropdown-item" href="#">Indoor</a>
                        </div>
                    </li>
                    <li>
                        <form>
                            <input className="form-control me-sm-2 searchInput" type="search" placeholder="Buscar" />
                        </form>
                    </li>
                </ul>
            </div>
            <div className="btnContainer">
                <NavLink to="create_product"><button type="button" class="btn btn-primary"><i class="fa-solid fa-plus"></i></button></NavLink>
            </div>
        </div>
    )
}
