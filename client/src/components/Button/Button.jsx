import React from "react";
import { Link } from "react-router-dom";

function Button({ value, to }) {
  return (
    <Link
      to={to}
      className="flex justify-center relative bg-[#1B1A17] text-white uppercase text-2xl font-['Oswald'] font-normal px-[30px] duration-500 hover:tracking-[0.25em] hover:bg-[#F0A500] border-[#E6D5B8] border-2  "
    >
      <span className="flex items-center ">{value}</span>
    </Link>
  );
}

export default Button;
