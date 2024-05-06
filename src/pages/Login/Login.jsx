import React, { useState } from 'react'
import '../../scss/login.sass'
import { useForm } from 'react-hook-form'
import login from '../../utils/api/auth'
import { Loader } from '../../components/Loader'
import { useUserStore } from '../../store/useTokenStore'
import { Toaster, toast } from 'sonner'
import { useNavigate } from 'react-router-dom'


export const Login = () => {
    const { register, handleSubmit, reset } = useForm()
    const [loading, setLoading] = useState(false);
    const getName = useUserStore((state) => state.getName)
    const navigate = useNavigate();

    const onSubmit = async data => {
        setLoading(true);
        try {
            const loged = await login(data);
            const name = loged.name
            await getName(name.split(" ")[0])

            localStorage.setItem("token", JSON.stringify(loged.token))

            if (loged != null) {
                setLoading(false);
                navigate('/products')
                setLoading(false)
            }
        } catch (error) {
            setLoading(false);
            if (error.response && error.response.status === 401) {
                toast.error('Usuario o contraseña incorrectos')
            } else {
                toast.error('Error al iniciar sesión')
            }
        }
    }

    return (
        <div className="loginContainer">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="container">
                    <label htmlFor=""><i class="fa-regular fa-envelope"></i></label>
                    <input type="text" placeholder='Email' {...register("email", { required: true })} />
                </div>
                <div className="container">
                    <label htmlFor=""><i class="fa-solid fa-lock"></i></label>
                    <input type="password" placeholder='Contraseña' {...register("password", { required: true })} />
                </div>
                <div className="container">
                    <Toaster richColors />
                    <button className='btn btn-outline-primary'><span>Acceder</span></button>
                    {loading && <Loader />}
                </div>
            </form>
        </div>
    )
}
