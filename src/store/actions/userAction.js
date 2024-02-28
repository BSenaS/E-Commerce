import { AxiosInstance } from "../../axios/axiosInstance";
import { ToastContainer, toast } from "react-toastify";

export const SET_USER = "SET_USER";
export const LOGIN_FAILURE = "LOGIN_FAILURE";
export const LOG_OUT = "LOG_OUT";

export const setUserActionCreator = (userData) => {
  return { type: SET_USER, payload: userData };
};

export const loginFailActionCreator = (errorData) => {
  return { type: LOGIN_FAILURE, payload: errorData };
};

export const logOutActionCreator = () => {
  return { type: LOG_OUT };
};

//When user logged in successfully, function will dispatch setUser(saves the user data in userState) and it will set token to localStorage. [This func will work on Login Component]
export const loginUserAction = (formData, navigate) => (dispatch, getState) => {
  AxiosInstance.post("/login", formData)
    .then((res) => {
      localStorage.setItem("token", res.data.token);
      toast.success(
        "Başarılı bir şekilde giriş yaptınız, 5sn içerisin de Anasayfaya yönlendirileceksiniz.",
        { position: "top-right" }
      );
      dispatch(setUserActionCreator(res.data));
      setTimeout(() => navigate("/"), 5000);
    })
    .catch((err) => {
      toast.error("Kullanıcı adı yada şifre hatalı.", {
        position: "top-right",
      });
      dispatch(loginFailActionCreator(err.response.data));
    });
};

//Autologin fonksiyonu.Localde token kayıtlı ise get isteği ile server dan kullanıcı bilgilerini alıp reducura set eder.
export const autoLoginAction = () => (dispatch, getState) => {
  const token = localStorage.getItem("token");
  console.log("ilk token", token);
  if (token) {
    AxiosInstance.get("/verify", {
      headers: {
        Authorization: token,
      },
    })
      .then((response) => {
        //if theres token, sets the userData to reducer.
        dispatch(setUserActionCreator(response.data));
        //token renewed.
        localStorage.setItem("token", token);
      })
      .catch((err) => {
        console.log("Login Hata", err);
      });
  }
};
