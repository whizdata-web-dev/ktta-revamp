import { Box } from "@mui/material";
import React from "react";

export default function FooterAdmin() {
  return (
    <>
      <footer className='block'>
        <Box className='container mx-auto px-4'>
          <hr className='tailwind_hr border-b-1 border-blueGray-200' />
          <Box className='flex flex-wrap items-center md:justify-between justify-center'>
            <Box className='w-full md:w-4/12 px-4'>
              <Box className='text-sm text-blueGray-500 font-semibold py-1 text-center md:text-left'>
                Copyright © {new Date().getFullYear()}&nbsp;
                <a
                  href='https://www.whizdata.in/#/'
                  className='tailwind_a text-blueGray-500 hover:text-blueGray-700 text-sm font-semibold py-1'
                >
                  WHIZDATA
                </a>
              </Box>
            </Box>
            <Box className='w-full md:w-8/12 px-4'>
              <ul className='flex flex-wrap list-none md:justify-end  justify-center'>
                <li>
                  <a
                    href='https://www.whizdata.in/#/'
                    className='tailwind_a text-blueGray-600 hover:text-blueGray-800 text-sm font-semibold block py-1 px-3'
                  >
                    WHIZDATA
                  </a>
                </li>
                <li>
                  <a
                    href='https://www.whizdata.in/#/aboutus'
                    className='tailwind_a text-blueGray-600 hover:text-blueGray-800 text-sm font-semibold block py-1 px-3'
                  >
                    About Us
                  </a>
                </li>
              </ul>
            </Box>
          </Box>
        </Box>
      </footer>
    </>
  );
}
