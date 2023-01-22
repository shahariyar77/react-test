import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from'../Product/Product'
import Cart from '../Cart/Cart';
const Shop = () => {
    const[products, setproducts]=useState([]);
    const[cart, setCart]=useState([])


    useEffect(()=>{
        fetch("products.JSON")
        .then(res=>res.json())
        .then(data => setproducts(data))
    },[])
    const hendleAddToCart=(product)=>{
        console.log(product)
        const newCart=[...cart,product]
        setCart(newCart)
    }
    return (
       <div className="shop-container">
        <div className="product-container">
           {
            products.map(product => <Product
               key={product.id}
                product={product}
                hendleAddToCart={hendleAddToCart}
            ></Product>)
           }
        </div>
        <div className="card-container">
         <Cart Cart={cart}></Cart>
        </div>
       </div>
    );
};

export default Shop;