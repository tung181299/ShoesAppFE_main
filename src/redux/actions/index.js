import {
  REQUEST_GET_PRODUCTS_IN_CART,
  GET_PRODUCTS_IN_CART_SUCCESS,
  GET_PRODUCTS_IN_CART_FAIL,
  REQUEST_GET_PRODUCT,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_FAIL,
  REQUEST_EDIT_PRODUCT_IN_CART,
  EDIT_PRODUCT_IN_CART_SUCCESS,
  EDIT_PRODUCT_IN_CART_FAIL,
} from './actionTypes';

//CART
export const request_get_products_in_cart = value => {
  return {
    type: REQUEST_GET_PRODUCTS_IN_CART,
    payload: value,
  };
};

export const get_products_in_cart_success = value => {
  return {
    type: GET_PRODUCTS_IN_CART_SUCCESS,
    payload: value,
  };
};

export const get_products_in_cart_fail = value => {
  return {
    type: GET_PRODUCTS_IN_CART_FAIL,
    payload: value,
  };
};

export const request_edit_product_in_cart = value => {
  return {
    type: REQUEST_EDIT_PRODUCT_IN_CART,
    payload: value,
  };
};

export const edit_product_in_cart_success = value => {
  return {
    type: EDIT_PRODUCT_IN_CART_SUCCESS,
    payload: value,
  };
};

export const edit_product_in_cart_fail = value => {
  return {
    type: EDIT_PRODUCT_IN_CART_FAIL,
    payload: value,
  };
};


//PRODUCT
export const request_get_products = value => {
  return {
    type: REQUEST_GET_PRODUCT,
    payload: value
  }
}

export const get_products_fail = value => {
  return {
    type: GET_PRODUCTS_FAIL,
    payload: value
  }
}

export const get_products_success = value => {
  return {
    type: GET_PRODUCTS_SUCCESS,
    payload: value
  }
}
