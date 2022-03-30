import React from 'react';
import './Product.css'
import { BsCartPlusFill } from "react-icons/bs"

const Product = ({cartHandler,product}) => {
    // destrucring
    const { name, img, price, brand } =product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className="product-details">
                <h3>Name:{name}</h3>
                <p>Price: ${price}</p>
                <p>Manufacturer:{brand}</p>
            </div>
            <button onClick={()=>cartHandler(product)} className='product-btn'>
                <p><span className='btn-text'>Add to cart</span><BsCartPlusFill /></p>
            </button>
        </div>
    );
}
export default Product;