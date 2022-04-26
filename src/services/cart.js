import {
  mainAxios,
  API_GET_PRODUCTS_IN_CART,
  API_EDIT_PRODUCT_IN_CART,
} from '../api/api';
import {responseSuccess, responseFailed} from '../utils/dataResponseUtils';

export const getProductsInCart = data => {
  return new Promise((resolve, reject) => {
    mainAxios
      .get(API_GET_PRODUCTS_IN_CART + '/624e5889373f07aa1385232d', {
        params: {
          // page: data.page,
          // order_by_us: 'desc',
        },
      })
      .then(res => {
        let data = responseSuccess(res.data.products);
        resolve(data);
      })
      .catch(err => {
        let error = responseFailed(err);
        if (err.response.status == 400) {
          resolve([]);
        } else if (err.response.status == 403) {
          reject(403);
        } else {
          reject(error);
        }
      });
  });
};

export const updateProductInCart = dataReq => {
  console.log('REQ: ', dataReq);
  return new Promise((resolve, reject) => {
    console.log("path: ", API_EDIT_PRODUCT_IN_CART + `/${dataReq.userId}/${dataReq.productId}`);
    mainAxios
    .patch(API_EDIT_PRODUCT_IN_CART + `/${dataReq.userId}/${dataReq.productId}`,{ 
      quantity: dataReq.quantity 
    })
    .then(res => {
        getProductsInCart();
        let data = responseSuccess(res.data.products);
        resolve(data);
      })
      .catch(err => {
        let error = responseFailed(err);
        if (err.response.status == 403) {
          reject(403);
        } else {
          reject(error);
        }
      });
  });
};
