import {
  legacy_createStore as createStore,
  applyMiddleware,
  combineReducers,
} from "redux";
import { thunk } from "redux-thunk";
import logger from "redux-logger";
import { globalReducer } from "./reducers/globalReducer";
import { userReducer } from "./reducers/userReducer";
import { productReducer } from "./reducers/productReducer";
import { shoppingCartReducer } from "./reducers/shoppingCartReducer";
export const reducers = combineReducers({
  global: globalReducer,
  user: userReducer,
  product: productReducer,
  shoppingCart: shoppingCartReducer,
});

export const store = createStore(reducers, applyMiddleware(thunk, logger));
