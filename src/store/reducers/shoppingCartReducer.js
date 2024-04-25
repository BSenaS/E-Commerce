import { SHOPPING_CARD_ACTION_TYPES } from "../actions/shoppingCartAction";

const shoppingCardInitial = {
  cart: [],
  payment: {},
  address: {},
};

export const shoppingCartReducer = (state = shoppingCardInitial, action) => {
  switch (action.type) {
    case SHOPPING_CARD_ACTION_TYPES.setCartAction:
      return {
        ...state,
        cart: [
          ...state.cart,
          { count: action.payload.count, product: action.payload.product },
        ],
      };
    case SHOPPING_CARD_ACTION_TYPES.setPaymentAction:
      return { ...state, payment: action.payload };
    case SHOPPING_CARD_ACTION_TYPES.setAddressAction:
      return { ...state, address: action.payload };
    case SHOPPING_CARD_ACTION_TYPES.setUpdateCartItemCount: {
      const updatedCartItems = state.cart.map((item) =>
        item.product.id === action.payload.productId
          ? { ...item, count: action.payload.newCount }
          : item
      );
      return {
        ...state,
        cart: updatedCartItems,
      };
    }
    case SHOPPING_CARD_ACTION_TYPES.setRemoveFromCart:
      return {
        ...state,
        cart: state.cart.filter(
          (item) => item.product.id !== action.payload.productId
        ),
      };
    case SHOPPING_CARD_ACTION_TYPES.setClearCart:
      return { ...state, cart: [] };
    default:
      return state;
  }
};
