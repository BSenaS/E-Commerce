import {
  SET_ROLES,
  SET_CATEGORIES,
  SET_THEME,
  SET_LANG,
} from "../actions/globalActions.js";

const globalInitial = {
  roles: [],
  categories: [],
  theme: "",
  language: "",
};

export const globalReducer = (state = globalInitial, action) => {
  switch (action.type) {
    case SET_ROLES:
      return { ...state, roles: action.payload };
    case SET_CATEGORIES:
      return { ...state, categories: action.payload };
    case SET_THEME:
      return { ...state, theme: action.payload };
    case SET_LANG:
      return { ...state, language: action.payload };
    default:
      return state;
  }
};
