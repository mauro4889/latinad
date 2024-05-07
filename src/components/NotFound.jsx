import React from 'react'
import { NavLink } from 'react-router-dom'
import '../App.scss'

export const NotFound = () => {
    return (
        <div className="card notFoundCard">
            <div className="card-body">
                <h4 className="card-title">Página no encontrada</h4>
                <h6 className="card-subtitle mb-2 text-muted">Error 404</h6>
                <NavLink to={'/'}> <p>Login</p> </NavLink>
            </div>
        </div>
    )
}
