import { Box, CircularProgress } from "@mui/material";
import React from "react";
import FetchData from "../../assets/utils/FetchData";
import CardStats from "../../components/card/component/CardStats";

const Result = () => {
  const { data, loading, error } = FetchData({
    method: "GET",
    url: `PastTournamentsOnApiKey?caller=KTTA1&apiKey=dd5e611bf286042db7257ee998e5112b&userId=MnNwLA6gtLNmafai9`,
    pathname: "result",
  });

  return (
    <Box>
      <Box className='flex flex-wrap' sx={{ paddingTop: "1rem" }}>
        {data.length !== 0 && data.resultID ? (
          data.resultID.map((tournament, index) => (
            <Box
              className='w-full lg:w-6/12 xl:w-3/12 px-4'
              key={index}
              sx={{ margin: { xs: "0.3rem 0", lg: "1rem 0" } }}
            >
              <CardStats
                title={tournament.eventName}
                subtitle={`${tournament.eventStartDate} - ${tournament.eventEndDate}`}
                link={tournament._id}
                statIconColor='bg-indigo-500'
                buttonName='View Result'
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

export default Result;
