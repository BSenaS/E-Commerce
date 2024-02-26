export const SHOPPING_CARD_ACTION_TYPES = {
  setCartAction: "SET_CART",
  setPaymentAction: "SET_PAYMENT",
  setAddressAction: "SET_ADDRESS",
};

export const setCart = (value) => {
  return { type: SHOPPING_CARD_ACTION_TYPES.setCartAction, payload: value };
};

export const setPayment = (value) => {
  return { type: SHOPPING_CARD_ACTION_TYPES.setPaymentAction, payload: value };
};

export const setAddress = (value) => {
  return { type: SHOPPING_CARD_ACTION_TYPES.setAddressAction, payload: value };
};
