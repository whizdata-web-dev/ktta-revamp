import { Box, Grid } from "@mui/material";
import React, { useState, useEffect } from "react";
import CarouselContainer from "../../components/carousel/container/CarouselContainer";
import ChartContainer from "../../components/chart/container/ChartContainer";
import { ChartContainerModel } from "../../components/chart/model/ChartContainerModel";
// import SocialContainer from "../../components/social/container/SocialContainer";
import TournamentUpdatesContainer from "./components/TournamentUpdates/container/TournamentUpdatesContainer";
import UpcomingTournamentsContainer from "./components/UpcomingTournaments/container/UpcomingTournamentsContainer";
import backgroundImage from "../../assets/img/home_bg.jpg";
import { RequestData } from "../../assets/utils/RequestData";

const Home = () => {
  const [registeredPlayers, setRegisteredPlayers] = useState(null);
  const [matchesPlayed, setMatchesPlayed] = useState(null);

  let matchesPlayedSoFar = [];

  const getChartData = async () => {
    await RequestData("POST", "fetchPlayerCount", {
      caller: process.env.REACT_APP_CALLER,
      apiKey: process.env.REACT_APP_API_KEY,
      data: {
        associationId: process.env.REACT_APP_ASSOCIATION_ID,
        groupBy: "year",
      },
    })
      .then((response) => {
        if (response?.result) {
          let matchesPlayedArrayFemale = [],
            matchesPlayedArrayMale = [],
            matchesPlayedArrayTotal = [];

          response.result.result
            .sort((a, b) => parseInt(a.year) - parseInt(b.year))
            .forEach((year) => {
              matchesPlayedArrayFemale.push(year.female);
              matchesPlayedArrayMale.push(year.male);
              matchesPlayedArrayTotal.push(year.all);
            });

          setMatchesPlayed({
            id: "played-chart",
            container: "w-full xl:w-4/12 px-4",
            classes: [
              "relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded",
              "rounded-t mb-0 px-4 py-3 bg-transparent",
              "flex flex-wrap items-center",
              "relative w-full max-w-full flex-grow flex-1",
              "p-4 flex-auto",
              "relative h-350-px",
            ],
            heading: "# of total male, female",
            subHeading: "Newly registered players",
            headingClasses: [
              "uppercase text-blueGray-400 mb-1 text-xs font-semibold",
              "text-white text-xl font-semibold",
            ],
            config: {
              type: "bar",
              data: {
                labels: ["2019", "2020", "2021", "2022"],
                datasets: [
                  // female
                  {
                    label: "Female",
                    backgroundColor: "#ed64a6",
                    borderColor: "#ed64a6",
                    data: matchesPlayedArrayFemale,
                    fill: false,
                    barThickness: 8,
                  },
                  {
                    label: "Male",
                    fill: false,
                    backgroundColor: "#4c51bf",
                    borderColor: "#4c51bf",
                    data: matchesPlayedArrayMale,
                    barThickness: 8,
                  },
                ],
              },
              options: {
                maintainAspectRatio: false,
                responsive: true,
                title: {
                  display: false,
                  text: "Orders Chart",
                },
                tooltips: {
                  mode: "index",
                  intersect: false,
                },
                hover: {
                  mode: "nearest",
                  intersect: true,
                },
                legend: {
                  labels: {
                    fontColor: "rgba(0,0,0,.4)",
                  },
                  align: "end",
                  position: "bottom",
                },
                scales: {
                  xAxes: [
                    {
                      display: true,
                      scaleLabel: {
                        display: false,
                        labelString: "Year",
                      },
                      gridLines: {
                        borderDash: [2],
                        borderDashOffset: [2],
                        color: "rgba(33, 37, 41, 0.3)",
                        zeroLineColor: "rgba(33, 37, 41, 0.3)",
                        zeroLineBorderDash: [2],
                        zeroLineBorderDashOffset: [2],
                      },
                    },
                  ],
                  yAxes: [
                    {
                      display: true,
                      scaleLabel: {
                        display: false,
                        labelString: "Value",
                      },
                      gridLines: {
                        borderDash: [2],
                        drawBorder: false,
                        borderDashOffset: [2],
                        color: "rgba(33, 37, 41, 0.2)",
                        zeroLineColor: "rgba(33, 37, 41, 0.15)",
                        zeroLineBorderDash: [2],
                        zeroLineBorderDashOffset: [2],
                      },
                    },
                  ],
                },
              },
            },
          });
        }
      })
      .catch((error) => {
        localStorage.setItem(
          "erMsg",
          "Something went wrong! Please try again later."
        );
      });

    // [2019, 2020, 2021, 2022].forEach(async (year) => {
    //   matchesPlayedSoFar.push(
    //     await RequestData("POST", "totalFMMatchByYear", {
    //       caller: process.env.REACT_APP_CALLER,
    //       apiKey: process.env.REACT_APP_API_KEY,
    //       associationId: process.env.REACT_APP_ASSOCIATION_ID,
    //       year: year,
    //     })
    //       .then((response) => {
    //         if (response?.result) {
    //           let matchesPlayedCountFemale = 0,
    //             matchesPlayedCountMale = 0;

    //           response.result.data.forEach((month) => {
    //             matchesPlayedCountFemale += month.gender[2].count;
    //             matchesPlayedCountMale += month.gender[2].count;
    //           });

    //           return {
    //             female: matchesPlayedCountFemale,
    //             male: matchesPlayedCountMale,
    //           };

    //           // response.result.result
    //           //   .sort((a, b) => parseInt(a.year) - parseInt(b.year))
    //           //   .forEach((year) => {
    //           //     matchesPlayedArrayFemale.push(year.female);
    //           //     matchesPlayedArrayMale.push(year.male);
    //           //     matchesPlayedArrayTotal.push(year.all);
    //           //   });

    //           // setMatchesPlayed({
    //           //   id: "played-chart",
    //           //   container: "w-full xl:w-4/12 px-4",
    //           //   classes: [
    //           //     "relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded",
    //           //     "rounded-t mb-0 px-4 py-3 bg-transparent",
    //           //     "flex flex-wrap items-center",
    //           //     "relative w-full max-w-full flex-grow flex-1",
    //           //     "p-4 flex-auto",
    //           //     "relative h-350-px",
    //           //   ],
    //           //   heading: "# of total male, female",
    //           //   subHeading: "Matches played yearly",
    //           //   headingClasses: [
    //           //     "uppercase text-blueGray-400 mb-1 text-xs font-semibold",
    //           //     "text-white text-xl font-semibold",
    //           //   ],
    //           //   config: {
    //           //     type: "bar",
    //           //     data: {
    //           //       labels: ["2019", "2020", "2021", "2022"],
    //           //       datasets: [
    //           //         // female
    //           //         {
    //           //           label: "Female",
    //           //           backgroundColor: "#ed64a6",
    //           //           borderColor: "#ed64a6",
    //           //           data: matchesPlayedArrayFemale,
    //           //           fill: false,
    //           //           barThickness: 8,
    //           //         },
    //           //         {
    //           //           label: "Male",
    //           //           fill: false,
    //           //           backgroundColor: "#4c51bf",
    //           //           borderColor: "#4c51bf",
    //           //           data: matchesPlayedArrayMale,
    //           //           barThickness: 8,
    //           //         },
    //           //       ],
    //           //     },
    //           //     options: {
    //           //       maintainAspectRatio: false,
    //           //       responsive: true,
    //           //       title: {
    //           //         display: false,
    //           //         text: "Orders Chart",
    //           //       },
    //           //       tooltips: {
    //           //         mode: "index",
    //           //         intersect: false,
    //           //       },
    //           //       hover: {
    //           //         mode: "nearest",
    //           //         intersect: true,
    //           //       },
    //           //       legend: {
    //           //         labels: {
    //           //           fontColor: "rgba(0,0,0,.4)",
    //           //         },
    //           //         align: "end",
    //           //         position: "bottom",
    //           //       },
    //           //       scales: {
    //           //         xAxes: [
    //           //           {
    //           //             display: true,
    //           //             scaleLabel: {
    //           //               display: false,
    //           //               labelString: "Year",
    //           //             },
    //           //             gridLines: {
    //           //               borderDash: [2],
    //           //               borderDashOffset: [2],
    //           //               color: "rgba(33, 37, 41, 0.3)",
    //           //               zeroLineColor: "rgba(33, 37, 41, 0.3)",
    //           //               zeroLineBorderDash: [2],
    //           //               zeroLineBorderDashOffset: [2],
    //           //             },
    //           //           },
    //           //         ],
    //           //         yAxes: [
    //           //           {
    //           //             display: true,
    //           //             scaleLabel: {
    //           //               display: false,
    //           //               labelString: "Value",
    //           //             },
    //           //             gridLines: {
    //           //               borderDash: [2],
    //           //               drawBorder: false,
    //           //               borderDashOffset: [2],
    //           //               color: "rgba(33, 37, 41, 0.2)",
    //           //               zeroLineColor: "rgba(33, 37, 41, 0.15)",
    //           //               zeroLineBorderDash: [2],
    //           //               zeroLineBorderDashOffset: [2],
    //           //             },
    //           //           },
    //           //         ],
    //           //       },
    //           //     },
    //           //   },
    //           // });
    //         }
    //       })
    //       .catch((error) => {
    //         localStorage.setItem(
    //           "erMsg",
    //           "Something went wrong! Please try again later."
    //         );
    //       })
    //   );
    // });
  };

  useEffect(() => {
    getChartData();
  }, []);

  return (
    <>
      {/* add snackbar to display error message if not logged in before giving entry */}
      <Box
        className='relative md:pt-32'
        sx={{
          backgroundImage: `url(${backgroundImage})`,
          top: "-6rem",
          boxShadow: "0 0 10px rgb(0 0 0 / 80%) inset",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center top",
        }}
      >
        <Box
          className='md:px-4 md:px-10 pb-32 mx-auto w-full'
          sx={{ paddingTop: { xs: "12rem", md: "18rem" } }}
        >
          <TournamentUpdatesContainer />
        </Box>
      </Box>

      {/* <Box
        className='md:px-10 pt-16 mx-auto w-full'
        sx={{ marginTop: "-10rem" }}
      >
        <Box>
          <Box className='flex flex-wrap -mt-24'>
            <div className='w-full xl:w-4/12 mb-4 xl:mb-0 px-4'>
              <UpcomingTournamentsContainer />
            </div>
            <Box className={ChartContainerModel[0]?.container}>
              <ChartContainer {...ChartContainerModel[0]} />
            </Box>
            {matchesPlayed && (
              <Box className={matchesPlayed?.container}>
                <ChartContainer {...matchesPlayed} />
              </Box>
            )}
          </Box>
        </Box>
      </Box> */}

      <Grid
        container
        spacing={3}
        sx={{
          marginTop: { xs: "-14rem", md: "-12rem" },
          paddingInline: { xs: "16px", sm: "32px", md: "56px" },
        }}
      >
        <Grid item xs={12} sm={12} md={12} lg={4}>
          <UpcomingTournamentsContainer />
        </Grid>
        <Grid item xs={12} sm={6} lg={4}>
          <ChartContainer {...ChartContainerModel[0]} />
        </Grid>
        {matchesPlayed && (
          <Grid item xs={12} sm={6} lg={4}>
            <ChartContainer {...matchesPlayed} />
          </Grid>
        )}
      </Grid>
      {/* <Box className='px-4 md:px-10 mx-auto w-full'>
        <Box className='flex flex-wrap mt-2 mb-4'>
          <Box className='w-full xl:w-12 mb-0 xl:mb-0 px-4'>
            <CarouselContainer />
          </Box>
        </Box>
      </Box> */}
    </>
  );
};

export default Home;
