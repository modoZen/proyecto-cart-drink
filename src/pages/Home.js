import React from "react"
import { ProductList } from '../components/ProductList'
import { useSelector } from 'react-redux'
import { Modal } from "../components/Modal";

const Home = ()=>{
    const openModal = useSelector(state=>state.ui.openModal);
    return(
        <>
            <ProductList />
            {openModal && (<Modal />)}
        </>
    )
}

export { Home }