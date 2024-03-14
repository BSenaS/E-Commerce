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
import { fetchCategories } from "./store/actions/globalActions";
import { fetchProducts } from "./store/actions/productAction";
import { ProductDetails } from "./Layout/productPage/ProductDetails";

function App() {
  const dispatch = useDispatch();
  //Auto login.
  useEffect(() => {
    //userAction içerisin de bulunan autologin fonksiyonu.
    dispatch(autoLoginAction());
    dispatch(fetchCategories());
    dispatch(fetchProducts());
  }, []);

  return (
    <DataContextProvider>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ProductListPage />} />
        <Route
          path="/:category/:productId/:productNameSlug"
          element={<ProductPage />}
        />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/shop/:gender/:category" element={<ProductListPage />} />
        <Route path="/shop/:filter" element={<ProductListPage />} />
        <Route path="/shop/:sort" element={<ProductListPage />} />
      </Routes>
      <Footer />
    </DataContextProvider>
  );
}

export default App;
