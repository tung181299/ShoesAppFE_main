import {all} from 'redux-saga/effects';
import { cartSagas } from './cartSagas';
import {productSagas} from './productSagas';

export default function* rootSaga() {
  yield all([cartSagas(), productSagas()]);
}
