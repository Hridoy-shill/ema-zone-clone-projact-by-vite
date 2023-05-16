import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTrashAlt} from '@fortawesome/free-solid-svg-icons'
import './ReviewProduct.css'
const ReviewProduct = ({ product, handleRemoveFromCart }) => {
    const { _id, img, name, price, quantity } = product;
    console.log(product);
    return (
        <div className='review-product'>
            <div className='first-part'>
                <img className='product-img' src={img} alt="" />
                <div className='product-info'>
                    <p className='product-title'>{name}</p>
                    <p className=''>Price:<span className='orange-text'>${price}</span></p>
                    <p className=''>Quantity:<span className='orange-text'>{quantity}</span></p>
                </div>
            </div>
            <div>
                <button onClick={() => handleRemoveFromCart(_id)} className='delete-btn'>
                    <FontAwesomeIcon className='delete-icon' icon={faTrashAlt} />
                </button>
            </div>
        </div>
    );
};

export default ReviewProduct;