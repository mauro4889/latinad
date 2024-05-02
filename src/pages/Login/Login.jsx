import React, { useState } from 'react'
import '../../scss/login.sass'
import { useForm } from 'react-hook-form'
import login from '../../utils/api/login'
import { Loader } from '../../components/Loader'
import { useTokenStore } from '../../store/useTokenStore'




export const Login = () => {
    const { register, handleSubmit, reset } = useForm()
    const [loading, setLoading] = useState(false);
    const getToken = useTokenStore((state) => state.getToken)


    const onSubmit = async data => {
        setLoading(true);
        const loged = await login(data);
        console.log(loged.token)
        //getToken(data.token)
        setLoading(false);

        console.log(loged)
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
