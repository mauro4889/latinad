import React, { useEffect, useState } from 'react'
import latinad_logo from '../assets/latinad_logo.svg'
import { useUserStore } from '../store/useTokenStore'
export const NavBar = () => {
    const [name, setName] = useState('')
    const firstName = useUserStore((state) => state.firstName)
    
    useEffect(()=>{
        setName(firstName)
    },[firstName])

    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-light" data-bs-theme="light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#"><img src={latinad_logo} alt="" /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarColor03">
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item">
                                <a className="nav-link active" href="#">Productos</a>
                            </li>
                            <li className="nav-item">
                                <span className='text-success-emphasis'>Hola {name}</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
