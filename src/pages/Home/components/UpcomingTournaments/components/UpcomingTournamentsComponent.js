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

const UpcomingTournamentsComponent = ({
  handleGiveEntry,
  getUser,
  ref,
  data,
  handleChange,
  expanded,
  mapWidth,
  open,
  setOpen,
}) => {
  return (
    <Box className={`block w-full px-4`}>
      <SubscribeTournament open={open} setOpen={setOpen} getUser={getUser} />
      {Object.keys(data).length !== 0 ? (
        data.map((tournamentDetails, index) => (
          <Accordion
            sx={{ background: "#f8fafc", overflow: "hidden" }}
            expanded={expanded}
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
                  sx={{ width: "66%", flexShrink: 0, fontSize: "0.8rem" }}
                  className='text-blueGray-500 align-middle text-xs uppercase whitespace-nowrap font-semibold text-left'
                >
                  {tournamentDetails.eventName}
                </Typography>
              </Box>
            </AccordionSummary>
            <AccordionDetails ref={ref}>
              <Box sx={{ margin: "0 0 0 -1rem" }}>
                <Map
                  mapWidth={mapWidth}
                  location={{
                    lat: "12.9708136",
                    lng: "77.5937793",
                  }}
                />
              </Box>
              <Typography
                variant='body2'
                color='text.secondary'
                style={{ textAlign: "justify", margin: "25vh 0 1rem 0" }}
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
              <Button
                sx={{
                  float: "right",
                  color: "#64748b",
                  margin: "0 0 0.5rem 0",
                }}
                onClick={() => (getUser ? setOpen(true) : handleGiveEntry())}
              >
                Give Entry
              </Button>
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
