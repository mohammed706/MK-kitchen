import "./Navbar.css";
import React from "react";
import { Link } from "react-router-dom";
import Searchbar from "./Searchbar";
import { useTheme } from "./../Hooks/useTheme";

function Navbar() {
  const { color, changeColor } = useTheme();
  return (
    <div className="navbar" style={{ background: color }}>
      <nav>
        <Link to="/" className="brand">
          <h1>MK Kitchen</h1>
        </Link>
        <Searchbar />
        <Link to="/create">Create New Recipe</Link>
      </nav>
    </div>
  );
}

export default Navbar;
