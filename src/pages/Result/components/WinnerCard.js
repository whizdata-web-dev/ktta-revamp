import * as React from "react";
import { Box } from "@mui/material";
import male from "../../../assets/img/male.png";
import female from "../../../assets/img/female.png";
import Winner from "../../../assets/img/champ.gif";

export default function WinnerCard({ winnerName, eventName }) {
  return (
    <Box>
      {winnerName && (
        <div
          className='relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl mt-4'
          style={{ border: "1px solid rgb(241, 245, 249)" }}
        >
          <div className='px-6 py-6'>
            <div className='flex flex-wrap justify-center'>
              <div className='w-full lg:w-3/12 px-4'>
                <img
                  alt='...'
                  src={Winner}
                  className='tailwind_img h-auto align-middle border-none absolute mt-0 max-w-100-px'
                />
              </div>
              <div className='w-full lg:w-6/12 lg:text-left'>
                <div className='py-6'>
                  <div className='text-center'>
                    <h3 className='tailwind_h3 text-xl font-semibold leading-normal text-blueGray-700'>
                      {winnerName}
                    </h3>
                    <div className='text-sm leading-normal mt-0 text-blueGray-400 font-bold uppercase'>
                      {eventName}
                    </div>
                  </div>
                </div>
              </div>
              <div className='w-full lg:w-3/12 px-4'>
                <img
                  alt='...'
                  src={eventName.toLowerCase().includes("girl") ? female : male}
                  className='tailwind_img shadow-xl rounded-full h-auto align-middle border-none absolute max-w-100-px'
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </Box>
  );
}
