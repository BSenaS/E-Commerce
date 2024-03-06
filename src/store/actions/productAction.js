import { AxiosInstance } from "../../axios/axiosInstance";
export const PRODUCT_ACTION_TYPES = {
  setProductList: "SET_PRODUCT_LIST",
  setTotalProductCount: "SET_TOTAL_PRODUCT_COUNT",
  setPageCount: "SET_PAGE_COUNT",
  setActivePage: "SET_ACTIVE_PAGE",
  fetchState: "SET_FETCH_STATE",
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

export const fethingState = (fetchState) => {
  return { type: PRODUCT_ACTION_TYPES.fetchState, payload: fetchState };
};

export const fetchProducts = (filter, sort, id) => (dispatch) => {
  console.log("id burası", id);
  AxiosInstance.get("/products", {
    params: {
      filter: filter,
      sort: sort,
      category: id,
    },
  })
    .then((res) => {
      dispatch(setProductList(res.data));
      console.log("PRODUCTLAR", res.data);
    })
    .catch((err) => console.log(err));
};
