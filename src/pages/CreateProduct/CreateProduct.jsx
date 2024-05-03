import '../../scss/createProduct.scss'

export const CreateProduct = () => {
    return (
        <div className='createProductContainer'>
            <form>
                <div className='d-flex flex-column'>
                    <div className='containerInput'>
                        <label className="col-form-label ms-4 labelInput" for="inputDefault">Nombre</label>
                        <input type="text" class="form-control" id="inputDefault" />
                    </div>
                    <div className='containerInput'>
                        <label className="col-form-label ms-4 labelInput" for="inputDefault">Descripción</label>
                        <input type="text" class="form-control" id="inputDefault" />
                    </div>
                    <div className='containerInput'>
                        <label className="col-form-label ms-4 labelInput" for="inputDefault">Precio por día</label>
                        <input type="text" class="form-control" placeholder="USD" id="inputDefault" />
                    </div>
                    <div className='containerInput'>
                        <label className="col-form-label ms-4 labelInput" for="inputDefault">Alto</label>
                        <input type="text" class="form-control" placeholder="10" id="inputDefault" />
                    </div>
                    <div className='containerInput'>
                        <label className="col-form-label ms-4 labelInput" for="inputDefault">Ancho</label>
                        <input type="text" class="form-control" placeholder="10" id="inputDefault" />
                    </div>
                    <div className='containerInput'>
                        <label for="typeSelect" className="form-label ms-4">Tipo</label>
                        <select class="form-select" id="typeSelect">
                            <option>Indoor</option>
                            <option>Outdoor</option>
                        </select>
                    </div>
                </div>
            </form>
        </div>
    )
}
