import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import LandingPage from "./Componentes/LandingPage/LandingPage";
import Home from "./Componentes/Home/Home";
import FormPage from "./Componentes/FormPage/FormPage";
import Detail from "./Componentes/Detail/Detail";
import NavBar from "./Componentes/NavBar/NavBar";

const App = () => {
  const location = useLocation();
  return (
    <div className="appjs">
      {location.pathname !== "/" && <NavBar />}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/videogames" element={<Home />} />
        <Route path="/form" element={<FormPage />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </div>
  );
};

export default App;
