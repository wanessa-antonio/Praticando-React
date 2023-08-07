//fazendo importações do react, react-router, react-icons
//usestate criação evento search
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BiCameraMovie, BiSearchAlt2 } from "react-icons/bi";


const Navbar = () => { 
  return (
    <nav id="navbar">
      <h2>
        <Link to="/">
          <BiCameraMovie /> MoviesLib
        </Link>
      </h2>
    
    </nav>
  );
};

export default Navbar;
