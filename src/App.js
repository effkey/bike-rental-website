import { Routes, Route, Navigate } from "react-router-dom";
import { Home } from "./pages/home/Home";
import { Details } from "./pages/details/Details";
import { Images } from "./pages/details/Images.js";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";
import { FetchProvider } from "./hooks/UseFetchContext";
import { AddProduct } from "./pages/addProduct/AddProduct";

function App() {
  return (
    <>
      <FetchProvider>
        <ShoppingCartProvider>
          <Routes>
            <Route exact path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/details" element={<Details />} />
            <Route path="/add" element={<AddProduct />} />
            {/* Routing z parametrem */}
            <Route path="/details/:id" element={<Details />} />
            <Route path="/details/:id/images" element={<Images />} />
          </Routes>
        </ShoppingCartProvider>
      </FetchProvider>
    </>
  );
}

export default App;
