import React from "react";
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import './styles.scss'
import { clearProducs } from "../store/carReducer";

const Successful = ()=>{
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const submitHandler = (event)=>{
        event.preventDefault();
        console.info('lml');
        dispatch(clearProducs());
        navigate('/');
    }
    return(
        <div className="login">
            <div className="form-container">
                <form onSubmit={submitHandler} className="form">
                    <div>
                        <p htmlFor="password" className="label">Orden pedida, espero por favor</p>
                        <button type="submit" className="primary-button signup-button">Volver</button>
                    </div>
                </form>
                
            </div>
        </div>
    )
}

export { Successful }