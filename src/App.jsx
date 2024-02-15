import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Footer } from "./Layout/Footer";
import { Header } from "./Layout/Header";
import { HomePage } from "./Pages/HomePage";
import { DataContextProvider } from "./context/DataContext";

function App() {
  return (
    <>
      <DataContextProvider>
        <Header />
        <Routes>
          <Route exact path="/" element={<HomePage />}></Route>
        </Routes>
        <Footer />
      </DataContextProvider>
    </>
  );
}

export default App;
