import React from "react";
import { Route, Routes } from "react-router-dom";
import Category from "./Category";
import Checkout from "./Checkout";
import Home from "./Home";
import Product from "./Product";

const RouterList = () => {
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/category" element={<Category/>}/>
            <Route path="/product" element={<Product/>}/>
            <Route path='/checkout' element={<Checkout/>}/>
        </Routes>
    )
}
export default RouterList