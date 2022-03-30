import React, { useEffect, useState } from 'react';
import CartItem from '../CartItem/CartItem';
import Product from '../Product/Product';
import { handleRandomization } from '../Utility/Utility';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart]=useState([]);
    // event handler
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);
    const cartHandler = (product) => {
        console.log(product);
        const newcart=[...cart,product];
        setCart(newcart);
    }
    const handleClearCart = () => {
        setCart([])
    }

    return (
        <div>
            <h1>Choose Your Dream Gadget</h1>
            <div className="shop-container">
                <div className='products-container'>
                    {
                        products.map(product => <Product key={product.id} product={product} cartHandler={cartHandler} ></Product>)
                    }
                </div>
                <div className='cart-container'>
                    <h3>Order Summary</h3>
                    <div className="order-container">
                        <h4>Selected items:{cart.length}</h4>
                        <div>
                             {
                    cart.map(cartItem =>
                        <CartItem
                            key={cartItem.id}
                            cartItem={cartItem}
                        />)
                }
                        </div>
                        <button onClick={()=>handleRandomization(cart,setCart)}>
                            <p>Choose One</p>
                        </button>
                        <button onClick={handleClearCart}>
                            <p>Choose Again</p>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Shop;