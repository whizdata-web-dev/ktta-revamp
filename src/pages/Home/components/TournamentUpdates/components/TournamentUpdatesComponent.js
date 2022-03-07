import { Box, CircularProgress } from "@mui/material";
import React from "react";
import CardStats from "../../../../../components/card/component/CardStats";

const TournamentUpdatesComponent = ({ data }) => {
  return (
    <Box>
      <Box className='flex flex-wrap'>
        {data.length !== 0 ? (
          data.map((tournament, index) => (
            <Box className='w-full lg:w-6/12 xl:w-3/12 px-4' key={index}>
              <CardStats
                title={tournament.eventName}
                subtitle={`${tournament.eventStartDate} - ${tournament.eventEndDate}`}
                link={tournament._id}
                statIconColor='bg-indigo-500'
                buttonName='View Details'
              />
            </Box>
          ))
        ) : (
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              margin: "2rem auto",
            }}
          >
            <CircularProgress sx={{ color: "#fff" }} />
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default TournamentUpdatesComponent;
