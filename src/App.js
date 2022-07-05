import React from "react"
import { ProductList } from "./components/ProductList";
import { Layout } from "./Layout";
import { useSelector } from 'react-redux'
import { Modal } from "./components/Modal";

const App = ()=>{
    const openModal = useSelector(state=>state.ui.openModal);
    return(
        <Layout>
            <ProductList />
            {openModal && (<Modal />)}
        </Layout>
    )
}

export { App }