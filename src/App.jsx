import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Footer } from "./Layout/Footer";
import { Header } from "./Layout/Header";
import { HomePage } from "./Pages/HomePage";
import { DataContextProvider } from "./context/DataContext";
import ProductListPage from "./Layout/ProductListPage/ProductListPage";
import ProductPage from "./Pages/ProductPage";
import AboutPage from "./Pages/AboutPage";
import TeamPage from "./Pages/TeamPage";
import ContactPage from "./Pages/ContactPage";
import SignUpPage from "./Pages/SignUpPage";
import { LoginPage } from "./Pages/LoginPage";
import { useEffect } from "react";
import { AxiosInstance } from "./axios/axiosInstance";

import { useDispatch } from "react-redux";
import { autoLoginAction } from "./store/actions/userAction";

function App() {
  const dispatch = useDispatch();
  //Auto login.
  useEffect(() => {
    //userAction içerisin de bulunan autologin fonksiyonu.
    dispatch(autoLoginAction());
  }, []);

  return (
    <>
      <DataContextProvider>
        <Header />
        <Routes>
          <Route exact path="/" element={<HomePage />}></Route>
        </Routes>
        <Routes>
          <Route exact path="/shop" element={<ProductListPage />}></Route>
        </Routes>
        <Routes>
          <Route exact path="/product" element={<ProductPage />}></Route>
        </Routes>
        <Routes>
          <Route exact path="/about" element={<AboutPage />}></Route>
        </Routes>
        <Routes>
          <Route exact path="/team" element={<TeamPage />}></Route>
        </Routes>
        <Routes>
          <Route exact path="/contact" element={<ContactPage />}></Route>
        </Routes>
        <Routes>
          <Route exact path="/signup" element={<SignUpPage />}></Route>
        </Routes>
        <Routes>
          <Route exact path="/login" element={<LoginPage />}></Route>
        </Routes>
        <Footer />
      </DataContextProvider>
    </>
  );
}

export default App;
