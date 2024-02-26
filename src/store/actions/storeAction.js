export const SET_SELLER_STORE = "SET_SELLER_STORE";

export const setSellerStore = (storeDetails) => {
  return { type: SET_SELLER_STORE, payload: storeDetails };
};
