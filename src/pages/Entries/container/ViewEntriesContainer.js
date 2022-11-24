import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { RequestData } from "../../../assets/utils/RequestData";
import ViewEntriesComponent from "../component/ViewEntriesComponent";

const ViewEntriesContainer = ({ data }) => {
  const [playersData, setPlayersData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [eventId, setEventId] = useState("");
  const tournamentName = data?.tournamentList.tournamentName;

  const handleChange = (event) => {
    setEventId(event.target.value);
  };

  const createEventDetails = (eventsId, events) => {
    let eventObject = [];
    events.forEach((eventName, index) => {
      eventObject.push({
        eventName,
        eventId: eventsId[index],
      });
    });
    return eventObject.sort((a, b) =>
      a.eventName > b.eventName ? 1 : b.eventName > a.eventName ? -1 : 0
    );
  };

  const eventDetails = createEventDetails(
    data?.resultID.eventsUnderTournament,
    data?.eventList.events
  );

  useEffect(() => {
    async function getData() {
      await RequestData(
        "GET",
        `listOfEntries?caller=${process.env.REACT_APP_CALLER}&apiKey=${process.env.REACT_APP_API_KEY}&tournamentId=${data.tournamentList.tournamentId}&eventId=${eventId}`
      )
        .then((response) => {
          if (response && response.result) {
            setPlayersData(response.result);
            setLoading(false);
          }
        })
        .catch((error) => {
          // Error display Pending
        });
    }
    if (eventId) {
      setLoading(true);
      getData();
    }
  }, [eventId]); // eslint-disable-line

  return (
    <Box sx={{ width: "100%" }}>
      <ViewEntriesComponent
        tournamentName={tournamentName}
        eventId={eventId}
        eventDetails={eventDetails}
        handleChange={handleChange}
        loadingPlayerData={loading}
        playersData={playersData}
      />
    </Box>
  );
};

export default ViewEntriesContainer;
