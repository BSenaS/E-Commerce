import { SET_SELLER_STORE } from "../actions/storeAction";

const storeInitial = {
  sellerStore: {},
};

export const storeReducer = (state = storeInitial, action) => {
  switch (action.type) {
    case SET_SELLER_STORE:
      return { ...state, sellerStore: action.payload };
    default:
      return state;
  }
};
