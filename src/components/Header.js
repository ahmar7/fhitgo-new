import { NavLink } from "react-router-dom";
import logo from "../assets/img/logo.png";
import menu_bar from "../assets/img/menu-bar.svg";
import React, { useState } from "react";
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const links = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "About",
      link: "/About",
    },
    {
      title: "Services",
      link: "/Services",
    },
    {
      title: "Industry",
      link: "/industry",
    },
    {
      title: "Firebase",
      link: "/Firebase",
    },
    {
      title: "Contact Us",
      link: "/Contact",
    },
  ];
  return (
    <div className="flex z-10 justify-between items-center w-full h-[60px] py-2 md:px-4 text-white bg-white fixed nav">
      <div>
        <h1 className="font-signature ml">
          <NavLink to="/">
            <img src={logo} height={30} width={100} />
          </NavLink>
        </h1>
      </div>
      <ul className="hidden md:flex transition-all">
        {links.map(({ title, link }) => (
          <li
            key={title}
            className="nav-links px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 hover:text-black duration-200 link-underline"
          >
            <NavLink to={link} className="text-black">
              {title}
            </NavLink>
          </li>
        ))}
      </ul>
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? (
          <span className="text-5xl">×</span>
        ) : (
          <img src={menu_bar} className="h-8 pl-16" height={20} width={100} />
        )}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center transition-all absolute top-0 left-0 w-full h-screen bg-white text-black overflow-auto">
          {links.map(({ title, link }) => (
            <li
              key={title}
              className="px-10 cursor-pointer capitalize py-2 text-4xl"
            >
              <a onClick={() => setNav(!nav)} href={link}>
                {title}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
