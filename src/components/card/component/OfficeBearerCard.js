import React from "react";
import PropTypes from "prop-types";
import { Box, Typography } from "@mui/material";
import ProfileImage from "../../../assets/img/male.png";

export default function OfficeBearerCard({ position, name }) {
  return (
    <>
      <Box
        className='bg-white rounded mb-6 xl:mb-0 shadow-lg'
        sx={{
          minHeight: { xs: "20rem", sm: "21rem", md: "16rem" },
          paddingTop: {
            xs: 0,
            sm: "0.5rem",
            md: "1rem",
            lg: "1.25rem",
            xl: "1.5rem",
          },
        }}
      >
        <Box sx={{ display: { xs: "block", md: "flex" } }}>
          <Box
            className='p-3'
            sx={{
              display: "flex",
              justifyContent: "center",
              width: { xs: "100%", md: "100px" },
              height: "100px",
              margin: {
                xs: 0,
                md: "1rem 1rem 2rem 2rem",
                lg: "1rem 1rem 1rem 2rem",
              },
            }}
          >
            <img
              alt='...'
              src={ProfileImage}
              className='tailwind_img shadow-xl rounded-full border-none absolute'
              width={"100px"}
              height={"100px"}
            />
          </Box>
          <Box
            sx={{
              textAlign: { xs: "center", md: "left" },
              margin: { xs: "1.5rem 0 0 0", md: 0 },
            }}
          >
            <Box
              sx={{
                textAlign: { xs: "center", md: "left" },
                margin: { xs: "0 0 0 -1rem", md: 0 },
              }}
            >
              <h5 className='tailwind_h5 text-blueGray-400 uppercase font-bold text-xs pl-4'>
                {position}
              </h5>
              <span className='font-semibold text-xl text-blueGray-700 pl-4'>
                {name}
              </span>
            </Box>
            <Typography
              sx={{ margin: "1rem" }}
              variant='body2'
              color='text.secondary'
            >
              94481 27447
            </Typography>
            <Typography
              sx={{ margin: "1rem" }}
              variant='body2'
              color='text.secondary'
            >
              btta2000@yahoo.com
            </Typography>
            <Box>
              <Typography
                sx={{
                  margin: "1rem",
                  textAlign: "justify",
                }}
                variant='body2'
                color='text.secondary'
              >
                C/o Monika travels, Ist floor, Prabhakar complex Dam Road,
                Hospet 583201
              </Typography>
            </Box>
          </Box>
        </Box>
        {/* <Box className='flex-auto p-4'>
          <Box className='flex flex-wrap'>
            <Box className='relative w-auto pl-4 flex-initial'>
              <Box
                className={
                  "text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full "
                }
              >
                <img
                  alt='...'
                  src={ProfileImage}
                  className='tailwind_img mt-4 shadow-xl rounded-full h-auto align-middle border-none absolute max-w-50-px'
                />
              </Box>
            </Box>
            <Box
              className='relative w-full pr-3 max-w-full flex-grow flex-1'
              sx={{ marginTop: { xs: "2rem", sm: "1.25rem", md: "1.5rem" } }}
            >
              <h5 className='tailwind_h5 text-blueGray-400 uppercase font-bold text-xs pl-4'>
                {position}
              </h5>
              <span className='font-semibold text-xl text-blueGray-700 pl-4'>
                {name}
              </span>
              <Typography
                sx={{
                  margin: "1rem",
                  textAlign: "justify",
                }}
                variant='body2'
                color='text.secondary'
              >
                94481 27447
              </Typography>
              <Typography
                sx={{
                  margin: "1rem",
                  textAlign: "justify",
                }}
                variant='body2'
                color='text.secondary'
              >
                btta2000@yahoo.com
              </Typography>
              <Box>
                <Typography
                  sx={{
                    margin: "1rem",
                    textAlign: "justify",
                  }}
                  variant='body2'
                  color='text.secondary'
                >
                  C/o Monika travels, Ist floor, Prabhakar complex Dam Road,
                  Hospet 583201
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box> */}
      </Box>
    </>
  );
}

OfficeBearerCard.defaultProps = {
  position: "Traffic",
  name: "350,897",
};

OfficeBearerCard.propTypes = {
  position: PropTypes.string,
  name: PropTypes.string,
};
