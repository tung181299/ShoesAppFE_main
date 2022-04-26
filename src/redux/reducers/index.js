import { combineReducers } from "redux";
import cartReducers from "./cartReducers";
import productReducers from './productReducers';

const allReducers = combineReducers({
  cartReducers,
  productReducer: productReducers,
})

export default allReducers;