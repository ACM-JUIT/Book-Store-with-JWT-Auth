import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Spinner from "../../components/Spinner/Spinner";
import { useDispatch, useSelector } from "react-redux";
import {
  signInStart,
  signInSuccess,
  signInFail,
} from "../../redux/user/userSlice";

function Signin() {
  const LinkHoverEffect =
    "relative before:content-[''] before:absolute before:h-[3px] before:w-0  before:right-0 before:left-0 before:bottom-0 before:bg-black hover:before:w-full before:transition-[width] duration-700 ease-in-out";
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { loading, error: errorMessages } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    if (!formData.email || !formData.password) {
      return dispatch(signInFail("Please Fill out all fields."));
    }
    try {
      dispatch(signInStart());
      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        return dispatch(signInFail(data.message));
      }
      if (res.ok) {
        dispatch(signInSuccess(data));
        navigate("/");
      }
    } catch (error) {
      dispatch(signInFail(error.message));
    }
  };
  return (
    <div className="bg-[#E9E9E9] h-[95dvh] flex items-center">
      <div className="bg-white h-[85%] w-[70%] mx-auto rounded-[50px] px-10 py-6 shadow-xl flex">
        {/* left */}
        <div className=" w-1/2 h-full flex flex-col">
          {/* Upper */}
          <div className="w-full h-4/6  flex flex-col justify-center">
            <div className="my-16 flex justify-center">
              <Link
                to="/"
                className="flex items-center text-5xl  font-['Playwrite_HU'] text-[#1B1A17] font-semibold "
              >
                Books <span className="text-[#E45826]">Heaven</span>
              </Link>
            </div>
            <span className="text-[3.5rem] uppercase text-wrap px-20 text-center font-['Oswald'] tracking-wider [word-spacing:20px]">
              Your gateway to a <br /> world of <br /> literature.
            </span>
          </div>
          {/* Lower */}
          <div className="w-full h-2/6  flex flex-col justify-center items-center gap-4">
            <span className="text-3xl font-bold">Don't have an Account?</span>
            <Link
              to="/signup"
              className={`text-2xl font-semibold  ${LinkHoverEffect}`}
            >
              Sign Up
            </Link>
          </div>
        </div>
        {/* right */}
        <div className="bg-[url('https://www.creativefabrica.com/wp-content/uploads/2021/10/29/Simple-Background-Design-Graphics-19387159-1.jpg')] w-1/2 h-full rounded-2xl shadow-xl flex justify-center items-center flex-col">
          {errorMessages && (
            <div className="bg-white text-red-600 text-3xl mb-8 p-6 rounded-xl shadow-xl mx-8">
              {errorMessages}
            </div>
          )}
          <div className="w-[65%] h-[55%] bg-white rounded-2xl shadow-2xl">
            <form
              onSubmit={handleSubmit}
              className="p-10 w-full flex flex-col justify-between"
            >
              <span className="text-2xl font-bold mb-7">Log In</span>
              <div>
                <div className="mb-6">
                  <label htmlFor="email" className="text-lg  font-['Poppins']">
                    Email
                  </label>
                  <input
                    onChange={handleChange}
                    value={formData.email}
                    id="email"
                    type="email"
                    placeholder="user@mail.com"
                    className="w-full p-2 my-4 border-b-2 border-black focus:outline-none"
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="password"
                    className="text-lg  font-['Poppins']"
                  >
                    Password
                  </label>
                  <input
                    onChange={handleChange}
                    value={formData.password}
                    id="password"
                    type="password"
                    placeholder="**********"
                    className="w-full p-2 my-4 border-b-2 border-black focus:outline-none"
                  />
                </div>
                <button type="submit" className="">
                  {loading ? <Spinner /> : "Log In"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signin;
