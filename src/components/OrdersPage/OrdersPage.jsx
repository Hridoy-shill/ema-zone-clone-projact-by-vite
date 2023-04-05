import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import { useLoaderData } from 'react-router-dom';
import Product from '../Product/Product';
import ReviewProduct from '../ReviewProduct/ReviewProduct';
import './OrdersPage.css'
import { removeFromDb } from '../../utilities/fakedb';

const OrdersPage = () => {
    const SavedCart = useLoaderData()

    const [cart, setCart] = useState(SavedCart);
    
    const handleRemoveFromCart = (id) =>{
        const remaining = cart.filter(product => product.id !== id);
        setCart(remaining);
        removeFromDb(id)
    }

    console.log(SavedCart);
    return (
        <div className='shop-container'>
            <div className='review-container'>
                {
                    cart.map(product => <ReviewProduct key={product.id} product ={product} handleRemoveFromCart={handleRemoveFromCart}></ReviewProduct>)
                }
            </div>
            <div className='cart-container'>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default OrdersPage;