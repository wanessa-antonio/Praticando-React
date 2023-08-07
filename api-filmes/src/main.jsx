//importando componentes do react e react-dom
// importando componentes do react-routerdom = para fazer rotas
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// importação da página App.jsx
import App from "./App";

// importação das pages jsx
import Home from "./pages/Home";
import Movie from "./pages/Movie";
import Search from "./pages/Search";

// importação .css estilo
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}> /
          <Route path="/" element={<Home />} />
          <Route path="movie/:id" element={<Movie />} />
          <Route path="search" element={<Search />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
// route element = componente pai 
// movie/:id = id dos filmes carregados individualmente
// rotas feitas baseadas no componente 