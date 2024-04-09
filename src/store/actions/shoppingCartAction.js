export const SHOPPING_CARD_ACTION_TYPES = {
  setCartAction: "SET_CART",
  setPaymentAction: "SET_PAYMENT",
  setAddressAction: "SET_ADDRESS",
  setAddToCart: "ADD_TO_CART",
  setRemoveFromCart: "REMOVE_FROM_CART",
  setUpdateCartItemCount: "UPDATE_CART_ITEM_COUNT",
  setClearCart: "CLEAR_CART",
};

export const setCart = (count, product) => {
  return {
    type: SHOPPING_CARD_ACTION_TYPES.setCartAction,
    payload: { count, product },
  };
};

export const setPayment = (value) => {
  return { type: SHOPPING_CARD_ACTION_TYPES.setPaymentAction, payload: value };
};

export const setAddress = (value) => {
  return { type: SHOPPING_CARD_ACTION_TYPES.setAddressAction, payload: value };
};

export const removeFromCart = (productId) => {
  return {
    type: SHOPPING_CARD_ACTION_TYPES.setRemoveFromCart,
    payload: { productId },
  };
};

export const updateCartItemCount = (productId, newCount) => {
  return {
    type: SHOPPING_CARD_ACTION_TYPES.setUpdateCartItemCount,
    payload: { productId, newCount },
  };
};

export const clearCart = () => {
  return {
    type: SHOPPING_CARD_ACTION_TYPES.setClearCart,
  };
};
