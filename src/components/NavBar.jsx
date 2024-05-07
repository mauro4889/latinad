import React, { useEffect, useState } from 'react'
import latinad_logo from '../assets/latinad_logo.svg'
import { useUserStore } from '../store/useTokenStore'
import '../scss/navBar.scss'
import { NavLink } from 'react-router-dom'

export const NavBar = () => {
    const [name, setName] = useState('')
    const firstName = useUserStore((state) => state.firstName)

    useEffect(() => {
        setName(firstName)
    }, [firstName])

    const logOut = () => {
        localStorage.removeItem("token");
        window.location.reload();
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-light" data-bs-theme="light">
                <div className="container-fluid">
                    <img className='navbarImg' src={latinad_logo} alt="" />
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarColor03">
                        <div>
                            <NavLink to='/products'><p>Productos</p></NavLink>
                        </div>
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <span className='text-success-emphasis'>Hola <b>{name}</b></span>
                            </li>
                            <li>
                                <button className='border-0 mt-2 logOutBtn' onClick={logOut}><i class="fa-solid fa-arrow-right-from-bracket"></i></button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
