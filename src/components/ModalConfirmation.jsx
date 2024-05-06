import React from 'react'

export const ModalConfirmation = ({ showModal, closeModal, handleDelete }) => {
    if(!showModal) return null
    return (
        <div className='modal'>
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">¿Desea elimnar el producto?</h5>
                        <button type="button" className="btn-close" onClick={closeModal} data-bs-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true"></span>
                        </button>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-primary" onClick={handleDelete}>Si</button>
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={closeModal}>No</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
