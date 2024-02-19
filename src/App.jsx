import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Footer } from "./Layout/Footer";
import { Header } from "./Layout/Header";
import { HomePage } from "./Pages/HomePage";
import { DataContextProvider } from "./context/DataContext";
import ProductListPage from "./Layout/ProductListPage/ProductListPage";
import ProductPage from "./Pages/ProductPage";
import AboutPage from "./Pages/AboutPage";

function App() {
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
        <Footer />
      </DataContextProvider>
    </>
  );
}

export default App;
