import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import LandingPage from "./Componentes/LandingPage/LandingPage";
import Home from "./Componentes/Home/Home";
import FormPage from "./Componentes/FormPage/FormPage";
import Detail from "./Componentes/Detail/Detail";
import NavBar from "./Componentes/NavBar/NavBar";


const App = () => {
  //useState de array para almacenar videojuegos de la API y BD

  //Mostrar 15 por pagina hasta llegar a 100

  //Funcion que haga peticion para traer los videojuegos de API Y BD

  //Componente Home
  //Debe renderizar la searchBar(esta en home), la info debe ir por props a ese componente
  //Debe renderizar las cards
  //Debe renderizar el paginado
const location = useLocation()
  return (
    <div>
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
