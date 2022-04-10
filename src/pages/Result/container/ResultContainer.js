import { Box, CircularProgress } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { decryptData } from "../../../assets/utils/functions";
import { RequestData } from "../../../assets/utils/RequestData";
import TournamentContainer from "./TournamentContainer";

const ResultContainer = () => {
  const params = useParams();

  const isDataInStorage = localStorage.getItem("result");

  const [loading, setLoading] = useState(false);

  const [eventName, setEventName] = useState("");
  const [eventList, setEventList] = useState("");
  const [result, setResult] = useState([]);

  const handleEventNameChange = (event) => {
    setEventName(event.target.value);
    setResult([]);
  };

  const fetchResult = async () => {
    RequestData(
      "GET",
      `PastTournamentsOnApiKey?caller=KTTA1&apiKey=dd5e611bf286042db7257ee998e5112b&userId=MnNwLA6gtLNmafai9`
    )
      .then((response) => {
        if (response.result && response.result.resultID) {
          setEventList(
            response.result.eventList
              .filter((event) => event.tournamentId === params.tournamentId)[0]
              .events.sort()
          );
          setResult(
            response.result.resultID.filter(
              (data) => data._id === params.tournamentId
            )[0]
          );
          setLoading(false);
        }
      })
      .catch((error) => {});
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchResult();

    if (isDataInStorage && Object.keys(isDataInStorage).length > 0) {
      const { eventList, resultID } = decryptData(
        localStorage.getItem("result")
      );
      setEventList(
        eventList
          .filter((event) => event.tournamentId === params.tournamentId)[0]
          .events.sort()
      );
      setResult(resultID.filter((data) => data._id === params.tournamentId)[0]);
    } else {
      setLoading(true);
      fetchResult();
    }
    return () => {
      setEventList("");
      setResult([]);
    };
  }, [params.tournamentId, eventName]);

  return (
    <>
      {!loading ? (
        <TournamentContainer
          eventList={eventList}
          result={result}
          tournamentId={params.tournamentId}
          eventName={eventName}
          handleEventNameChange={handleEventNameChange}
        />
      ) : (
        <Box sx={{ margin: "2rem 0", textAlign: "center" }}>
          <CircularProgress sx={{ color: "#64748b" }} />
        </Box>
      )}
    </>
  );
};

export default ResultContainer;
