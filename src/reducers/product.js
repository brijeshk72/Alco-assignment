import {
    LOADPRODUCT,TOTALPRODUCT, ALLCATEGORY, CATNAME,SINGALPRODUCT,
}from '../constants/types';


export function ALLPRODUCT(state = null, action) {
    switch (action.type) {
      case LOADPRODUCT:
        return action.product;
      default:
        return state;
    }
  }


  export function PRODUCTCOUNT(state = 0, action) {
    switch (action.type) {
      case TOTALPRODUCT:
        return action.product;
      default:
        return state;
    }
  }

  export function LOADCATEGORY(state = null, action) {
    switch (action.type) {
      case ALLCATEGORY:
        return action.product;
      default:
        return state;
    }
  }

  export function CATEGORYNAME(state = null, action) {
    switch (action.type) {
      case CATNAME:
        return action.product;
      default:
        return state;
    }
  }

  export function PRODUCTBYID(state = null, action) {
    switch (action.type) {
      case SINGALPRODUCT:
        return action.product;
      default:
        return state;
    }
  }
