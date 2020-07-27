import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ThemeContext } from "./contexts/ThemeContext";
import "./Navbar.css";

export default function Navbar(props) {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  return (
    <div className="container">
      <nav
        className={
          isDarkMode
            ? "navbar navbar-expand-lg PinkNavbar"
            : "navbar navbar-expand-lg BlueNavbar"
        }
      >
        <a className="navbar-brand text-info" href="#">
          Pokemon App
        </a>
        <button
          className=" navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <NavLink exact to="/pokemons" className="nav-link text-white">
                Pokemon List <span class="sr-only">(current)</span>
              </NavLink>
            </li>
            <li class="nav-item">
              <NavLink exact to="/types" className="nav-link text-white">
                Types <span className="sr-only"></span>
              </NavLink>
            </li>
          </ul>
          <span className="navbar-text text-white">
            <button
              onClick={toggleTheme}
              type="button"
              className="btn btn-info"
            >
              Theme
            </button>
          </span>
        </div>
      </nav>
    </div>
  );
}
