import { combineReducers } from 'redux';

import {ALLPRODUCT,PRODUCTBYID,PRODUCTCOUNT, LOADCATEGORY,CATEGORYNAME} from './product';
import {FETCHCART} from './cart';
export default combineReducers({
    ALLPRODUCT,
    PRODUCTBYID,
    PRODUCTCOUNT,
    LOADCATEGORY,
    CATEGORYNAME,
    FETCHCART,
});
