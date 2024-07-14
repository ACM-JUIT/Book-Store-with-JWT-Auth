import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  const [formdata, setFormdata] = useState({ email: "" });
  const handleSubmit = (e) => {
    e.target.preventdefault;
    setFormdata({ email: "" });
  };
  return (
    <footer className="bg-[#1B1A17] text-white flex flex-col gap-5">
      <div className="flex flex-col justify-center items-center my-4 gap-5">
        <div>
          <Link
            to="/"
            className=" flex items-center text-3xl md:text-4xl font-['Playwrite_HU'] text-[#E6D5B8] font-semibold "
          >
            Books <span className="text-[#E45826]">Heaven</span>
          </Link>
        </div>
        <div className="font-['Poppins'] text-center">
          Get Handpicked book recommendations tailored to your tastes and
          interests!
        </div>
        <div>
          <form
            className="border-[#E6D5B8] border-2 p-0"
            onSubmit={handleSubmit}
          >
            <input
              value={formdata.email}
              onChange={(e) => setFormdata({ email: e.target.value })}
              className="bg-[#1B1A17] px-4 py-2 font-['Poppins'] border-0 outline-none"
              type="email"
            />
            <button
              className="font-semibold font-['Oswald'] px-4 py-2 bg-[#E6D5B8] text-[#1B1A17] hover:bg-[#F0A500] uppercase hover:tracking-[0.15em] transition-all duration-300 ease-in-out border-4 border-[#E6D5B8] hover:border-[#F0A500]"
              type="submit"
            >
              Join
            </button>
          </form>
        </div>
      </div>
      <div className="flex justify-center md:justify-evenly">
        <div className="w-full md:w-1/2 my-4 flex justify-center md:justify-evenly gap-10 md:gap-0">
          <div className="flex flex-col text-center gap-3 py-4 min-w-fit">
            <span className="uppercase underline underline-offset-8 font-bold tracking-[0.15em] font-['Oswald'] text-2xl mb-4">
              About
            </span>
            <Link className="w-fit navlink mx-auto">About Us</Link>
            <Link className="w-fit navlink mx-auto">Source Code</Link>
          </div>
          <div className="flex flex-col text-center gap-3 py-4 min-w-fit ">
            <span className="uppercase underline underline-offset-8 font-bold tracking-[0.15em] font-['Oswald'] text-2xl mb-4">
              Help
            </span>
            <Link className="w-fit navlink mx-auto">Contact</Link>
            <Link className="w-fit navlink mx-auto">Social Media</Link>
          </div>
        </div>

        <div className="hidden md:block w-1/2 px-8 py-4 my-4 font-['Poppins'] border-l-2 ">
          Welcome to Books Heaven, your premier online book store dedicated to
          bringing you the best in literature. Dive into a carefully curated
          selection spanning classics to contemporary bestsellers. Whether
          you're a fiction aficionado, a history buff, or seeking
          self-improvement, we're here to enhance your reading journey. Enjoy a
          seamless shopping experience and immerse yourself in the world of
          books with Books Heaven!
        </div>
      </div>
    </footer>
  );
}

export default Footer;
