// importando outlet do react-router-dom
// importando navbar da minha pasta componentes
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

import "./App.css";

//função retorno, chamando outlet e a navbar, anteriormente importadas
function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;


