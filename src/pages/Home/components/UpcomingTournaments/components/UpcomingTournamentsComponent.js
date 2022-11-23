import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Map from "../../../../../components/map/Map";
import LoadingComponent from "../../../../../assets/utils/LoadingComponent";
import { Link } from "react-router-dom";
import Timer from "../../../../../assets/utils/Timer";
import { handleTournamentId } from "../../../../../assets/utils/UserLoginContext";

const UpcomingTournamentsComponent = ({
  data,
  loading,
  handleChange,
  expanded,
  mapWidth,
  handleGiveEntry,
}) => {
  console.log({ data });
  return (
    <Box className={`block w-full px-4 overflow-y-auto pb-6`}>
      {Object.keys(data).length !== 0 ? (
        data
          .sort((a, b) =>
            new Date(a.eventStartDate) > new Date(b.eventStartDate)
              ? 1
              : new Date(b.eventStartDate) > new Date(a.eventStartDate)
              ? -1
              : 0
          )
          .map((tournamentDetails, index) => (
            <Accordion
              sx={{
                background: "#f8fafc",
                overflow: "hidden",
                marginTop:
                  index === 0 && expanded === `panel${index}`
                    ? "-1rem"
                    : "0rem",
                width: "100%",
              }}
              expanded={expanded === `panel${index}`}
              onChange={handleChange(`panel${index}`)}
              key={index}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls='panel1bh-content'
                id='panel1bh-header'
                sx={{ width: "100%" }}
              >
                <Box sx={{ display: "block", width: "100%", height: "100%" }}>
                  <Box sx={{ display: "flex", height: "100%" }}>
                    <Typography
                      sx={{
                        width: { xs: "90%", sm: "100%" },
                        flexShrink: 0,
                        // fontSize: "0.8rem",
                        // whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        paddingInline: "0 1rem",
                        paddingBlock: "0",
                        marginBlock: "0",
                        height: "100%",
                      }}
                      className='text-blueGray-500 align-middle text-sm uppercase font-semibold text-left'
                    >
                      {tournamentDetails.eventName}
                    </Typography>
                  </Box>
                  <Box
                    className='py-8'
                    sx={{
                      marginBlock:
                        expanded === `panel${index}`
                          ? "1rem 0rem"
                          : "1rem 2rem",
                      display:
                        new Date(tournamentDetails.eventEndDate) < new Date()
                          ? "block"
                          : "none",
                    }}
                  >
                    <Timer
                      date={
                        new Date(tournamentDetails.eventStartDate) < new Date()
                          ? tournamentDetails.eventEndDate
                          : tournamentDetails.eventStartDate
                      }
                      color={
                        new Date(tournamentDetails.eventStartDate) <
                          new Date() &&
                        new Date(tournamentDetails.eventEndDate) > new Date()
                          ? "red"
                          : "blue"
                      }
                    />
                  </Box>
                  <Box
                    sx={{
                      marginBlock: "0.5rem 0",
                      justifyContent: "space-between",
                      display: expanded === `panel${index}` ? "none" : "flex",
                    }}
                  >
                    <Box>
                      <Typography
                        variant='body2'
                        className='text-blueGray-400'
                        style={{ textAlign: "left" }}
                      >
                        {tournamentDetails.eventStartDate}
                      </Typography>
                    </Box>
                    <Box>
                      <Typography
                        variant='body2'
                        className='text-blueGray-400'
                        style={{ textAlign: "right" }}
                      >
                        {tournamentDetails.eventEndDate}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </AccordionSummary>
              <AccordionDetails>
                <Box sx={{ margin: "0 0 0 -1rem" }}>
                  <Map
                    mapWidth={mapWidth}
                    location={{
                      lat: tournamentDetails.venueLatitude,
                      lng: tournamentDetails.venueLongitude,
                    }}
                  />
                </Box>
                <Typography
                  variant='body2'
                  color='text.secondary'
                  style={{ textAlign: "justify", margin: "22vh 0 1rem 0" }}
                >
                  {tournamentDetails.venueAddress}
                </Typography>
                <Grid container>
                  <Grid xs={6} item>
                    <Typography
                      variant='body2'
                      color='text.secondary'
                      style={{ textAlign: "left" }}
                    >
                      {tournamentDetails.eventStartDate}
                    </Typography>
                  </Grid>
                  <Grid xs={6} item>
                    <Typography
                      variant='body2'
                      color='text.secondary'
                      style={{ textAlign: "right" }}
                    >
                      {tournamentDetails.eventEndDate}
                    </Typography>
                  </Grid>
                </Grid>
                <Divider variant='middle' sx={{ margin: "0.5rem 0" }} />
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    margin: "0 0 -0.5rem 0",
                  }}
                >
                  <Link to='entries/viewEntries'>
                    <Button
                      sx={{
                        color: "#64748b",
                      }}
                      onClick={() => {
                        handleTournamentId.setTournId(tournamentDetails._id);
                        window.innerWidth > 1000 &&
                          document.getElementById("home").click();
                        handleGiveEntry("Please login to view entry.");
                      }}
                    >
                      View Entries
                    </Button>
                  </Link>
                  {/* {new Date(tournamentDetails.eventStartDate) > new Date() && ( */}
                  {tournamentDetails._id !== "LcRXR8w5QazqE3r4t" && (
                    <Link to='/entries/giveEntries'>
                      <Button
                        sx={{
                          background: "#DD482D",
                          color: "#F1F1F1",
                          transition: "0.1s all ease",
                          "&:hover": {
                            background: "#DD482D",
                            color: "#F1F1F1",
                            transform: "scale(1.01)",
                          },
                        }}
                        onClick={() => {
                          handleTournamentId.setTournId(tournamentDetails._id);
                          window.innerWidth > 1000 &&
                            document.getElementById("login").click();
                          handleGiveEntry("Please login to give entry.");
                        }}
                      >
                        Give Entry
                      </Button>
                    </Link>
                  )}
                  {/* )} */}
                </Box>
              </AccordionDetails>
            </Accordion>
          ))
      ) : loading ? (
        <LoadingComponent />
      ) : (
        <Box className='flex flex-wrap items-center'>
          <Box className='relative w-full px-4 max-w-full flex-grow flex-1'>
            <h6 className='tailwind_h6 font-semibold text-base text-blueGray-700 py-1'>
              Please await announcement
            </h6>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default UpcomingTournamentsComponent;
