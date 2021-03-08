import {
    CART,
}from '../constants/types';


export function FETCHCART(state = null, action) {
    switch (action.type) {
      case CART:
        return action.product;
      default:
        return state;
    }
  }
