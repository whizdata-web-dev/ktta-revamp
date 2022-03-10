import { Box, Grid } from "@mui/material";
import React from "react";
import PostContainer from "../../../pages/Home/components/SocialMediaPosts/container/PostContainer";

export default function SocialComponent() {
  return (
    <>
      <Box
        className='relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded'
        sx={{ paddingBottom: "1rem" }}
      >
        <Box className='rounded-t mb-0 px-4 py-3 border-0'>
          <Box className='flex flex-wrap items-center'>
            <Box className='relative w-full px-4 max-w-full flex-grow flex-1'>
              <h3 className='tailwind_h3 font-semibold text-base uppercase text-blueGray-700'>
                Social Media Posts
              </h3>
            </Box>
          </Box>
        </Box>
        <Box className='block w-full px-4'>
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <Box>
                <PostContainer />
              </Box>
              <Box>
                <Box
                  className='relative w-full max-w-full flex-grow flex-1 text-right'
                  sx={{ margin: "1rem 0" }}
                >
                  <button
                    onClick={() =>
                      (window.location.href =
                        "https://www.facebook.com/KarnatakaTT/")
                    }
                    className='tailwind_button text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
                    type='button'
                    style={{ backgroundColor: "#1e40af" }}
                  >
                    See More Facebook Posts
                  </button>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box>
                <PostContainer />
              </Box>
              <Box>
                <Box
                  onClick={() =>
                    (window.location.href =
                      "https://twitter.com/karnatakatt?lang=en")
                  }
                  className='relative w-full max-w-full flex-grow flex-1 text-right'
                  sx={{ margin: "1rem 0" }}
                >
                  <button
                    className='tailwind_button text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
                    type='button'
                    style={{ backgroundColor: "#00acee" }}
                  >
                    See More Twitter Posts
                  </button>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box>
                <PostContainer />
              </Box>
              <Box>
                <Box
                  className='relative w-full pl-4 max-w-full flex-grow flex-1 text-right'
                  sx={{ margin: "1rem 0" }}
                >
                  <button
                    onClick={() =>
                      (window.location.href =
                        "https://www.instagram.com/karnatakatt/?hl=en")
                    }
                    className='tailwind_button text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
                    type='button'
                    style={{
                      background: `#bc2a8d`,
                    }}
                  >
                    See More Instagram Posts
                  </button>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
}
