import { Box, Card } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import React from "react";
import Draw from "../components/Draw";

const TournamentContainer = ({
  eventList,
  result,
  tournamentId,
  eventName,
  handleEventNameChange,
}) => {
  return (
    <Card sx={{ border: 0, boxShadow: 0, minHeight: "80vh" }}>
      <Box className='py-5 text-center'>
        <Box className='flex flex-wrap justify-center'>
          <Box className='w-full lg:w-8/12'>
            <Box className='lg-py-6 lg-mt-32 mt-8'>
              <h6
                className='tailwind_h6 text-xl font-normal leading-normal mt-0 mb-2 text-slate-500'
                style={{ textAlign: "center" }}
              >
                {result && result.eventName}
              </h6>
            </Box>
          </Box>
          <Box className='w-full md:6/12 lg:w-3/12 px-4'>
            <Box className='lg-py-6 px-3 lg-mt-32 mt-8'>
              <Box>
                <FormControl fullWidth>
                  <InputLabel id='tournament-select-label'>
                    Choose Event
                  </InputLabel>
                  <Select
                    labelId='tournament-select-label'
                    id='tournament-select'
                    value={eventName}
                    label='Choose Event'
                    onChange={handleEventNameChange}
                  >
                    {eventList &&
                      eventList.map((name, index) => (
                        <MenuItem value={name} key={index}>
                          {name}
                        </MenuItem>
                      ))}
                  </Select>
                </FormControl>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      {eventName ? (
        <Box>
          <Draw eventName={eventName} tournamentId={tournamentId} />
        </Box>
      ) : (
        <Box sx={{ margin: "2rem 0" }}>
          <h4 className='tailwind_h4 text-3xl text-center font-normal leading-normal mt-0 mb-2 text-lightBlue-800'>
            Please choose an event
          </h4>
        </Box>
      )}
    </Card>
  );
};

export default TournamentContainer;
