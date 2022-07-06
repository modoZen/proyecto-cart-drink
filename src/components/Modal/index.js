import React from 'react';
import ReactDOM from 'react-dom';
import { useDispatch } from 'react-redux'
import { toogleModal } from '../../store/uiReducer';
import './Modal.scss'

function Modal() {
    const dispatch = useDispatch();
    const onSubmit = (event) =>{
        event.preventDefault();
        dispatch(toogleModal())
    }
    return ReactDOM.createPortal(
        <div className="ModalBackground">
            <form onSubmit={onSubmit}>
                <label>Ya elegio este producto</label>
                <div className="TodoForm-buttonContainer">
                    <button
                        type="submit"
                        className="TodoForm-button TodoForm-button-add"
                    >Aceptar
                    </button>
                </div>
            </form>
        </div>
        ,
        document.getElementById('modal')
    );
}

export { Modal }