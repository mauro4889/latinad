import React, { useState } from 'react'
import '../../scss/login.sass'
import { useForm } from 'react-hook-form'
import login from '../../utils/api/login'
import { Loader } from '../../components/Loader'
import { useTokenStore } from '../../store/useTokenStore'
import { Toaster, toast } from 'sonner'
import { useNavigate } from 'react-router-dom'


export const Login = () => {
    const { register, handleSubmit, reset } = useForm()
    const [loading, setLoading] = useState(false);
    const getToken = useTokenStore((state) => state.getToken)
    const navigate = useNavigate();

    const onSubmit = async data => {
        setLoading(true);
        const loged = await login(data);
        await getToken(loged.token)
        setLoading(false);
        
        localStorage.setItem("token", JSON.stringify(loged.token))
        if(loged != null){
            navigate('/products')
        }
    }

    return (
        <div className="loginContainer">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="container">
                    <label htmlFor=""><i class="fa-regular fa-envelope"></i></label>
                    <input type="text" placeholder='Email' {...register("email", { required: true })}/>
                </div>
                <div className="container">
                    <label htmlFor=""><i class="fa-solid fa-lock"></i></label>
                    <input type="password" placeholder='Contraseña' {...register("password", { required: true })} />
                </div>
                <div className="container">
                    <button className='btn btn-outline-primary'><span>Acceder</span></button>
                    {loading && <Loader />}
                </div>
            </form>
        </div>
    )
}
