import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Products.css'
const Products = () => {
    const [products,setProducts] = useState([]);
    const [cart,setCart]= useState([]);
    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data.slice(0,15)))
    },[])
    const addToCart = (product) =>{
        const newCart = [...cart,product];
        setCart(newCart);
    }
    return (
        <div className='products-container'>
           <div className='products'>
               
                {
                    products.map(product => <Product 
                    key={product.id}
                    product={product}
                    addToCart={addToCart}></Product>)
                }
           </div>
           <div className='order'>
                <h1>Order Section</h1>
                <p>Selected Item:{cart.length}</p>

           </div>
        </div>
    );
};

export default Products;