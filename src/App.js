import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./Layout";
import { Home } from "./pages/Home";
import { Successful } from "./pages/Successful";

const App = ()=>{
    return(
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path="/"             element={<Home />} />
                    <Route path="successful"    element={<Successful />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    )
}

export { App }