import React from "react";
import logo from "./logo.png";
import { Link } from "react-router-dom";

interface Props {}

const Navbar = (props: Props) => {
  return (
    <nav className="relative container mx-auto p-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-20">
          <Link to={"/"}>
            <img src={logo} alt="TickerTalk" style={{ height: '42px', width: '192px' }} />
          </Link>
          <div className="hidden font-bold lg:flex">
            <Link to="/search" className="text-black hover:text-darkPink">
              Dashboard
            </Link>
          </div>
        </div>
        <div className="hidden lg:flex items-center space-x-6 text-back">
          <div className="hover:text-darkPink">Login</div>
          <Link
            to=""
            className="px-8 py-3 font-bold rounded text-white bg-lightPink hover:opacity-70"
          >
            Signup
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;