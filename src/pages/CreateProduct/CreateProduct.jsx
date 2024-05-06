import { useForm } from 'react-hook-form'
import '../../scss/createProduct.scss'
import { createProduct } from '../../utils/api/product'
import { useEffect, useState } from 'react'
import { Toaster, toast } from 'sonner'
import { NavLink } from 'react-router-dom'

export const CreateProduct = () => {
    const { register, handleSubmit, reset } = useForm()
    const [isToken, setIsToken] = useState()

    useEffect(() => {
        setIsToken(JSON.parse(localStorage.getItem("token")))
    })

    const onSubmit = async data => {
        const isCreated = await createProduct(data, isToken)

        if (isCreated) {
            reset()
            toast.success('Producto creado correctamente', { type: 'success' });
        } else {
            toast.error('Error al crear el producto', { type: 'error' });
        }
    }

    return (
        <div className='createProductContainer'>
            <NavLink to='/products'><span className='spanIcon'><i class="fa-solid fa-person-walking-arrow-right"></i></span></NavLink>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='formContainer'>
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
                    <Toaster richColors/>
                    <button type="submit" class="btn btn-outline-primary btnCreate">Crear</button>
                </div>
            </form>
        </div>
    )
}
