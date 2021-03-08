import React, {useEffect} from 'react';
import {fetchCategory,fetchProduct,productByCategory, catName} from './../../actions/product'
import {useDispatch, useSelector} from 'react-redux';
import { NavLink } from 'react-router-dom';


const Category = () => {
    const {LOADCATEGORY} = useSelector(state=>state);
       const dispatch=useDispatch();

    useEffect(()=>{
        dispatch(fetchCategory())
        
    },[dispatch])

    return (
        <div className="category-item">
            <NavLink to={`/shop?page=1`}>
                <span onClick={()=>{
                    dispatch(catName(null));
                dispatch(fetchProduct())
                }}>ALL</span>
            </NavLink>

        {LOADCATEGORY && LOADCATEGORY.length>0 ?
        
            LOADCATEGORY.map((category, index)=>{return(
                <NavLink to={`/shop/${category}?page=1`} key={index}>
                    <span onClick={()=>{
                    dispatch(catName(category));
                    dispatch(productByCategory(category))}}>{category}</span>
                </NavLink>
                
            )})
        :null
        }
                           
        </div>
    )
}

export default Category
