import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Blog from "./components/Blog";
import Footer from "./components/Footer";
import footerImage from "/assets/pattern.png";
import Home from "./components/Home";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Blog" element={<Blog />} />
      </Routes>
      <Footer footerImage={footerImage} />
    </>
  );
}

export default App;
