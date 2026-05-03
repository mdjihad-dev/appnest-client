import React from "react";
import { Link, NavLink } from "react-router";
import logoImage from "../../../assets/Image/logo.png";
import { IoLogoGithub } from "react-icons/io";

const Header = () => {
  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `text-base font-semibold !bg-transparent ${
              isActive
                ? "text-[#632EE3] font-bold border-b-2 border-[#632EE3]"
                : "text-black hover:text-[#632EE3]"
            }`
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            `text-base font-semibold !bg-transparent px-10 ${
              isActive
                ? "text-[#632EE3] font-bold border-b-2 border-[#632EE3]"
                : "text-black hover:text-[#632EE3]"
            }`
          }
          to={"/apps"}
        >
          Apps
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            `text-base font-semibold !bg-transparent ${
              isActive
                ? "text-[#632EE3] font-bold border-b-2 border-[#632EE3]"
                : "text-black hover:text-[#632EE3]"
            }`
          }
          to={"/install"}
        >
          Installation
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 shadow-sm max-w-7xl mx-auto py-4">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <nav>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </nav>
        </div>

        <Link to={"/"} className="flex items-center gap-3">
          {/* Navbar logo */}
          <img
            className="w-10 h-auto object-contain"
            src={logoImage}
            alt="navbar logo"
          />

          {/* Brand Name */}
          <span className="text-xl font-bold tracking-tight">HERO.</span>
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        <a className="btn bg-primary text-white">
          <IoLogoGithub />
          Contribute
        </a>
      </div>
    </div>
  );
};

export default Header;
