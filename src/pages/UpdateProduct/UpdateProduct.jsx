import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { NavLink, useNavigate, useParams } from 'react-router-dom'
import { Toaster, toast } from 'sonner'
import { updateProduct } from '../../utils/api/product'

export const UpdateProduct = () => {
    const { register, handleSubmit } = useForm()
    const [isToken, setIsToken] = useState()
    const { id } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        setIsToken(JSON.parse(localStorage.getItem("token")))
    })

    const onSubmit = async data => {
        const isCreated = await updateProduct(id, data, isToken)

        if (isCreated) {
            toast.success('Producto actializado correctamente', { type: 'success' });

            setTimeout(() => {
                navigate('/products');
            }, 2000);
        } else {
            toast.error('Error al actualizar el producto', { type: 'error' });
        }
    }
    return (
        <div className='createProductContainer'>
            <NavLink to='/products'><span className='spanIcon'><i class="fa-solid fa-person-walking-arrow-right"></i></span></NavLink>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='d-flex flex-column'>
                    <div className='containerInput'>
                        <label className="col-form-label ms-4 labelInput" for="inputDefault">Nombre</label>
                        <input type="text" class="form-control" id="inputDefault" {...register("name", { required: true })} />
                    </div>
                    <div className='containerInput'>
                        <label className="col-form-label mt-2 ms-4 labelInput" for="inputDefault">Descripción</label>
                        <input type="text" class="form-control" id="inputDefault" {...register("description", { required: true })} />
                    </div>
                    <div className='containerInput'>
                        <label className="col-form-label mt-2 ms-4 labelInput" for="inputDefault">Precio por día</label>
                        <input type="text" class="form-control" placeholder="USD" id="inputDefault" {...register("price_per_day", { required: true })} />
                    </div>
                    <div className='containerInput'>
                        <label className="col-form-label mt-2 ms-4 labelInput" for="inputDefault">Alto</label>
                        <input type="text" class="form-control" placeholder="10" id="inputDefault" {...register("resolution_height", { required: true })} />
                    </div>
                    <div className='containerInput'>
                        <label className="col-form-label mt-2 ms-4 labelInput" for="inputDefault">Ancho</label>
                        <input type="text" class="form-control" placeholder="10" id="inputDefault" {...register("resolution_width", { required: true })} />
                    </div>
                    <div className='containerInput'>
                        <label for="typeSelect" className="form-label mt-2 ms-4">Tipo</label>
                        <select class="form-select" id="typeSelect" {...register("type", { required: true })}>
                            <option value='indoor'>Indoor</option>
                            <option value='outdoor'>Outdoor</option>
                        </select>
                    </div>
                    <Toaster richColors />
                    <button type="submit" class="btn btn-outline-primary btnUpdate">Actualizar</button>
                </div>
            </form>
        </div>
    )
}
