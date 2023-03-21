import React from 'react'
import './Modal.css'

const Modal = props => {
    if(!props.show){
        return null
    }
    return (
        <div className="modal" onClick={props.onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <div className='modal-header'>
                <h4 className="modal-title"> Hello!</h4>
                </div>
           
            <div className="modal-body">
                I'm Aly, a computer scientist at Northwestern University.
            </div>
            <div className="modal-footer">
                <button onClick={props.onClose} className="button">❌</button>
            </div>
        </div>
        </div>
    )
}
export default Modal