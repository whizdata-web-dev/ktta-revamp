import { Box } from "@mui/material";
import React, { useState, useEffect } from "react";
import Logo from "../../assets/img/logo.png";
import DehazeIcon from "@mui/icons-material/Dehaze";
import ClearIcon from "@mui/icons-material/Clear";
import { Link } from "react-router-dom";
import {useLoginContext} from '../../src/assets/utils/UserLoginContext'
// import { useLoginContext } from "../../assets/utils/UserLoginContext";
import $ from "jquery";
import { useLocation } from "react-router";
import "./Navbar.css";

const theme = {
  home: { background: "#32325D", text: "#fff" },
  about: { background: "#f6f5f7", text: "#495057" },
  players: { background: "#121020", text: "#fff" },
  result: { background: "#f6f5f7", text: "#495057" },
  contact: { background: "#f6f5f7", text: "#495057" },
  login: { background: "#f6f5f7", text: "#495057" },
};

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { logOut, getLoginUser } = useLoginContext();

  let activeTab = localStorage.getItem("active");

  const location = useLocation();
  const curLocation = location.pathname.split("/")[1];

  function animation() {
    var tabsNewAnim = $("#navbarSupportedContent");
    var activeItemNewAnim = tabsNewAnim.find(".active");
    var activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
    var activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
    var itemPosNewAnimTop = activeItemNewAnim.position();
    var itemPosNewAnimLeft = activeItemNewAnim.position();
    $(".hori-selector").css({
      top: itemPosNewAnimTop && itemPosNewAnimTop.top + "px",
      left: itemPosNewAnimLeft && itemPosNewAnimLeft.left + 8 + "px",
      height: activeWidthNewAnimHeight && activeWidthNewAnimHeight + "px",
      width: activeWidthNewAnimWidth && activeWidthNewAnimWidth + "px",
      backgroundColor: theme[window.location.pathname.split("/")[1]].background,
      color: theme[window.location.pathname.split("/")[1]].text,
    });
    $(".hori-selector .left, .hori-selector .right").css({
      backgroundColor: theme[window.location.pathname.split("/")[1]].background,
    });
    $("#navbarSupportedContent").on("click", "a", function (e) {
      $("#navbarSupportedContent a").removeClass("active");
      $(this).addClass("active");
      var activeWidthNewAnimHeight = $(this).innerHeight();
      var activeWidthNewAnimWidth = $(this).innerWidth();
      var itemPosNewAnimTop = $(this).position();
      var itemPosNewAnimLeft = $(this).position();
      $(".hori-selector").css({
        top: itemPosNewAnimTop && itemPosNewAnimTop.top + "px",
        left: itemPosNewAnimLeft && itemPosNewAnimLeft.left + 8 + "px",
        height: activeWidthNewAnimHeight && activeWidthNewAnimHeight + "px",
        width: activeWidthNewAnimWidth && activeWidthNewAnimWidth + "px",
        backgroundColor:
          theme[window.location.pathname.split("/")[1]].background,
        color: theme[window.location.pathname.split("/")[1]].text,
      });
      $(".hori-selector .left, .hori-selector .right").css({
        backgroundColor:
          theme[window.location.pathname.split("/")[1]].background,
      });
    });
  }

  useEffect(() => {
    animation();
    $(window).on("resize", function () {
      setTimeout(function () {
        animation();
      }, 500);
    });
  }, [activeTab]);

  return (
    <nav className='shadow-lg text-white' style={{ background: "#211940" }}>
      <Box className='max-w-6xl mx-auto px-4'>
        <Box className='flex justify-between'>
          <Box className='flex space-x-7'>
            <Box>
              <a href='#' className='tailwind_a flex items-center py-4 px-2'>
                <img src={Logo} alt='Logo' className='tailwind_img h-8 mr-4' />
              </a>
            </Box>
            <Box className='hidden md:flex items-center space-x-1'></Box>
          </Box>
          <Box
            className='hidden md:flex items-center space-x-3'
            id='navbarSupportedContent'
          >
            <Box className='hori-selector'>
              <Box className='left'></Box>
              <Box className='right'></Box>
            </Box>
            <Link
              to='/home'
              className={`block text-sm px-2 bg-green-500 font-semibold ${
                curLocation === "home" ? "nav-item active" : "nav-item"
              }`}
              onClick={(event) =>
                localStorage.setItem("active", event.target.innerText)
              }
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
              to='/about'
              className={`block text-sm px-2 font-semibold ${
                curLocation === "about" ? "nav-item active" : "nav-item"
              }`}
              onClick={(event) =>
                localStorage.setItem("active", event.target.innerText)
              }
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
              to='/players'
              className={`block text-sm px-2 font-semibold ${
                curLocation === "players" ? "nav-item active" : "nav-item"
              }`}
              onClick={(event) =>
                localStorage.setItem("active", event.target.innerText)
              }
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
              to='/result'
              className={`block text-sm px-2 font-semibold ${
                curLocation === "result" ? "nav-item active" : "nav-item"
              }`}
              onClick={(event) =>
                localStorage.setItem("active", event.target.innerText)
              }
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
              to='/contact'
              className={`block text-sm px-2 font-semibold ${
                curLocation === "contact" ? "nav-item active" : "nav-item"
              }`}
              onClick={(event) =>
                localStorage.setItem("active", event.target.innerText)
              }
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
            {!getLoginUser() ? (
              <Link
                to='/login'
                className={`block text-sm px-2 font-semibold ${
                  curLocation === "login" ? "nav-item active" : "nav-item"
                }`}
                onClick={(event) =>
                  localStorage.setItem("active", event.target.innerText)
                }
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
            ) : (
              <Link
                className='block text-sm px-2 font-semibold'
                to='/'
                onClick={() => {
                  logOut();
                }}
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
                  logout
                </span>
                Logout
              </Link>
            )}
          </Box>
          <Box className='md:hidden flex items-center'>
            <button
              className='tailwind_button outline-none mobile-menu-button'
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
              className='block text-sm px-2 font-semibold'
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
              className='block text-sm px-2 font-semibold'
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
              className='block text-sm px-2 font-semibold'
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
              className='block text-sm px-2 font-semibold'
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
              className='block text-sm px-2 font-semibold'
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
