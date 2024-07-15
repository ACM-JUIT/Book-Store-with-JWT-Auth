import React, { useState } from "react";
import readingBookGrahic from "../../assets/readingBookGraphic.png";
import { Link, useNavigate } from "react-router-dom";
import "../signup/Signup.css";
import {
  signInFailure,
  signInStart,
  signinSuccess,
} from "../../redux/user/userSlice";
import { useSelector, useDispatch } from "react-redux";
import Spinner from "../../components/Spinner/Spinner";

function Signin() {
  const [formdata, setFormdata] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.user);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formdata.email || !formdata.password) {
      return dispatch(signInFailure("Please fill all the fields"));
    }
    try {
      dispatch(signInStart());
      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formdata),
      });
      const data = await res.json();
      if (data.success === false) {
        return dispatch(signInFailure(data.message));
      }
      if (res.ok) {
        dispatch(signinSuccess(data));
        navigate("/");
      }
    } catch (error) {
      dispatch(signInFailure(error.message));
    }
    setFormdata({});
  };
  const handleChange = (e) => {
    setFormdata({ ...formdata, [e.target.name]: e.target.value });
  };
  return (
    <div className="h-dvh flex flex-col lg:flex-row bg-[#F0A500]">
      <div className="w-full lg:w-5/12 flex flex-col gap-10 justify-center items-center">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col font-['Oswald'] gap-5 tracking-wider w-full h-full justify-center items-center "
        >
          <span className="text-5xl font-['Oswald'] font-semibold tracking-wider underline text-center">
            Sign In
          </span>
          <div className="flex flex-col">
            <label htmlFor="email">Email*</label>
            <input
              onChange={handleChange}
              type="email"
              name="email"
              id="email"
              placeholder="user@service.com"
              className="px-6 py-4 outline-none border-2 border-[#1B1A17] rounded-md font=['Poppins']  min-w-[300px] md:min-w-[400px] text-lg"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="password">Password*</label>
            <input
              onChange={handleChange}
              type="password"
              name="password"
              id="password"
              placeholder="password"
              className="px-6 py-4 outline-none border-2 border-[#1B1A17] rounded-md font=['Poppins']  min-w-[300px] md:min-w-[400px] text-lg"
            />
          </div>
          <div>
            <button
              type="submit"
              className="min-w-[300px] md:min-w-[400px] px-8 py-4 border-2 rounded-md text-white text-2xl font-['Oswald'] border-[#F0A500] my-2 bg-[#1B1A17] hover:bg-[#F0A500] hover:border-[#1B1A17] hover:tracking-[0.13em] transition-all duration-500 hover:text-black text-center hover:font-semibold"
            >
              {loading ? <Spinner /> : "Sign In"}
            </button>
          </div>
          <span className="text-xl">
            Dont have an account?&nbsp;
            <Link
              to="/signup"
              className="text-[#481E14] navlink font-semibold loginLink"
            >
              Sign Up
            </Link>
          </span>
        </form>
      </div>
      <div className="flex  min-w-[300px] w-full lg:w-1/2 h-1/3 md:h-1/2 lg:h-full items-center">
        <div className="aspect-square min-w-[100px] lg:min-w-[500px] w-[80%] h-[75%] m-auto rounded-[10%] flex justify-center">
          <img
            src={readingBookGrahic}
            alt=""
            className="aspect-square max-w-full max-h-full m-auto filter  drop-shadow-lg "
          />
        </div>
      </div>
    </div>
  );
}

export default Signin;
