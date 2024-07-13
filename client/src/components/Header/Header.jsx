import React, { useState } from "react";
import logo from "../../assets/Logo.png";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import "./Header.css";
import Button from "../Button/Button";

function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  const menuOpenStyle = {
    width: "35px",
    height: "2px",
    backgroundColor: "black",
    margin: "6px 0",
    transition: "0.4s",
  };
  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <header className="px-4 py-2 flex  flex-wrap bg-[#1B1A17] text-white min-h-[100px] ">
      <div className="w-1/3 flex justify-start min-w-20">
        <Link to="/" className="flex items-center">
          <img src={logo} alt="logo" className="lg:max-h-12 md:max-h-8 " />
        </Link>
      </div>
      <div className="hidden md:flex justify-center  items-center gap-10 w-1/3">
        <NavLink className="navlink" to="/">
          Home
        </NavLink>
        <NavLink className="navlink" to="/about">
          About
        </NavLink>
        <NavLink className="navlink" to="/store">
          Store
        </NavLink>
      </div>
      <div className="hidden md:flex justify-end w-1/3">
        <Button value="Sign Up" to="/signup" />
      </div>
      <div className="flex md:hidden items-center w-2/3 justify-end">
        <div className="inline-block cursor-pointer" onClick={toggleMenu}>
          {openMenu ? <X size={35} /> : <Menu size={35} />}
        </div>
      </div>
      {openMenu && (
        <div className="md:hidden flex flex-col w-full items-center gap-3 mt-2">
          <NavLink className="navlink" to="/">
            Home
          </NavLink>
          <NavLink className="navlink" to="/about">
            About
          </NavLink>
          <NavLink className="navlink" to="/store">
            Store
          </NavLink>
          <NavLink className="signup">
            <Button value="Sign Up" to="/signup" />
          </NavLink>
        </div>
      )}
    </header>
  );
}

export default Header;
