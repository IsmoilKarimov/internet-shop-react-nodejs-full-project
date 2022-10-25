import React from "react";
import { Route, Routes } from "react-router-dom";
import Category from "./Category";
import Checkout from "./Checkout";
import Favourite from "./Favourite";
import Home from "./Home";
import Product from "./Product";

const RouterList = () => {
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/category/:id" element={<Category/>}/>
            <Route path="/product/:id" element={<Product/>}/>
            <Route path='/checkout' element={<Checkout/>}/>
            <Route path='/favourite' element={<Favourite/>}/>
        </Routes>
    )
}
export default RouterList