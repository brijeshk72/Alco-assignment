import {
    LOADPRODUCT, SINGALPRODUCT,TOTALPRODUCT,ALLCATEGORY,CATNAME
}from '../constants/types';

import axios from 'axios';


export function productlist(data) {
    return {
      type: LOADPRODUCT,
      product: data,
    };
  }

  export function singalProduct(data) {

    return {
      type: SINGALPRODUCT,
      product: data,
    };
  }

  export function totalProduct(data) {
    return {
      type: TOTALPRODUCT,
      product: data,
    };
  }


  export function catList(data) {
    return {
      type: ALLCATEGORY,
      product: data,
    };
  }

  export function catName(data) {
    return {
      type: CATNAME,
      product: data,
    };
  }



  export function fetchProduct() {
    return async(dispatch) => {
     let pageNumber=1;
     
        axios.get(`https://fakestoreapi.com/products`)
        .then(function (response) {
          dispatch(totalProduct(response.data.length))
          dispatch(productlist(response.data.slice(((pageNumber-1)*3),((pageNumber*3)))))
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .then(function () {
          // always executed
        });
     
    };
  }

  export function fetchProductByPage(pageNumber) {
    return async(dispatch) => {
     
        axios.get(`https://fakestoreapi.com/products`)
        .then(function (response) {
          // handle success
          dispatch(totalProduct(response.data.length))
          dispatch(productlist(response.data.slice(((pageNumber-1)*3),((pageNumber*3)))))
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .then(function () {
          // always executed
        });
     
    };
  }

  export function productById(productId) {
    return async(dispatch) => {
        axios.get(`https://fakestoreapi.com/products/${productId}`)
        .then(function (response) {
          dispatch(singalProduct(response.data));
          dispatch(similarProduct(response.data.category))
         
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .then(function () {
          // always executed
        });
     
    };
  }


  export function fetureProduct() {
    return async(dispatch) => {
        axios.get(`https://fakestoreapi.com/products`)
        .then(function (response) {
          // handle success
          dispatch(productlist(response.data))
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .then(function () {
          // always executed
        });
     
    };
  }


  export function fetchCategory() {
    return async(dispatch) => {
     
        axios.get(`https://fakestoreapi.com/products/categories`)
        .then(function (response) {
          // handle success
        dispatch(catList(response.data))
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .then(function () {
          // always executed
        });
     
    };
  }

  export function productByCategory(category_slug) {
    return async(dispatch) => {
      let pageNumber=1
     
        axios.get(`https://fakestoreapi.com/products/category/${category_slug}`)
        .then(function (response) {
          // handle success
          dispatch(totalProduct(response.data.length))
          dispatch(productlist(response.data.slice(((pageNumber-1)*3),((pageNumber*3)))))
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .then(function () {
          // always executed
        });
     
    };
  }

  export function productByCategoryPage(category_slug,pageNumber) {
    return async(dispatch) => {
     
        axios.get(`https://fakestoreapi.com/products/category/${category_slug}`)
        .then(function (response) {
          // handle success
          dispatch(totalProduct(response.data.length))
          dispatch(productlist(response.data.slice(((pageNumber-1)*3),((pageNumber*3)))))
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .then(function () {
          // always executed
        });
     
    };
  }


  export function similarProduct(category_slug) {
    return async(dispatch) => {
     
        axios.get(`https://fakestoreapi.com/products/category/${category_slug}`)
        .then(function (response) {
          // handle success
          dispatch(productlist(response.data))
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .then(function () {
          // always executed
        });
     
    };
  }