import React from 'react'
import {Link} from 'react-router-dom';
const ProductCard = ({product, grid}) => {
    // console.log("product", product)
    return (
        <div className={grid===true ? "col-md-4 m-0 p-0":null}>
            <div className="product-holder">
                <Link to={`/product-details/${product.id}`}>
                    <div className="img-holder">
                      <img src={product.image}  alt=""/>
                    </div>
                </Link>
                <div className="product-title">
                    <h4>{product.title}</h4>
                    <span>Rs.{product.price}</span>
                </div>
            </div>
        </div>
    )
}

export default ProductCard
