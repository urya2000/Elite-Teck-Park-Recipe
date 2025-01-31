import React, { useState, useContext } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import "./Nav.css";

import { IoMenu } from "react-icons/io5";
import { HiMiniXMark } from "react-icons/hi2";

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
   
  //this used for count that fav length
  const favorites = useSelector((state) => state.recipe.favorites);
  const favLength = favorites.length > 0 ? favorites.length : 0;

  const handleNavLinkClick = () => {
    window.scrollTo({ top: "0 !important ", behavior: "smooth" });
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
    handleNavLinkClick();
  };

  const isActiveLink = (path) => location.pathname === path;

  return (
    <div className="background-banner">
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container">
          {/* Logo */}
          <NavLink className="navbar-brand" to="/">
            <h3 className="fs-3 theme-color fw-bold">PIZZA HUB</h3>
          </NavLink>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded={isMenuOpen ? "true" : "false"}
            aria-label="Toggle navigation"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <HiMiniXMark className="fs-1 fw-bold" />
            ) : (
              <IoMenu className="fs-1" />
            )}
          </button>

          <div
            className={`collapse navbar-collapse ${isMenuOpen ? "show" : ""}`}
            id="navbarNav"
          >
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <NavLink
                  className={`nav-link ${
                    isActiveLink("/") || isActiveLink("home")
                      ? "active-link"
                      : ""
                  }`}
                  to="/"
                  exact
                  onClick={handleLinkClick}
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={`nav-link ${
                    isActiveLink("/favorite") ? "active-link" : ""
                  }`}
                  to="/favorite"
                  onClick={handleLinkClick}
                >
                  Favorite<span className="fav-count">{favLength}</span>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="title-for-banner">
        <h1 className="text-center fw-bold">Explore Recipes</h1>
      </div>
    </div>
  );
}

export default Nav;
