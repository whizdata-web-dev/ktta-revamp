import React from "react";
import PropTypes from "prop-types";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";

export default function CardStats({
  subtitle,
  title,
  link,
  statIconColor,
  buttonName,
}) {
  return (
    <>
      <Box className='relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg'>
        <Box className='flex-auto p-4'>
          <Box className='flex flex-wrap'>
            <Box
              className='relative w-full pr-4 max-w-full flex-grow flex-1'
              sx={{
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              <h5 className='text-blueGray-400 uppercase font-bold text-xs'>
                {subtitle}
              </h5>
              <span className='font-semibold text-xl text-blueGray-700'>
                {title}
              </span>
            </Box>
            <Box className='relative w-auto pl-4 flex-initial'>
              <Box
                className={
                  "text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full " +
                  statIconColor
                }
              >
                {title.split(" ")[0][0]}
              </Box>
            </Box>
          </Box>
          <Link to={`/result/${link}`} style={{ TextDecoration: "none" }}>
            <Box className='text-sm text-blueGray-400 mt-4'>
              <Box
                variant='span'
                className='uppercase whitespace-nowrap'
                sx={{
                  transition: "0.2s all ease",
                  cursor: "pointer",
                  "&:hover": {
                    transform: "scale(1.01)",
                  },
                }}
              >
                {buttonName}
              </Box>
            </Box>
          </Link>
        </Box>
      </Box>
    </>
  );
}

CardStats.defaultProps = {
  subtitle: "Traffic",
  title: "350,897",
  statArrow: "up",
  statPercent: "3.48",
  statPercentColor: "text-emerald-500",
  link: "Since last month",
  statIconName: "far fa-chart-bar",
  statIconColor: "bg-red-500",
};

CardStats.propTypes = {
  subtitle: PropTypes.string,
  title: PropTypes.string,
  statArrow: PropTypes.oneOf(["up", "down"]),
  statPercent: PropTypes.string,
  // can be any of the text color utilities
  // from tailwindcss
  statPercentColor: PropTypes.string,
  link: PropTypes.string,
  statIconName: PropTypes.string,
  // can be any of the background color utilities
  // from tailwindcss
  statIconColor: PropTypes.string,
};
