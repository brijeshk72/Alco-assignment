import React, {useEffect}  from 'react';
import Category from '../../components/others/Category';
import {useDispatch} from 'react-redux';
import {productById} from './../../actions/product';
import {useParams} from 'react-router-dom'; 
import CartList from '../../components/others/CartList';
const CartWrap   = () => {
    // const {PRODUCTBYID} = useSelector(state=>state);
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
               <CartList />
            </div>
        </div>
    </section>
    )
}

export default CartWrap
