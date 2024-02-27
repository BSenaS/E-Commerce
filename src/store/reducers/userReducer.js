import { LOGIN_FAILURE, LOG_OUT, SET_USER } from "../actions/userAction";
const userInitial = {
  userName: "",
  email: "",
  role_id: "",
  isLoggedIn: false,
  error: null,
};

export const userReducer = (state = userInitial, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        userName: action.payload.name,
        email: action.payload.email,
        role_id: action.payload.role_id,
        isLoggedIn: true,
        error: null,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoggedIn: false,
      };
    case LOG_OUT:
      return {
        ...state,
        userName: null,
        email: null,
        role_id: null,
        isLoggedIn: false,
        error: null,
      };
    default:
      return state;
  }
};
