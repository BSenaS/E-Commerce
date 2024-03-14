import { AxiosInstance } from "../../axios/axiosInstance";
export const PRODUCT_ACTION_TYPES = {
  setProductList: "SET_PRODUCT_LIST",
  setTotalProductCount: "SET_TOTAL_PRODUCT_COUNT",
  setPageCount: "SET_PAGE_COUNT",
  setActivePage: "SET_ACTIVE_PAGE",
  setFetchState: "SET_FETCH_STATE",
  setCurrentProduct: "SET_CURRENT_PRODUCT",
};

export const setProductList = (product) => {
  return { type: PRODUCT_ACTION_TYPES.setProductList, payload: product };
};
export const setTotalProductCount = (productCount) => {
  return {
    type: PRODUCT_ACTION_TYPES.setTotalProductCount,
    payload: productCount,
  };
};

export const setPageCount = (pageCount) => {
  return { type: PRODUCT_ACTION_TYPES.setPageCount, payload: pageCount };
};

export const setActivePage = (activePage) => {
  return { type: PRODUCT_ACTION_TYPES.setActivePage, payload: activePage };
};

export const setFetchState = (fetchState) => {
  return {
    type: PRODUCT_ACTION_TYPES.setFetchState,
    payload: fetchState,
  };
};

export const currentProductAction = (data) => {
  return {
    type: PRODUCT_ACTION_TYPES.setCurrentProduct,
    payload: data,
  };
};

export const fetchProducts = (queryParams) => (dispatch) => {
  dispatch(setFetchState("FETCHING"));
  return new Promise((resolve, reject) => {
    AxiosInstance.get("/products", { params: queryParams })
      .then((res) => {
        const products = res.data;
        dispatch(setProductList(products));
        dispatch(setFetchState("FETCHED"));
        resolve();
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        dispatch(setFetchState("FAILED"));
        reject(error);
      });
  });
};
