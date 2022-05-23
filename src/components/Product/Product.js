import React from 'react';
import './Product.css'
const Product = (props) => {
    console.log(props)
    const {name,id,img,price,ratings}=props.product;
    const {addToCart} = props;
    return (
        <div className='product'>
            <img src={img} alt=''/>
            <p>Name:{name}</p>
            <p>Price:{price}</p>
            <p>Ratings:{ratings}</p>
            <button onClick={()=>addToCart(props.product)} className='btn'>Add to Cart</button>
        </div>
    );
};

export default Product;