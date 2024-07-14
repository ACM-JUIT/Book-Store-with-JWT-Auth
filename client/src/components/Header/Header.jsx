import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import "./Header.css";
import { useSelector } from "react-redux";

function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  const { currentUser } = useSelector((state) => state.user);
  const [profileBtn, setProfileBtn] = useState(false);
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
    <header className="px-4 py-2 flex  flex-wrap bg-[#1B1A17] text-white min-h-[100px] border-b-2 border-[rgba(230,213,184,0.2)]">
      <div className="w-1/3 flex justify-start">
        <Link
          to="/"
          className="flex items-center text-2xl  lg:text-4xl font-['Playwrite_HU']  text-[#E6D5B8] font-semibold hover:scale-105 transition-transform duration-300 ease-in-out"
        >
          Books <span className="text-[#E45826]">Heaven</span>
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
        <NavLink className="navlink" to="/contact">
          Contact
        </NavLink>
      </div>
      {currentUser ? (
        <div className="hidden md:flex justify-end w-1/3 items-center">
          <button>
            <img
              className="w-10 h-10 rounded-full"
              src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
              alt="pfp"
            />
          </button>
        </div>
      ) : (
        <div className="hidden md:flex justify-end w-1/3 items-center">
          <NavLink to="/signup">
            <button className="font-['Oswald'] text-2xl border-2 border-[#E6D5B8] hover:bg-[#F0A500] hover:tracking-[0.25em] bg-[#1B1A17] text-white uppercase px-[30px] duration-500 h-1/2 ">
              Sign Up
            </button>
          </NavLink>
        </div>
      )}
      <div className={`flex md:hidden items-center  justify-end w-2/3`}>
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
          <NavLink className="navlink" to="/contact">
            Contact
          </NavLink>

          {currentUser ? (
            <NavLink className="navlink" to="#">
              Profile
            </NavLink>
          ) : (
            <NavLink to="/signup">
              <button className="font-['Oswald'] text-2xl border-2 border-[#E6D5B8] hover:bg-[#F0A500] hover:tracking-[0.25em] bg-[#1B1A17] text-white uppercase px-[30px] duration-500">
                Sign Up
              </button>
            </NavLink>
          )}
        </div>
      )}
    </header>
  );
}

export default Header;
