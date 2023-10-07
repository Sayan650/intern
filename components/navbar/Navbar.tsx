import React from "react";
import "@/app/home/home.css";

type Props = {};

function Navbar({}: Props) {
  return (
    <nav className="navbar flex justify-between items-center p-5 lg:ml-20 lg:mr-20">
      <div className="navbar-left w-32 md:w-40 mx-2 undefined">
        <img className="" src="logo.png" alt="Logo" />
      </div>
      <div className="navbar-middle">
        <ul className="flex m-0 p-0 list-none">
          <li className="block text-white align-middle pr-5">
            <a href="#home" className="opacity-40">
              Home
            </a>
          </li>
          <li className="block text-white align-middle pr-5">
            <a href="#about" className="opacity-40">
              About
            </a>
          </li>
          <li className="block text-white align-middle pr-5">
            <a href="#news" className="opacity-40">
              News
            </a>
          </li>
          <li className="block text-white align-middle pr-5">
            <a href="#blog" className="opacity-40">
              Blog
            </a>
          </li>
          <li className="block text-white align-middle pr-5">
            <a href="#academy" className="opacity-40">
              Academy
            </a>
          </li>
        </ul>
      </div>
      <div className="navbar-right">
        <button>Download Now</button>
      </div>
    </nav>
  );
}

export default Navbar;
