import React, { useState, useEffect } from "react";
import NavbarLogo from "../assets/Intersect.png";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ".././App.css";
import { Button, InputAdornment, TextField, Typography } from "@mui/material";
const ResponsiveNavbar = ({ items }) => {
  const [visibleItems, setVisibleItems] = useState([]);
  const [hiddenItems, setHiddenItems] = useState([]);
  const [dropdownState, setDropdownState] = useState(false);

  const handleDropdownClick = () => {
    setDropdownState(!dropdownState);
  };

  const debounce = (fn, delay) => {
    let timer;
    return function (...args) {
      clearTimeout(timer);
      let context = this;
      timer = setTimeout(() => {
        fn.apply(context, args);
      }, delay);
    };
  };
  useEffect(() => {
    const handleResize = () => {
      const navbar = document.getElementById("navbar");
      const navbarWidth = navbar.offsetWidth;
      const itemWidth = 80;
      const maxVisibleItems = Math.floor(navbarWidth / itemWidth);
      setVisibleItems(items.slice(0, maxVisibleItems));
      setHiddenItems(items.slice(maxVisibleItems));
      console.log("====> called");
    };
    handleResize();
    const betterFunction = debounce(handleResize, 300);
    window.addEventListener("resize", betterFunction);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="navbarContainer">
      <div className="navbarLogoParent">
        <img className="navbarLogo" src={NavbarLogo} alt="Navbar Logo" />
        <Typography className="navbarLogoText">E-COMM</Typography>
      </div>
      <nav id="navbar">
        <ul className="navitemsList">
          {visibleItems.map((item, index) => (
            <li className="navitem" key={index}>
              {item.toUpperCase()}
            </li>
          ))}
        </ul>
        {hiddenItems.length > 0 && (
          <>
            <div className="container">
              <div className="dropdown">
                <Typography
                  onClick={handleDropdownClick}
                  className="navitem iconholder"
                >
                  MORE
                  <KeyboardArrowDownIcon />
                </Typography>
                <div
                  className={`dropdown-items ${
                    dropdownState ? "isVisible" : "isHidden"
                  }`}
                >
                  {hiddenItems.map((item, index) => (
                    <div className="dropdown-item" key={index}>
                      <div className="dropdown__link">{item}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </>
        )}
      </nav>
      <TextField
        id="input-with-icon-textfield"
        variant="standard"
        placeholder="Search something"
        className="seacrhBox"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
    </div>
  );
};

export default ResponsiveNavbar;
