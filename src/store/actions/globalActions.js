import { AxiosInstance } from "../../axios/axiosInstance";
export const SET_ROLES = "SET_ROLES";
export const SET_CATEGORIES = "SET_CATEGORIES";
export const SET_THEME = "SET_THEME";
export const SET_LANG = "SET_LANG";

export const setRoles = (roles) => {
  return { type: SET_ROLES, payload: roles };
};

export const setCategories = (categories) => {
  return { type: SET_CATEGORIES, payload: categories };
};

export const setTheme = (theme) => {
  return { type: SET_THEME, payload: theme };
};

export const setLang = (lang) => {
  return { type: SET_LANG, payload: lang };
};

export const fetchRoles = () => (dispatch) => {
  AxiosInstance.get("/roles")
    .then((res) => {
      dispatch(setRoles(res.data));
    })
    .catch((err) => console.log(err));
};

export const fetchCategories = () => (dispatch) => {
  AxiosInstance.get("/categories")
    .then((res) => {
      dispatch(setCategories(res.data));
      console.log(res.data);
    })
    .catch((err) => console.log(err));
};
