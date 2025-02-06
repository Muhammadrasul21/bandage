import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Layout from "./layout/Layout";
import Detail from "./pages/detail/Detail";
import NotFound from "./pages/not-found/notFound";
import Wishlist from "./pages/wishlist/Wishlist";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/wishlist" element={<Wishlist />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
