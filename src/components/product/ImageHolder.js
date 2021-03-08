import React from 'react'

const ImageHolder = ({product}) => {
    return (
        <div className="product-image">
            <img src={product.image} alt=""/>
        </div>
    )
}

export default ImageHolder
