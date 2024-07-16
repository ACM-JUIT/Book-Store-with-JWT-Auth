import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { signOutSuccess } from "../../redux/user/userSlice";

function Header() {
  const navLinkHoverEffect =
    "relative before:content-[''] before:absolute before:h-[3px] before:w-0  before:right-0 before:left-0 before:bottom-0 before:bg-black hover:before:w-full before:transition-[width] duration-700 ease-in-out";
  const { currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const signOut = async () => {
    try {
      const res = await fetch("/api/user/signout", {
        method: "POST",
      });
      const data = await res.json();
      if (!res.ok) {
        console.log(data.message);
      } else {
        dispatch(signOutSuccess());
      }
    } catch (error) {}
  };
  return (
    <header className="border-b-2 border-gray-400 flex justify-between">
      {/* start */}
      <div className="m-2 px-3 py-2 w-1/6 flex justify-start">
        {/* logo */}
        <Link
          to="/"
          className="flex items-center text-3xl md:text-4xl font-['Playwrite_HU'] text-[#1B1A17] font-semibold "
        >
          Books <span className="text-[#E45826]">Heaven</span>
        </Link>
      </div>
      {/* middle */}
      <div className="w-1/3 flex justify-evenly items-center gap">
        {/* Navlinks */}
        <div className="w-1/2 text-2xl font-['Oswald']">
          <ul className="w-full flex justify-evenly">
            <li>
              <Link to="/" className={navLinkHoverEffect}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className={navLinkHoverEffect}>
                About
              </Link>
            </li>
            <li>
              <Link to="/store" className={navLinkHoverEffect}>
                Store
              </Link>
            </li>
            <li>
              <Link to="/contact" className={navLinkHoverEffect}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
        {/* Searchbar */}
        <input
          type="text"
          placeholder="Search here"
          className="border-2 border-black px-4 py-2 rounded-md text-md font-['Poppins']"
        />
      </div>
      {/* end */}
      <div className="flex items-center w-1/6 justify-end">
        {currentUser ? (
          <Link
            onClick={signOut}
            className="border-2 border-black m-4 px-4 py-2 font-['Oswald'] text-2xl rounded-lg hover:bg-black hover:text-white hover:tracking-wider transition-all duration-300 ease-in-out"
          >
            Sign out
          </Link>
        ) : (
          <Link
            to="/signup"
            className="border-2 border-black m-4 px-4 py-2 font-['Oswald'] text-2xl rounded-lg hover:bg-black hover:text-white hover:tracking-wider transition-all duration-300 ease-in-out"
          >
            Sign Up
          </Link>
        )}
      </div>
    </header>
  );
}

export default Header;
