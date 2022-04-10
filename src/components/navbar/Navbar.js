import React, { useEffect } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import $ from "jquery";
import Logo from "../../assets/img/logo.png";
import { Box, Button } from "@mui/material";
import { useLoginContext } from "../../assets/utils/UserLoginContext";
import { useHistory, useLocation } from "react-router";
import "./Navbar.css";

const theme = {
  home: { background: "#32325D", text: "#495057" },
  about: { background: "#32325D", text: "#495057" },
  players: { background: "#121020", text: "#495057" },
  player: { background: "#f6f5f7", text: "#495057" },
  result: { background: "#f6f5f7", text: "#495057" },
  contact: { background: "#f6f5f7", text: "#495057" },
  login: { background: "#f6f5f7", text: "#495057" },
};

const Navbar = () => {
  //  calling logout function from login context api
  const { logOut, getLoginUser } = useLoginContext();

  const location = useLocation();
  const curLocation = location.pathname.split("/")[1];
  console.log(curLocation);

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
    });
    $("#navbarSupportedContent").on("click", "li", function (e) {
      $("#navbarSupportedContent ul li").removeClass("active");
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
      });
    });
  }
  useEffect(() => {
    setTimeout(() => {
      animation();
      $(window).on("resize", function () {
        setTimeout(function () {
          animation();
        }, 500);
      });
    }, 1000);
  }, []);

  return (
    <div className='navbar-root'>
      <nav className='navbar navbar-expand-lg navbar-mainbg'>
        <Box className='navbar-brand navbar-logo'>
          <img src={Logo} alt='' height='50vh' style={{ margin: "-1rem 0" }} />
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

        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav ml-auto'>
            <div className='hori-selector'>
              <div className='left'></div>
              <div className='right'></div>
            </div>

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
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
