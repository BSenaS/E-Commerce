import { SHOPPING_CARD_ACTION_TYPES } from "../actions/shoppingCartAction";

const shoppingCardInitial = {
  cart: {},
  payment: {},
  address: {},
};

export const shoppingCartReducer = (state = shoppingCardInitial, action) => {
  switch (action.type) {
    case SHOPPING_CARD_ACTION_TYPES.setCartAction:
      return { ...state, cart: action.payload };
    case SHOPPING_CARD_ACTION_TYPES.setPaymentAction:
      return { ...state, payment: action.payload };
    case SHOPPING_CARD_ACTION_TYPES.setAddressAction:
      return { ...state, address: action.payload };
    default:
      return state;
  }
};
