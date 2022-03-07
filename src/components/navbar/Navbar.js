import { Box } from "@mui/material";
import React, { useState } from "react";
import Logo from "../../assets/img/logo.png";
import DehazeIcon from "@mui/icons-material/Dehaze";
import ClearIcon from "@mui/icons-material/Clear";
import { Link } from "react-router-dom";

const theme = {
  home: "#211940",
  about: "#000",
  players: "#211940",
  result: "#211940",
  contact: "#211940",
  login: "#211940",
};

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav
      className='shadow-lg text-white'
      style={{ background: theme[window.location.pathname.split("/")[1]] }}
    >
      <Box className='max-w-6xl mx-auto px-4'>
        <Box className='flex justify-between'>
          <Box className='flex space-x-7'>
            <Box>
              <a href='#' className='flex items-center py-4 px-2'>
                <img src={Logo} alt='Logo' className='h-8 mr-4' />
              </a>
            </Box>
            <Box className='hidden md:flex items-center space-x-1'></Box>
          </Box>
          <Box className='hidden md:flex items-center space-x-3 '>
            <Link
              className='block text-sm px-2 py-4 text-white bg-green-500 font-semibold'
              to='/home'
              style={{
                display: "inline-flex",
                alignItems: "center",
                margin: "0 0.5rem",
              }}
            >
              <span
                className='material-icons'
                style={{ fontSize: "1rem", margin: "0.5vh" }}
              >
                cottage
              </span>
              Home
            </Link>
            <Link
              className='block text-sm px-2 py-4 text-white bg-green-500 font-semibold'
              to='/about'
              style={{
                display: "inline-flex",
                alignItems: "center",
                margin: "0 0.5rem",
              }}
            >
              <i
                className='far fa-address-book'
                style={{ fontSize: "1rem", margin: "0.5vh" }}
              ></i>
              About
            </Link>
            <Link
              className='block text-sm px-2 py-4 text-white bg-green-500 font-semibold'
              to='/players'
              style={{
                display: "inline-flex",
                alignItems: "center",
                margin: "0 0.5rem",
              }}
            >
              <span
                className='material-icons'
                style={{ fontSize: "1rem", margin: "0.5vh" }}
              >
                groups
              </span>
              Players
            </Link>
            <Link
              className='block text-sm px-2 py-4 text-white bg-green-500 font-semibold'
              to='/result'
              style={{
                display: "inline-flex",
                alignItems: "center",
                margin: "0 0.5rem",
              }}
            >
              <i
                className='far fa-chart-bar'
                style={{ fontSize: "1rem", margin: "0.5vh" }}
              ></i>
              Result
            </Link>
            <Link
              className='block text-sm px-2 py-4 text-white bg-green-500 font-semibold'
              to='/contact'
              style={{
                display: "inline-flex",
                alignItems: "center",
                margin: "0 0.5rem",
              }}
            >
              <i
                className='far fa-copy'
                style={{ fontSize: "1rem", margin: "0.5vh" }}
              ></i>
              Contact Us
            </Link>
            <Link
              className='block text-sm px-2 py-4 text-white bg-green-500 font-semibold login'
              to='/login'
              style={{
                display: "inline-flex",
                alignItems: "center",
                margin: "0 0.5rem",
              }}
            >
              <span
                className='material-icons'
                style={{ fontSize: "1rem", margin: "0.5vh" }}
              >
                login
              </span>
              Login
            </Link>
          </Box>
          <Box className='md:hidden flex items-center'>
            <button
              className='outline-none mobile-menu-button'
              onClick={() => setOpen(!open)}
            >
              {open ? <ClearIcon /> : <DehazeIcon />}
            </button>
          </Box>
        </Box>
      </Box>
      <Box className={`md:hidden ${open ? "" : "hidden"} mobile-menu`}>
        <ul className=''>
          <li className='active'>
            <Link
              className='block text-sm px-2 py-4 text-white bg-green-500 font-semibold'
              to='/home'
              style={{ display: "inline-flex", alignItems: "center" }}
            >
              <span
                className='material-icons'
                style={{ fontSize: "1rem", margin: "0.5vh" }}
              >
                cottage
              </span>
              Home
            </Link>
          </li>
          <li>
            <Link
              className='block text-sm px-2 py-4 text-white bg-green-500 font-semibold'
              to='/about'
              style={{ display: "inline-flex", alignItems: "center" }}
            >
              <i
                className='far fa-address-book'
                style={{ fontSize: "1rem", margin: "0.5vh" }}
              ></i>
              About
            </Link>
          </li>
          <li>
            <Link
              className='block text-sm px-2 py-4 text-white bg-green-500 font-semibold'
              to='/players'
              style={{ display: "inline-flex", alignItems: "center" }}
            >
              <span
                className='material-icons'
                style={{ fontSize: "1rem", margin: "0.5vh" }}
              >
                groups
              </span>
              Players
            </Link>
          </li>
          <li>
            <Link
              className='block text-sm px-2 py-4 text-white bg-green-500 font-semibold'
              to='/result'
              style={{ display: "inline-flex", alignItems: "center" }}
            >
              <i
                className='far fa-chart-bar'
                style={{ fontSize: "1rem", margin: "0.5vh" }}
              ></i>
              Result
            </Link>
          </li>
          <li>
            <Link
              className='block text-sm px-2 py-4 text-white bg-green-500 font-semibold'
              to='/contact'
              style={{ display: "inline-flex", alignItems: "center" }}
            >
              <i
                className='far fa-copy'
                style={{ fontSize: "1rem", margin: "0.5vh" }}
              ></i>
              Contact Us
            </Link>
          </li>
        </ul>
      </Box>
    </nav>
  );
};

export default Navbar;
