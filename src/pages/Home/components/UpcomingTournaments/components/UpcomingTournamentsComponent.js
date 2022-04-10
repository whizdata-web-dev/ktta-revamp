import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  CircularProgress,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Map from "../../../../../components/map/Map";
import SubscribeTournament from "./SubscribeTournament";
import EntriesContainer from "../container/EntriesContainer";

const UpcomingTournamentsComponent = ({
  handleGiveEntry,
  getUser,
  data,
  handleChange,
  expanded,
  mapWidth,
  open,
  handleClickOpen,
  handleClose,
}) => {
  return (
    <Box
      className={`block w-full px-4 overflow-y-auto pb-6`}
      sx={{ marginTop: "-1rem" }}
    >
      <SubscribeTournament
        open={open}
        handleClose={handleClose}
        getUser={getUser}
      />
      {open && open !== "give" && (
        <EntriesContainer open={open} handleClose={handleClose} />
      )}
      {Object.keys(data).length !== 0 ? (
        data.map((tournamentDetails, index) => (
          <Accordion
            sx={{ background: "#f8fafc", overflow: "hidden" }}
            expanded={expanded === `panel${index}`}
            onChange={handleChange(`panel${index}`)}
            key={index}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls='panel1bh-content'
              id='panel1bh-header'
            >
              <Box sx={{ display: "flex" }}>
                <Typography
                  sx={{
                    width: { xs: "90%", md: "66%" },
                    flexShrink: 0,
                    fontSize: "0.8rem",
                  }}
                  className='text-blueGray-500 align-middle text-xs uppercase font-semibold text-left'
                >
                  {tournamentDetails.eventName}
                </Typography>
              </Box>
            </AccordionSummary>
            <AccordionDetails>
              <Box sx={{ margin: "0 0 0 -1rem" }}>
                {/* <Map
                  mapWidth={mapWidth}
                  location={{
                    lat: "12.9708136",
                    lng: "77.5937793",
                  }}
                /> */}
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
                <Button
                  sx={{
                    color: "#64748b",
                  }}
                  onClick={() => handleClickOpen("view", tournamentDetails)}
                >
                  View Entries
                </Button>
                <Button
                  sx={{
                    background: "#64748b",
                    color: "#F1F1F1",
                    transition: "0.1s all ease",
                    "&:hover": {
                      background: "#64748b",
                      color: "#F1F1F1",
                      transform: "scale(1.01)",
                    },
                  }}
                  onClick={() =>
                    getUser ? handleClickOpen("give") : handleGiveEntry()
                  }
                >
                  Give Entry
                </Button>
              </Box>
            </AccordionDetails>
          </Accordion>
        ))
      ) : (
        <Box
          sx={{ display: "flex", justifyContent: "center", margin: "2rem 0" }}
        >
          <CircularProgress sx={{ color: "#332861" }} />
        </Box>
      )}
    </Box>
  );
};

export default UpcomingTournamentsComponent;
