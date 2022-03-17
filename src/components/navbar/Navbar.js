import { Box } from "@mui/material";
import React, { useState, useEffect } from "react";
import Logo from "../../assets/img/logo.png";
import DehazeIcon from "@mui/icons-material/Dehaze";
import ClearIcon from "@mui/icons-material/Clear";
import { Link } from "react-router-dom";
import { useLoginContext } from "../../assets/utils/UserLoginContext";
import $ from "jquery";
import { useHistory, useLocation } from "react-router";
import "./Navbar.css";

const theme = {
  home: { background: "#32325D", text: "#495057" },
  about: { background: "#32325D", text: "#495057" },
  players: { background: "#121020", text: "#495057" },
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
      left: itemPosNewAnimLeft && itemPosNewAnimLeft.left + "px",
      height: activeWidthNewAnimHeight && activeWidthNewAnimHeight + "px",
      width: activeWidthNewAnimWidth && activeWidthNewAnimWidth + "px",
      //backgroundColor: theme[window.location.pathname.split("/")[1]].background,
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
        left: itemPosNewAnimLeft && itemPosNewAnimLeft.left + "px",
        height: activeWidthNewAnimHeight && activeWidthNewAnimHeight + "px",
        width: activeWidthNewAnimWidth && activeWidthNewAnimWidth + "px",
        backgroundColor:
          theme[window.location.pathname.split("/")[1]].background,
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
    <>
      <Box sx={{ display: { xs: "none", md: "block" } }}>
        <nav className='shadow-lg' style={{ background: "#211940" }}>
          <Box className='max-w-6xl mx-auto px-4'>
            <Box className='flex justify-between' sx={{ padding: 0 }}>
              <Box className='flex space-x-7'>
                <Box>
                  <a
                    href='#'
                    className='tailwind_a flex items-center py-4 px-2'
                  >
                    <img
                      src={Logo}
                      alt='Logo'
                      className='tailwind_img h-8 mr-4'
                    />
                  </a>
                </Box>
                <Box className='hidden md:flex items-center space-x-1'></Box>
              </Box>
              <Box
                className='hidden md:flex items-center space-x-3'
                sx={{ padding: { xs: 0, md: "0 2rem" } }}
                id='navbarSupportedContent'
              >
                <Box className='hori-selector'>
                  <Box className='left'></Box>
                  <Box className='right'></Box>
                </Box>
                <Link
                  className={`block text-sm px-2 py-4 bg-green-500 font-semibold ${
                    curLocation === "home" ? "nav-item active" : "nav-item"
                  }`}
                  to='/home'
                  onClick={(event) =>
                    localStorage.setItem("active", event.target.innerText)
                  }
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    margin: "0rem 0.5rem -0.5rem 0",
                    color: curLocation === "home" ? "#e0e0e0" : "#e0e0e0",
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
                  className={`block text-sm px-2 py-4 bg-green-500 font-semibold ${
                    curLocation === "about" ? "nav-item active" : "nav-item"
                  }`}
                  to='/about'
                  onClick={(event) =>
                    localStorage.setItem("active", event.target.innerText)
                  }
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    margin: "0rem 0.5rem -0.5rem 0",
                    color: curLocation === "about" ? "#e0e0e0" : "#e0e0e0",
                  }}
                >
                  <i
                    className='far fa-address-book'
                    style={{ fontSize: "1rem", margin: "0.5vh" }}
                  ></i>
                  About
                </Link>
                <Link
                  className={`block text-sm px-2 py-4 bg-green-500 font-semibold ${
                    curLocation === "players" ? "nav-item active" : "nav-item"
                  }`}
                  to='/players'
                  onClick={(event) =>
                    localStorage.setItem("active", event.target.innerText)
                  }
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    margin: "0rem 0.5rem -0.5rem 0",
                    color: curLocation === "players" ? "#e0e0e0" : "#e0e0e0",
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
                  className={`block text-sm px-2 py-4 bg-green-500 font-semibold ${
                    curLocation === "result" ? "nav-item active" : "nav-item"
                  }`}
                  to='/result'
                  onClick={(event) =>
                    localStorage.setItem("active", event.target.innerText)
                  }
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    margin: "0rem 0.5rem -0.5rem 0",
                    color: curLocation === "result" ? "#495057" : "#e0e0e0",
                  }}
                >
                  <i
                    className='far fa-chart-bar'
                    style={{ fontSize: "1rem", margin: "0.5vh" }}
                  ></i>
                  Result
                </Link>
                <Link
                  className={`block text-sm px-2 py-4 bg-green-500 font-semibold ${
                    curLocation === "contact" ? "nav-item active" : "nav-item"
                  }`}
                  to='/contact'
                  onClick={(event) =>
                    localStorage.setItem("active", event.target.innerText)
                  }
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    margin: "0rem 0.5rem -0.5rem 0",
                    color: curLocation === "contact" ? "#495057" : "#e0e0e0",
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
                    className={`block text-sm px-2 py-4 bg-green-500 font-semibold login ${
                      curLocation === "login" ? "nav-item active" : "nav-item"
                    }`}
                    to='/login'
                    onClick={(event) =>
                      localStorage.setItem("active", event.target.innerText)
                    }
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      margin: "0rem 0.5rem -0.5rem 0",
                      color: curLocation === "login" ? "#495057" : "#e0e0e0",
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
                    className='block text-sm px-2 py-4 bg-green-500 font-semibold login'
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
                  className='tailwind_button text-white outline-none mobile-menu-button'
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
                  className='block text-sm px-2 py-4 bg-green-500 font-semibold'
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
                  className='block text-sm px-2 py-4 bg-green-500 font-semibold'
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
                  className='block text-sm px-2 py-4 bg-green-500 font-semibold'
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
                  className='block text-sm px-2 py-4 bg-green-500 font-semibold'
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
                  className='block text-sm px-2 py-4 bg-green-500 font-semibold'
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
      </Box>
      <Box sx={{ display: { xs: "block", md: "none" } }}>
        <Box className='navbar-root'>
          <nav className='navbar navbar-expand-lg navbar-mainbg'>
            <Box className='navbar-brand navbar-logo'>
              <img
                src={Logo}
                alt=''
                height='50vh'
                style={{ margin: "-1rem 0" }}
              />
            </Box>

            <button
              className='navbar-toggler'
              onClick={function () {
                setTimeout(function () {
                  animation();
                });
              }}
              type='button'
              data-toggle='collapse'
              data-target='#navbarSupportedContent'
              aria-controls='navbarSupportedContent'
              aria-expanded='false'
              aria-label='Toggle navigation'
            >
              <i className='fas fa-bars text-white'></i>
            </button>

            <Box
              className='collapse navbar-collapse'
              id='navbarSupportedContent'
            >
              <ul className='navbar-nav ml-auto'>
                <Box className='hori-selector'>
                  <Box className='left'></Box>
                  <Box className='right'></Box>
                </Box>

                <li
                  className={
                    curLocation === "" || curLocation === "subscribeTournament"
                      ? "nav-item active"
                      : "nav-item"
                  }
                  onClick={(event) =>
                    localStorage.setItem("active", event.target.innerText)
                  }
                >
                  <Link
                    className='nav-link'
                    to='/'
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

                <li
                  className={
                    curLocation === "about" ? "nav-item active" : "nav-item"
                  }
                  onClick={(event) =>
                    localStorage.setItem("active", event.target.innerText)
                  }
                >
                  <Link
                    className='nav-link'
                    to='/about'
                    style={{ display: "inline-flex", alignItems: "center" }}
                  >
                    <i className='far fa-address-book'></i>About
                  </Link>
                </li>

                <li
                  className={
                    curLocation === "players" ? "nav-item active" : "nav-item"
                  }
                  onClick={(event) =>
                    localStorage.setItem("active", event.target.innerText)
                  }
                >
                  <Link
                    className='nav-link'
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
                <li
                  className={
                    curLocation === "result" || curLocation === "tournament"
                      ? "nav-item active"
                      : "nav-item"
                  }
                  onClick={(event) =>
                    localStorage.setItem("active", event.target.innerText)
                  }
                >
                  <Link
                    className='nav-link'
                    to='/result'
                    style={{ display: "inline-flex", alignItems: "center" }}
                  >
                    <i className='far fa-chart-bar'></i>Result
                  </Link>
                </li>
                <li
                  className={
                    curLocation === "contact" ? "nav-item active" : "nav-item"
                  }
                  onClick={(event) =>
                    localStorage.setItem("active", event.target.innerText)
                  }
                >
                  <Link
                    className='nav-link'
                    to='/contact'
                    style={{ display: "inline-flex", alignItems: "center" }}
                  >
                    <i className='far fa-copy'></i>Contact Us
                  </Link>
                </li>
                <li
                  className={
                    curLocation === "login" ? "nav-item active" : "nav-item"
                  }
                  onClick={(event) =>
                    localStorage.setItem("active", event.target.innerText)
                  }
                >
                  {!getLoginUser() ? (
                    <Link
                      className='nav-link login'
                      to='/login'
                      style={{ display: "inline-flex", alignItems: "center" }}
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
                    <button
                      className='nav-link'
                      onClick={() => {
                        logOut();
                      }}
                      style={{ display: "inline-flex", alignItems: "center" }}
                    >
                      <span
                        className='material-icons'
                        style={{ fontSize: "1rem", margin: "0.5vh" }}
                      >
                        logout
                      </span>
                      Logout
                    </button>
                  )}
                </li>
              </ul>
            </Box>
          </nav>
        </Box>
      </Box>
    </>
  );
};

export default Navbar;
