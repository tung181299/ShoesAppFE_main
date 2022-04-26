import {
  REQUEST_GET_PRODUCTS_IN_CART,
  REQUEST_EDIT_PRODUCT_IN_CART
} from '../redux/actions/actionTypes';
import {put, takeEvery, takeLatest, call} from 'redux-saga/effects';
import * as actions from '../redux/actions/index';
import { getProductsInCart, updateProductInCart } from '../services/cart'

function* getProductsInCartAct(action) {
  try {
    console.log('getProductsInCartAct - action:', action);
    const res = yield call(getProductsInCart, action.payload);
    console.log('GET SUCCESS: ', res);
    yield put(actions.get_products_in_cart_success(res));
  } catch (error) {
    console.log('GET FAILED: ', error);
    yield put(actions.get_products_in_cart_fail(error));
    if (error == 403) {
      // let check = yield call(AlertExpiredToken);
      // if (check == 'OK') yield put(authActions.logout());
    } else {
      // yield call(wrappedAlert, 'Error', error);
    }
  }
}

function* editProductInCartAct(action) {
  try {
    console.log('editProductInCartAct - action:', action);
    const res = yield call(updateProductInCart, action.payload);
    console.log('GET SUCCESS: ', res);
    yield put(actions.edit_product_in_cart_success(res));
  } catch (error) {
    console.log('GET FAILED: ', error);
    yield put(actions.edit_product_in_cart_fail(error));
    if (error == 403) {
      // let check = yield call(AlertExpiredToken);
      // if (check == 'OK') yield put(authActions.logout());
    } else {
      // yield call(wrappedAlert, 'Error', error);
    }
  }
}

export function* cartSagas() {
  yield takeEvery(REQUEST_GET_PRODUCTS_IN_CART, getProductsInCartAct);
  yield takeEvery(REQUEST_EDIT_PRODUCT_IN_CART, editProductInCartAct);
}
