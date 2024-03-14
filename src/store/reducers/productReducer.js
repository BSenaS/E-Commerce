import { PRODUCT_ACTION_TYPES } from "../actions/productAction";

const productInitial = {
  productList: [],
  totalProductCount: 0,
  pageCount: 0,
  activePage: 0,
  fetchState: "NOT_FETCHED",
  currentProduct: {},
};

export const productReducer = (state = productInitial, action) => {
  switch (action.type) {
    case PRODUCT_ACTION_TYPES.setProductList:
      return { ...state, productList: action.payload, fetchState: "FETCHED" };
    case PRODUCT_ACTION_TYPES.setTotalProductCount:
      return { ...state, totalProductCount: action.payload };
    case PRODUCT_ACTION_TYPES.setPageCount:
      return { ...state, pageCount: action.payload };
    case PRODUCT_ACTION_TYPES.setActivePage:
      return { ...state, activePage: action.payload };
    case PRODUCT_ACTION_TYPES.setFetchState:
      return {
        ...state,
        fetchState: action.payload,
      };
    case PRODUCT_ACTION_TYPES.setCurrentProduct:
      return { ...state, currentProduct: action.payload };
    default:
      return state;
  }
};
