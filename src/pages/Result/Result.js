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
      {/* <CardContent
        sx={{
          maxHeight: { xs: "90vh", sm: "80vh", md: "60vh" },
          overflowY: "auto",
        }}
      >
        <Grid container spacing={{ xs: 2, md: 3 }} sx={{ textAlign: "center" }}>
          {loading ? (
            <Box
              sx={{
                width: "100%",
                justifyContent: "center",
                textAlign: "center",
                margin: "6vh auto",
              }}
            >
              <Typography variant='h4'>&nbsp;Loading...</Typography>
              <LinearProgress
                sx={{ width: "80%", margin: "4rem auto -2rem auto" }}
              />
            </Box>
          ) : data && data.resultID ? (
            data.resultID.map((d) => {
              return (
                <Grid item xs={12} sm={6} md={6} lg={3} key={d._id}>
                  <PreviousTournamentCard
                    tournamentPastData={d}
                    tournamentEventData={data.eventList}
                  />
                </Grid>
              );
            })
          ) : (
            <Typography
              variant='h5'
              color='text.secondary'
              sx={{ textAlign: "center", margin: "2rem auto" }}
            >
              No Data Found
            </Typography>
          )}
        </Grid>
      </CardContent> */}
    </Box>
  );
};

export default Result;
