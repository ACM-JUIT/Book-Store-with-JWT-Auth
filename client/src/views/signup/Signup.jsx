import React, { useState } from "react";
import authGraphic from "../../assets/auth.png";
import Button from "../../components/Button/Button";
import { Link } from "react-router-dom";
import "../../components/Footer/Footer.css";

function Signup() {
  const [formdata, setFormdata] = useState({});
  return (
    <div className="h-[90vh] flex bg-[#e6d5b8cc]">
      <div className="hidden md:flex w-7/12 bg-[#F0A500]  items-center rounded-r-[25%] overflow-hidden">
        <img src={authGraphic} alt="Auth" />
      </div>
      <div className="w-full md:w-5/12 flex flex-col gap-10 justify-center items-center">
        <span className="text-4xl font-['Oswald'] tracking-widest">
          Create Account
        </span>
        <form className="flex flex-col  items-center font-['Oswald'] gap-2 tracking-wider ">
          <div className="flex flex-col">
            <label htmlFor="username">Username*</label>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="username"
              className="px-4 py-2 outline-none border-2 border-black rounded-md font=['Poppins'] min-w-[300px]"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email">Email*</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="user@service.com"
              className="px-4 py-2 outline-none border-2 border-black rounded-md font=['Poppins']  min-w-[300px]"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="password">Password*</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="password"
              className="px-4 py-2 outline-none border-2 border-black rounded-md font=['Poppins']  min-w-[300px]"
            />
          </div>
          <div>
            <Button
              value="Sign Up"
              className="rounded-md min-w-[300px] py-2 mt-3 bg-[rgba(27,26,23,0.75)]"
            />
          </div>
          <span className="text-xl">
            Dont have an account?&nbsp;
            <Link to="/signin" className="text-[#481E14] navlink font-semibold">
              Sign In
            </Link>
          </span>
        </form>
      </div>
    </div>
  );
}

export default Signup;
