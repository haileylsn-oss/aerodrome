import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png"; // change to your real logo import

const Navbar = () => {
  return (
    <nav className="w-full bg-[#e9e7e5] px-5 py-3 flex items-center justify-between">
      {/* LEFT SIDE */}
      <div className="flex items-center gap-2">
        <img src={logo} alt="logo" className="w-10" />

        {/* Logo text visible ONLY on big screens */}
        <p className="hidden md:block text-xl font-semibold text-gray-800">
          AERODROME
        </p>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex items-center gap-6">

        {/* NAVLINKS — ONLY ON LARGE SCREEN */}
        <ul className="hidden md:flex items-center gap-6 text-gray-800 font-medium">
          <Link to="/wallet" className="hover:text-purple-600">Dashboard</Link>
          <Link to="/wallet" className="hover:text-purple-600">Swap</Link>
          <Link to="/wallet" className="hover:text-purple-600">Liquidity</Link>
          <Link to="/wallet" className="hover:text-purple-600">Vote</Link>
          <Link to="/wallet" className="hover:text-purple-600">Lock</Link>
          <Link to="/wallet" className="hover:text-purple-600">Incentivize</Link>
        </ul>

        {/* CONNECT + HAMBURGER BUTTON — BOTH INSIDE ONE BUTTON */}
        <Link
          to="/wallet"
          className="flex items-center gap-2  px-4 py-2 rounded-full  hover:bg-gray-100 transition "
        >
          {/* Orange Dot */}
          <span className="w-4 h-4 rounded-full bg-orange-400 border border-orange-200"></span>

          <span className="font-medium text-gray-800">Connect</span>

          {/* Hamburger icon */}
          <span className="flex flex-col gap-[3px]">
            <span className="w-4 h-[2px] bg-gray-800"></span>
            <span className="w-4 h-[2px] bg-gray-800"></span>
            <span className="w-4 h-[2px] bg-gray-800"></span>
          </span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
