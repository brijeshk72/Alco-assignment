import React from 'react';
import {useDispatch} from 'react-redux';

import {addCart} from './../../actions/cart'

const ProductInfo = ({product}) => {
    const dispatch=useDispatch();

    return (
        <div className="product-info">
        <h4>{product.title}</h4>
        <span className="price">Rs {product.price}</span>
        <p>{product.description}</p>
        <div className="quantity justify-content-between">
        <span className="minus">-</span>
        <span className="quantity-value">1</span>
        <span className="plus">+</span>
        </div>


        <button onClick={()=>{
            dispatch(addCart({
            userId:2,
            date:"2020-02-03",
            products:[{productId:5,quantity:1}]
        }))
            }
        } className="btn add-to-cart-button">
            Add To Cart
        </button>

        <button className="btn add-to-wishlist-button">
            Add To Cart
        </button>

    </div>
    )
}

export default ProductInfo
