import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import { Link, useLoaderData } from 'react-router-dom';
import Product from '../Product/Product';
import ReviewProduct from '../ReviewProduct/ReviewProduct';
import './OrdersPage.css'
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';

const OrdersPage = () => {
    const SavedCart = useLoaderData()

    const [cart, setCart] = useState(SavedCart);
    
    const handleRemoveFromCart = (_id) =>{
        const remaining = cart.filter(product => product._id !== _id);
        setCart(remaining);
        removeFromDb(_id)
    }

    const handleClearCart = () =>{
        setCart([])
        deleteShoppingCart();
    }
    console.log(SavedCart);
    return (
        <div className='shop-container'>
            <div className='review-container'>
                {
                    cart.map(product => <ReviewProduct key={product._id} product ={product} handleRemoveFromCart={handleRemoveFromCart}></ReviewProduct>)
                }
            </div>
            <div className='cart-container'>
                <Cart cart={cart} handleClearCart={handleClearCart}>
                    <Link className='proceed-link' to={'/checkout'}><button className='btn-proceed'>Proceed Checkout</button></Link>
                </Cart>
            </div>
        </div>
    );
};

export default OrdersPage;