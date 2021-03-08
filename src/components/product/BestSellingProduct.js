import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetureProduct} from './../../actions/product'
import ProductSlider from './ProductSlider';

const BestSellingProduct = () => {
    const {ALLPRODUCT} = useSelector(state=>state);
       const dispatch=useDispatch();

       useEffect(()=>{
        dispatch(fetureProduct());
   
},[dispatch])

    return (
        <>
        <ProductSlider products={ALLPRODUCT}/>
        </>
    )
}

export default BestSellingProduct
