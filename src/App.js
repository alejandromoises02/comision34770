import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { ItemListContainer } from "./Containers/ItemListContainer/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./Containers/ItemDetailContainer/ItemDetailContainer";
import { Cart } from "./Containers/CartView/Cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CustomProvider } from "./Context/CustomContext";
import { Dashboard } from "@mui/icons-material";

const App = () => {
  const mensaje = "Las mejores ofertas";

  

  return (
    <BrowserRouter>
      <CustomProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<ItemListContainer greeting={mensaje} />} />
          <Route
            path="/categoria/:id"
            element={<ItemListContainer greeting={mensaje} />}
          />
          <Route path="/producto/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart estilo={false} color={'blue'}/>} />
          <Route path="*" element={<ItemListContainer />} />
        </Routes>
      </CustomProvider>
    </BrowserRouter>
  );
};

export default App;
