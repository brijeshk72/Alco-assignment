import React, {useEffect}  from 'react';
import Category from '../../components/others/Category';
import {useDispatch, useSelector} from 'react-redux';
import {productById} from './../../actions/product';
import {useParams} from 'react-router-dom'; 
import ImageHolder from '../../components/product/ImageHolder';
import ProductInfo from '../../components/product/ProductInfo';
import ProductSlider from '../../components/product/ProductSlider';

const ProductWrap = () => {
    const {PRODUCTBYID, ALLPRODUCT} = useSelector(state=>state);
    const {productId} = useParams();
    const dispatch= useDispatch();

    useEffect(()=>{
       dispatch(productById(productId));
    },[productId, dispatch])

    return (
        <section>
        <div className="row">
            <div className="col-md-3">
                <div className="category">
                <h3>Category</h3>
                <hr/>
                   <Category />
                </div>
            </div>
            <div className="col-md-9">
                <div className="product-list">
                <div className="row">

                <div className="col-md-6">
                <ImageHolder product={PRODUCTBYID} />
                  
                </div>

                <div className="col-md-6">
                   
                <ProductInfo product={PRODUCTBYID} />

                </div>

            
                </div>

                </div>
            </div>
        </div>


 
        <div className="similar-product">
        <h3>Similar Product</h3>
        <ProductSlider products={ALLPRODUCT}/>
        </div>
             
    </section>
    )
}

export default ProductWrap
