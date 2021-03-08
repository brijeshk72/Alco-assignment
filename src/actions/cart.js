import {
    CART
}from '../constants/types';

import axios from 'axios';


export function cart(data) {
    return {
      type: CART,
      product: data,
    };
  }


  export function fetchCart() {
    return async(dispatch) => {
     
        axios.get('https://fakestoreapi.com/carts/user/2')
        .then(function (response) {
          dispatch(cart(response.data))
        })
        .catch(function (error) {
          console.log(error);
        })
        .then(function () {
          // always executed
        });
     
    };
  }

  export function addCart(obj) {
    return async(dispatch) => {
        axios.post('https://fakestoreapi.com/carts', obj)
        .then(function (response) {
          dispatch(fetchCart())
        })
        .catch(function (error) {
          console.log(error);
        })
        .then(function () {
        });
     
    };
  }

  export function updateCart(obj) {
    return async(dispatch) => {

        axios.put('https://fakestoreapi.com/carts', obj)
        .then(function (response) {
          dispatch(fetchCart())
        })
        .catch(function (error) {
          console.log(error);
        })
        .then(function () {
        });
     
    };
  }
