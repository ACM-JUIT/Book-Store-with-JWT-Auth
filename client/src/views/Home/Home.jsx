import React from "react";
import booksImg from "../../assets/books.png";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="h-fit">
      <div className="bg-blue-400 w-full h-[500px] flex mb-10">
        <span className="h-full w-1/2 text-5xl font-['Oswald'] text-white drop-shadow-xl text-wrap text-left flex justify-center items-center px-48">
          lorem ipsum dolor sit amet, consectetur adipiscing elit
        </span>
        <img src={booksImg} alt="" />
      </div>
      <div className="flex flex-col  h-[750px] justify-around items-center">
        <div className="w-2/3 h-[80%] ">
          <h1 className="text-5xl font-semibold text-center font-['Poppins'] mb-6">
            Top Sellers
          </h1>
          <div className="flex flex-row">
            <div className=" w-1/4 ml-4 cursor-pointer">
              <img
                src="https://m.media-amazon.com/images/I/71sBtM3Yi5L._SY466_.jpg"
                alt=""
                className="shadow-2xl"
              />
              <p className="text-lg font-semibold mt-4">
                The Power of Your Subconscious Mind
              </p>
              <p>&#x20b9; 275</p>
            </div>
            <div className=" w-1/4 ml-4 cursor-pointer">
              <img
                src="https://m.media-amazon.com/images/I/51sMJkf2YaL._SY445_SX342_.jpg"
                alt=""
                className="shadow-2xl"
              />
              <p className="text-lg font-semibold mt-4">Varchasva</p>
              <p>&#x20b9; 325</p>
            </div>
            <div className=" w-1/4 ml-4 cursor-pointer">
              <img
                src="https://m.media-amazon.com/images/I/5177eLEs+YL._SY445_SX342_.jpg"
                alt=""
                className="shadow-2xl"
              />
              <p className="text-lg font-semibold mt-4">THE SILENT PATIENT</p>
              <p>&#x20b9; 247</p>
            </div>
            <div className=" w-1/4 ml-4 cursor-pointer">
              <img
                src="https://m.media-amazon.com/images/I/41h1AktRBmL._SY445_SX342_.jpg"
                alt=""
                className="shadow-2xl"
              />
              <p className="text-lg font-semibold mt-4">
                Courage To Be Disliked
              </p>
              <p>&#x20b9; 322</p>
            </div>
          </div>
        </div>
        <div className="w-1/3 flex justify-center">
          <Link
            to="/store"
            className="border-2 border-black  px-6 py-4 font-['Oswald'] text-3xl font-bold rounded-lg hover:bg-blue-400 hover:text-white hover:tracking-wider transition-all duration-300 ease-in-out"
          >
            Explore Now
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
