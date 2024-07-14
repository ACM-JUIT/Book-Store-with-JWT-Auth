import React, { useState } from "react";
import readingBookGrahic from "../../assets/readingBookGraphic.png";
import { Link, useNavigate } from "react-router-dom";
import "./signup.css";
import {
  signInFailure,
  signInStart,
  signinSuccess,
} from "../../redux/user/userSlice";
import { useSelector, useDispatch } from "react-redux";
import Spinner from "../../components/Spinner/Spinner";

function Signup() {
  const [formdata, setFormdata] = useState({});
  const { loading, error } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormdata({ ...formdata, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formdata.username || !formdata.email || !formdata.password) {
      return dispatch(signInFailure("Please fill all the fields"));
    }
    try {
      dispatch(signInStart());
      const res = await fetch("/api/auth/signup", {
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
      setFormdata({});
      if (res.ok) {
        dispatch(signinSuccess(null));
        navigate("/signin");
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="h-dvh flex flex-col lg:flex-row bg-[#F0A500]">
      <div className="flex  min-w-[300px] w-full lg:w-1/2 h-1/3 md:h-1/2 lg:h-full items-center">
        <div className="aspect-square min-w-[100px] lg:min-w-[500px] w-[80%] h-[75%] m-auto rounded-[10%] flex justify-center">
          <img
            src={readingBookGrahic}
            alt=""
            className="aspect-square max-w-full max-h-full m-auto filter  drop-shadow-lg "
          />
        </div>
      </div>
      <div className="w-full lg:w-1/2 h-1/3 md:h-1/2 lg:h-full  flex flex-col gap-10 justify-center items-center">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col font-['Oswald'] gap-5 tracking-wider w-full h-full justify-center items-center "
        >
          <span className="text-5xl font-['Oswald'] font-semibold tracking-wider underline text-center mb-5">
            Create Account
          </span>
          <div className="flex flex-col">
            <label className="font-semibold text-2xl" htmlFor="username">
              Username*
            </label>
            <input
              onChange={handleChange}
              type="text"
              name="username"
              id="username"
              placeholder="username"
              className="px-6 py-4 outline-none border-2 border-[#1B1A17] rounded-md font=['Poppins'] min-w-[300px] md:min-w-[400px] text-lg"
            />
          </div>
          <div className="flex flex-col">
            <label className="font-semibold text-2xl" htmlFor="email">
              Email*
            </label>
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
            <label className="font-semibold text-2xl" htmlFor="password">
              Password*
            </label>
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
              {loading ? <Spinner /> : "Sign Up"}
            </button>
          </div>
          <span className="text-xl">
            Already have an account?&nbsp;
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
